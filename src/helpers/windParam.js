export function updateWindDirection(windDeg) {
	const windIcon = document.querySelector('.wind-direction-icon')
	const windText = document.querySelector('.wind-direction-text')

	const iconRotate = (windDeg + 180) % 360
	windIcon.style.transform = `rotate(${iconRotate}deg)`

	const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
	const normalizedDegrees = (windDeg + 360) % 360
	const index = Math.round(normalizedDegrees / 45) % 8
	windText.textContent = directions[index] || 'N/d'
}