const errorMessage = document.getElementById('error-message')

export function showError(message) {
	errorMessage.textContent = message
	errorMessage.classList.add('show')
}

export function hideError() {
	errorMessage.classList.remove('show')
}
