export const formatTime = (date) => {
	const datePart = date.toLocaleDateString('uk-UA', {
		weekday: 'short',
		day: 'numeric',
		month: 'short',
	})

	const timePart = date.toLocaleTimeString('uk-UA', {
		hour: '2-digit',
		minute: '2-digit',
	})

	return `${datePart}, ${timePart}`
}

export const renderCurrentTime = () => {
	const nowElement = document.querySelector('.now')
	const currentTime = new Date()

	const formattedTime = formatDate(currentTime)
	nowElement.textContent = `Current time: ${formattedTime}`
}

setInterval(() => {
	renderCurrentTime()
}, 1000)