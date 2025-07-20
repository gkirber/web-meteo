import { updateWindDirection } from '../src/helpers/windParam.js'
import { updateHumidityScale } from '../src/helpers/humidityParam.js'
import { formatTime } from '../src/helpers/formatTime.js'
import { calcDayLength } from '../src/helpers/calcDayLength.js'
import { calcSunPosition, updateSunPosition } from '../src/helpers/calcSunPosition.js'

const currentCity = document.querySelector('.city')
const currentTemp = document.querySelector('.temperature')
const feelsLike = document.querySelector('.feels')
const currentDescription = document.querySelector('.description')
const currentWeatherIcon = document.querySelector('.weather-icon img')
const currentWind = document.querySelector('.wind')
const currentVisibility = document.querySelector('.visibility')
const currentHumidity = document.querySelector('.humidity')
const currentPressure = document.querySelector('.pressure')
const sunriseItem = document.querySelector('.sunrise')
const sunsetItem = document.querySelector('.sunset')
const dayLength = document.querySelector('.day-length')


export const renderCurrentWeather = (data, city) => {
	currentCity.textContent = city || 'Unknown'
	currentTemp.textContent = `${Math.round(data.main?.temp || 0)}°C`
	feelsLike.textContent = `${Math.round(data.main?.feels_like || 0)}°C`
	currentDescription.textContent = data.weather?.[0]?.description || 'Unknown'
	currentWeatherIcon.src = `https://openweathermap.org/img/wn/${data.weather?.[0]?.icon || '01d'}@2x.png`
	currentWind.textContent = `${Math.round(data.wind?.speed || 0)} m/s`
	const visibility = data.visibility || 0
	if (visibility > 1000) {
		currentVisibility.textContent = `${visibility / 1000} km`
	} else {
		currentVisibility.textContent = `${visibility} m`
	}
	currentHumidity.textContent = `${data.main?.humidity || 0}%`
	currentPressure.textContent = `${Math.round((data.main?.pressure || 0) * 0.750062)} mmHg`

	const windDegrees = data.wind?.deg || 0
	updateWindDirection(windDegrees)

	const humidity = data.main?.humidity || 0
	updateHumidityScale(humidity)

	const { sunrise, sunset } = data.sys || {}

	const { timezone } = data || {}

	sunriseItem.textContent = sunrise ? formatTime(sunrise, timezone) : 'N/A'
	sunsetItem.textContent = sunset ? formatTime(sunset, timezone) : 'N/A'

	dayLength.textContent = `Day length: ${sunrise && sunset ? calcDayLength(sunrise, sunset) : 'N/A'}`

	const sunPosition = sunrise && sunset ? calcSunPosition(sunrise, sunset) : 0
	updateSunPosition(sunPosition)
}