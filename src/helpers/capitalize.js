export const capitalizeCity = city => {
	if (!city) return city

	const citiesWithHyphens = ['San-Luis', 'Aix-les-Bains']

	if (citiesWithHyphens.includes(city)) {
		return city
			.toLowerCase()
			.split(/[\s-]/)
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join('-')
	}

	return city
		.toLowerCase()
		.split(/[\s-]/)
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
}
