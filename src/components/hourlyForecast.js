const hourlyForecast = document.querySelector('.hourly-scroll')
import { showError } from './error.js'

export const renderHourlyForecast = data => {
	hourlyForecast.innerHTML = ''

	if (!data) {
		showError('Weather data unavailable')
	}

	const currentDate = new Date()

	currentDate.setHours(0, 0, 0, 0)

	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

	const timezoneOffset = data.city.timezone * 1000

	data.list.forEach(item => {
		const date = new Date(item.dt * 1000 + timezoneOffset)
		const hour = date.getHours()
		const temp = Math.round(item.main.temp)
		const icon = item.weather[0].icon

		const forecastDate = new Date(date)
		forecastDate.setHours(0, 0, 0, 0)

		const timeDiff = forecastDate.getTime() - currentDate.getTime()

		const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

		let dayLabel

		if (dayDiff === 0) {
			dayLabel = 'Today'
		} else if (dayDiff === 1) {
			dayLabel = 'Tomorrow'
		} else {
			dayLabel = daysOfWeek[forecastDate.getDay()]
		}

		const hourlyItem = document.createElement('div')
		hourlyItem.classList.add('hourly-item')
		hourlyItem.innerHTML = `
        <p class="hour">${dayLabel}</p>
        <p class="hour">${hour}:00</p>
        <img
          src="https://openweathermap.org/img/wn/${icon}@4x.png"
          alt="Weather"
        />
        <p class="temp">${temp} °C</p>
    `
		hourlyForecast.append(hourlyItem)
	})
}
