export const replaceAbbreviations = city => {
	const lowerCaseCity = city.toLowerCase()

	if (cityAbbreviations[lowerCaseCity]) {
		return cityAbbreviations[lowerCaseCity]
	}
	return city
}

const cityAbbreviations = {
	waw: 'Warszawa',
	krk: 'Kraków',
	pozn: 'Poznań',
	wro: 'Wrocław',
	ldz: 'Łódź',
	gdn: 'Gdańsk',
}
