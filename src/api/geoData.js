import { showError } from '../../components/error.js'
import { cityInput } from '../../components/inputForm.js'
import { replaceAbbreviations } from '../helpers/cityAbbreviation.js'
import { saveCityToLocalStorage } from '../helpers/saveCityToLocalStorage.js'
import { apiKey, baseUrl } from './apiKeyAndHost.js'
import { getWeather, getForecast } from './getWeatherAndForecast.js'
import { renderCurrentWeather } from '../../components/currentWeather.js'
import { renderHourlyForecast } from '../../components/hourlyForecast.js'
import { renderDailyForecast } from '../../components/dailyForecast.js'

export const getGeoData = async (cityParam = null) => {
	let city = cityParam || cityInput.value.trim()

	// Якщо місто порожнє, не робимо запит
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
			throw new Error('No matching city found')
		}

		const { lat, lon } = geoData[0]

		saveCityToLocalStorage(city)

		const weatherData = await getWeather(lat, lon)
		const forecastData = await getForecast(lat, lon)

		console.log(weatherData)
		console.log(forecastData)

		renderCurrentWeather(weatherData, city)
		renderHourlyForecast(forecastData)
		renderDailyForecast(forecastData)
	} catch (error) {
		console.error(error.message)
		showError('Data not received')
	}
}
