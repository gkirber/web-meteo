export const saveCityToLocalStorage = (city) => {
	let cities = JSON.parse(localStorage.getItem('recentCities')) || []
	localStorage.setItem('recentCities', JSON.stringify(city))
	}
