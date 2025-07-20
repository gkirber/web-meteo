import { showError } from '../components/error.js'

const cityInput = document.querySelector('.city-input')

export const isCyrillic = text => {
	const cyrillicPattern = /^[А-Яа-яЁё\s-]+$/
	return cyrillicPattern.test(text)
}

cityInput.addEventListener('input', () => {
	const inputValue = cityInput.value

	if (inputValue && !isCyrillic(inputValue)) {
		showError('Please enter in Cyrillic')
	} else {
		showError('')
	}
})
