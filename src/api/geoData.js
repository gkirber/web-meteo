import { renderCurrentWeather } from '../components/currentWeather.js'
import { renderDailyForecast } from '../components/dailyForecast.js'
import { showError } from '../components/error.js'
import { renderHourlyForecast } from '../components/hourlyForecast.js'
import { cityInput } from '../components/inputForm.js'
import { replaceAbbreviations } from '../helpers/cityAbbreviation.js'
import { saveCityToLocalStorage } from '../helpers/saveCityToLocalStorage.js'
import { apiKey, baseUrl } from './apiKeyAndHost.js'
import { getForecast, getWeather } from './getWeatherAndForecast.js'

export const getGeoData = async () => {
	let city = cityInput.value.trim()

	if (!city) {
		return
	}

	city = replaceAbbreviations(city)

	try {
		const geoUrl = `${baseUrl}/geo/1.0/direct`
		const queryParams = new URLSearchParams({
			q: city,
			limit: 1,
			appid: apiKey,
		})

		const geoResponse = await fetch(`${geoUrl}?${queryParams.toString()}`)

		const geoData = await geoResponse.json()

		if (!geoData.length) {
			throw new Error('City not found')
		}

		const { lat, lon } = geoData[0]

		saveCityToLocalStorage(city)

		const weatherData = await getWeather(lat, lon)
		const forecastData = await getForecast(lat, lon)

		renderCurrentWeather(weatherData, city)
		renderHourlyForecast(forecastData)
		renderDailyForecast(forecastData)
	} catch (error) {
		console.error(error.message)
		showError('Data not received')
	}
}
