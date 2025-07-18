// Weather App JavaScript

// DOM Elements
const themeSwitch = document.getElementById('themeSwitch')
const searchForm = document.querySelector('.search-form')
const cityInput = document.querySelector('.city-input')
const errorMessage = document.getElementById('error-message')
const toTopButton = document.getElementById('toTop')
const currentYear = document.getElementById('currentYear')

// Initialize app
const initApp = () => {
	setCurrentYear()
	setupEventListeners()
	loadTheme()
}

// Set current year in footer
const setCurrentYear = () => {
	const year = new Date().getFullYear()
	if (currentYear) {
		currentYear.textContent = year
	}
}

// Setup event listeners
const setupEventListeners = () => {
	// Theme switch
	if (themeSwitch) {
		themeSwitch.addEventListener('change', handleThemeChange)
	}

	// Search form
	if (searchForm) {
		searchForm.addEventListener('submit', handleSearch)
	}

	// To top button
	if (toTopButton) {
		toTopButton.addEventListener('click', scrollToTop)
		window.addEventListener('scroll', toggleToTopButton)
	}
}

// Handle theme change
const handleThemeChange = () => {
	const isDark = themeSwitch.checked
	document.body.classList.toggle('dark-theme', isDark)
	localStorage.setItem('theme', isDark ? 'dark' : 'light')
}

// Load saved theme
const loadTheme = () => {
	const savedTheme = localStorage.getItem('theme')
	if (savedTheme === 'dark') {
		themeSwitch.checked = true
		document.body.classList.add('dark-theme')
	}
}

// Handle search
const handleSearch = e => {
	e.preventDefault()
	const city = cityInput.value.trim()

	if (!city) {
		showError('Please enter a city name')
		return
	}

	// Here you would typically make an API call to get weather data
	console.log('Searching for:', city)
	hideError()

	// For demo purposes, just show success
	showSuccess(`Weather data for ${city} would be displayed here`)
}

// Show error message
const showError = message => {
	if (errorMessage) {
		errorMessage.textContent = message
		errorMessage.style.display = 'block'
	}
}

// Hide error message
const hideError = () => {
	if (errorMessage) {
		errorMessage.style.display = 'none'
	}
}

// Show success message
const showSuccess = message => {
	console.log(message)
	// You could implement a success message display here
}

// Scroll to top
const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

// Toggle to top button visibility
const toggleToTopButton = () => {
	if (toTopButton) {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop
		toTopButton.style.display = scrollTop > 300 ? 'block' : 'none'
	}
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp)
