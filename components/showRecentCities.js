import { cityInput } from './inputForm.js'

const recentCitiesList = document.getElementById('recent-cities-list')

export const showRecentCities = () => {
	const cities = JSON.parse(localStorage.getItem('recentCities')) || []

	if (cities.length === 0) return

	cities.forEach(city => {
		const li = document.createElement('li')
		li.textContent = city
		li.addEventListener('click', () => {
			cityInput.value = city
			recentCitiesList.style.display = 'none'
		})
		recentCitiesList.append(li)
	})

	recentCitiesList.style.display = 'block'
}
