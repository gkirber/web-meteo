import { getWeatherByForm } from './components/inputForm.js'
import { switchTheme } from './components/switchTheme.js'
import { getGeoData } from './src/api/geoData.js'
import { renderCurrentTime } from './src/helpers/currentTime.js'

export function initApp() {
	switchTheme()
	getWeatherByForm()
	getGeoData()
	renderCurrentTime()
}
