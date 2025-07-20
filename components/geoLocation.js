import { apiKey, baseUrl } from '../api/apiKeyAndHost.js'
import { getForecast, getWeather } from '../api/getWeatherAndForecast.js'
import { renderCurrentWeather } from './currentWeather.js'
import { renderDailyForecast } from './dailyForecast.js'
import { showError } from './error.js'
import { renderHourlyForecast } from './hourlyForecast.js'

export function geoLocation() {
	document.addEventListener('DOMContentLoaded', async () => {
		try {
			const { latitude, longitude } = await getBrowserGeolocation()
			const locationName = await geoLocationName(latitude, longitude)
			await fetchWeatherByCoords(latitude, longitude, locationName)
		} catch (error) {
			console.error('Error getting geolocation: ', error.message)
			showError(
				'Unable to determine your location. Please enter the city manually'
			)
		}
	})
}

const getBrowserGeolocation = () => {
	return new Promise((resolve, reject) => {
		if (!navigator.geolocation) {
			reject(new Error('Geolocation is not supported by your browser'))
		} else {
			navigator.geolocation.getCurrentPosition(
				position => {
					const { latitude, longitude } = position.coords
					resolve({ latitude, longitude })
				},
				error => {
					reject(error)
				}
			)
		}
	})
}

const geoLocationName = async (latitude, longitude) => {
	const reverseGeocodingUrl = new URL(`${baseUrl}/geo/1.0/reverse`)

	const queryParams = new URLSearchParams({
		lat: latitude,
		lon: longitude,
		limit: 1,
		appid: apiKey,
	})

	const url = `${reverseGeocodingUrl}?${queryParams.toString()}`

	try {
		const response = await fetch(url)
		const data = await response.json()

		if (data && data.length > 0) {
			const { local_names } = data[0]
			const ukrainianName = local_names?.ua || data[0].name
			return `${ukrainianName}`
		} else {
			throw new Error('Place name not found')
		}
	} catch (error) {
		console.error('Error getting place name: ', error.message)
		showError('Error getting place name')
	}
}

const fetchWeatherByCoords = async (latitude, longitude, locationName) => {
	try {
		const weatherData = await getWeather(latitude, longitude)
		const forecastData = await getForecast(latitude, longitude)

		renderCurrentWeather(weatherData, locationName)
		renderHourlyForecast(forecastData)
		renderDailyForecast(forecastData)
	} catch (error) {
		console.error(error.message)
		showError('Unable to get weather data. Please try again later')
	}
}
