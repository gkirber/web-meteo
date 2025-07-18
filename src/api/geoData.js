import { apiKey, baseUrl } from './apiKeyAndHost.js'
import { cityInput } from '../components/inputForm.js'
import { showError } from '../components/error.js'

export const getGeoData = async () => {
	const city = cityInput.value

	if (!city) return

	try {
		const geoUrl = `${baseUrl}/geo/1.0/direct`
		const queryParams = new URLSearchParams({
			q: city,
			limit: 1,
			appid: apiKey
		})

		const geoResponse = await fetch(`${geoUrl}?${queryParams.toString()}`)

		const geoData = await geoResponse.json()

		if (!geoData.length) {
			throw new Error('No matching city found')
		}

		const { lat, lon } = geoData[0]

		console.log(lat, lon)

	} catch (error) {
		console.error(error.message)
	}



}