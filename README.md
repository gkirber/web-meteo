# Web Meteo

## 🌦️ Description

**Web Meteo** is a modern weather web application that allows you to view current weather, hourly, and 5-day forecasts for any city or your current geolocation. The app features a light/dark theme switcher, a user-friendly interface, and recent city search history.

---

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge" alt="CSS3"/>
  <img src="https://img.shields.io/badge/OpenWeatherMap-FFB300?logo=OpenWeatherMap&logoColor=white&style=for-the-badge" alt="OpenWeatherMap"/>
</p>

---

## 🌐 Live Demo

- [Web-Meteo](https://gkirber.github.io/web-meteo/)

---

## 🚀 Features

- 🔍 Search weather by city
- 📍 Detect weather by user geolocation
- 🌤️ Display current weather, hourly, and 5-day forecast
- 🌓 Light/Dark theme switcher
- 🕑 Show recent city searches
- ⬆️ Smooth scroll-to-top button

---

## 📁 Folder Structure

```
web-meteo/
├── index.html                        # Main HTML file of the app
├── main.js                           # Entry point, app initialization
├── init.js                           # Launches main functions and components
├── public/                           # Public assets (icons, images)
│   ├── icons/                        # UI icons (e.g., wind direction, scroll to top)
│   │   ├── icon-direction.png
│   │   └── icon-toTop.png
│   └── img/                          # Background images for themes
│       ├── clouds.jpg
│       └── space.jpg
├── src/                              # Application source code
│   ├── api/                          # API logic and keys
│   │   ├── apiKeyAndHost.js          # API key and base URL
│   │   ├── geoData.js                # Fetching geodata and weather by city
│   │   └── getWeatherAndForecast.js  # Requests to OpenWeatherMap API
│   ├── components/                   # UI components
│   │   ├── currentWeather.js         # Display current weather
│   │   ├── currentYear.js            # Display current year in footer
│   │   ├── dailyForecast.js          # Display 5-day forecast
│   │   ├── error.js                  # Error display
│   │   ├── geoLocation.js            # Weather by geolocation
│   │   ├── hourlyForecast.js         # Display hourly forecast
│   │   ├── inputForm.js              # City search form
│   │   ├── scrollToTop.js            # Scroll-to-top button
│   │   ├── showRecentCities.js       # Recent city search history
│   │   └── switchTheme.js            # Light/dark theme switcher
│   ├── helpers/                      # Helper functions
│   │   ├── calcDayLength.js          # Calculate day length
│   │   ├── calcSunPosition.js        # Calculate sun position
│   │   ├── capitalize.js             # Capitalize text
│   │   ├── cityAbbreviation.js       # City name abbreviation handling
│   │   ├── currentTime.js            # Display current time
│   │   ├── formatTime.js             # Time formatting
│   │   ├── humidityParam.js          # Humidity handling
│   │   ├── saveCityToLocalStorage.js # Save cities to localStorage
│   │   └── windParam.js              # Wind parameters handling
├── styles/                           # CSS styles
│   ├── current.css                   # Styles for current weather
│   ├── daily.css                     # Styles for 5-day forecast
│   ├── footer.css                    # Footer styles
│   ├── header.css                    # Header styles
│   ├── hourly.css                    # Styles for hourly forecast
│   ├── main.css                      # Main stylesheet, imports others
│   ├── toTop.css                     # Scroll-to-top button styles
│   └── variables.css                 # CSS variables for theming
```

---

## ⚡ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gkirber/web-meteo.git
   cd web-meteo
   ```
2. **Open `index.html` in your browser**
   - Or use a local server (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VSCode)

---

## 💡 Usage

- Enter a city name or allow geolocation to get weather for your location.
- Switch between light and dark themes using the toggle in the header.
- View current weather, hourly, and 5-day forecast.
- Use the scroll-to-top button for easy navigation.
