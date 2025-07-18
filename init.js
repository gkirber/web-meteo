import { switchTheme } from './components/switchTheme.js'
import { getGeoData } from './api/geoData.js'

export function initApp() {
	switchTheme()
	getGeoData()
}