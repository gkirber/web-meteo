import { switchTheme } from './components/switchTheme.js'
import { getGeoData } from './api/geoData.js'
import { getWeatherByForm } from './components/inputForm.js'

export function initApp() {
	switchTheme()
	getGeoData()
	getWeatherByForm()
}