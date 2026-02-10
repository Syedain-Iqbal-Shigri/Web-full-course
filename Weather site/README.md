# Weather Dashboard Project

A beautiful, responsive weather application that fetches real-time weather data using the OpenWeatherMap API.

## Features

- 🌤️ Real-time weather data
- 📍 Search any city worldwide
- 🌡️ Temperature, humidity, wind speed, and pressure
- 📅 5-day weather forecast
- 📱 Fully responsive design
- ✨ Beautiful gradient UI with smooth animations

## Getting Started

### 1. Get API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate your API key
4. Replace `YOUR_API_KEY_HERE` in the code with your actual API key

### 2. Run the Project

Simply open `index.html` in your browser. No build tools required!

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Gradients, Animations
- **JavaScript ES6+**: Async/Await, Fetch API, Template Literals

## Code Highlights

### API Integration
```javascript
async function searchWeather() {
    const weatherResponse = await fetch(
        `${API_BASE}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const weatherData = await weatherResponse.json();
    displayWeather(weatherData);
}
```

### Responsive Grid Layout
```css
.forecast {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
}
```

### Modern CSS Features
- CSS Grid for layouts
- Flexbox for alignment
- CSS Variables for theming
- Backdrop filters for glassmorphism
- Smooth transitions and transforms

## Learning Objectives

This project teaches:
1. **API Integration**: How to fetch and handle external data
2. **Async JavaScript**: Using async/await for asynchronous operations
3. **Error Handling**: Try-catch blocks and user feedback
4. **DOM Manipulation**: Dynamic content rendering
5. **Responsive Design**: Mobile-first approach
6. **Modern CSS**: Gradients, shadows, animations

## Customization Ideas

1. **Add Dark Mode**: Toggle between light and dark themes
2. **Geolocation**: Auto-detect user's location
3. **Local Storage**: Remember last searched cities
4. **Charts**: Add temperature graphs using Chart.js
5. **More Data**: Display sunrise/sunset times, UV index
6. **Animations**: Add weather-specific animations (rain, snow)

## API Endpoints Used

- Current Weather: `api.openweathermap.org/data/2.5/weather`
- 5 Day Forecast: `api.openweathermap.org/data/2.5/forecast`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

**API Key Error**: Make sure you've replaced the placeholder with your actual API key

**City Not Found**: Check spelling and try adding country code (e.g., "London,UK")

**CORS Error**: Some browsers may block API calls when opening HTML directly. Use a local server or Live Server extension

## Resources

- [OpenWeatherMap API Docs](https://openweathermap.org/api)
- [Fetch API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Next Steps

After completing this project, try:
- Building a weather app with React
- Adding weather maps integration
- Creating weather notifications
- Implementing weather-based background themes
