import { getWeatherByForm } from './components/inputForm.js'
import { switchTheme } from './components/switchTheme.js'
import { getGeoData } from './src/api/geoData.js'

export function initApp() {
	switchTheme()

	// Завантажуємо погоду для останнього міста з localStorage, якщо воно є
	const recentCities = JSON.parse(localStorage.getItem('recentCities')) || []
	if (recentCities.length > 0) {
		getGeoData(recentCities[0])
	}

	getWeatherByForm()
}
