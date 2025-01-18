# CloudAPI-Explorer

## Overview
The Weather App is a web-based application that allows users to enter the name of any city and receive real-time information about the weather and local time of that city. All data is fetched dynamically through API calls, providing accurate and up-to-date information.

---

## Features
- **City Search**: Users can input the name of any city to fetch its weather and time information.
- **Real-Time Weather Details**:
  - Current temperature
  - Weather conditions (e.g., sunny, misty, etc.)
  - Feels-like temperature
  - Humidity
  - Wind speed
  - Heat index
- **Air Quality Information**:
  - CO, NO₂, O₃, SO₂, PM2.5, PM10 values
  - Overall air quality indicator (e.g., Moderate, Good)
- **Local Time**: Displays the current local time of the searched city.
- **Responsive Design**: The app is fully responsive, providing a seamless experience on both desktop and mobile devices.
- **Interactive Background**: A stylish, animated cosmic background enhances the user experience.
- **Dynamic Error Handling**: Displays a clear error message if the user enters an invalid city name.

---

## Technologies Used
- **Frontend**:
  - HTML5
  - CSS3 (including Tailwind CSS for responsive design and custom animations)
  - JavaScript (for DOM manipulation and API calls)
- **API**:
  - Weather data fetched from [WeatherAPI](https://www.weatherapi.com/).

---

## How It Works
1. The user enters the name of a city in the input field.
2. On clicking the **SEARCH** button, the app sends an API request to WeatherAPI to fetch the following data:
   - Location details (latitude, longitude, local time)
   - Weather information (temperature, condition, humidity, wind speed, etc.)
   - Air quality parameters
3. The app dynamically updates the UI to display the fetched information.
4. If the user enters an invalid city name, an error message is displayed, prompting them to enter a valid city name.

---

## API Integration
- **Base URL**: `https://api.weatherapi.com/v1`
- **Endpoints Used**:
  - `/current.json` - Fetches current weather and air quality data.
- **Parameters**:
  - `key`: Your WeatherAPI key.
  - `q`: The city name entered by the user.
  - `aqi`: Air quality index (set to `yes`).

Example API Request:
```javascript
fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London&aqi=yes`)
```

---

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/AbhiKhokhar/CloudAPI-Explorer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CloudAPI-Explorer
   ```
3. Open the project in your preferred code editor.
4. Replace `YOUR_API_KEY` in the JavaScript file with your WeatherAPI key.
5. Open `index.html` in a web browser to use the app.

---

## Usage
1. Open the app in any web browser.
2. Enter the name of the city you want to search for in the input field.
3. Click the **SEARCH** button.
4. View real-time weather details, air quality, and local time for the entered city.

---

## Screenshots
### Home Page
![image](https://github.com/user-attachments/assets/ac4c4379-f52f-4203-b7f9-62fbedbeaf0e)


### Weather Information
![image](https://github.com/user-attachments/assets/c56222c6-7b8c-4547-a017-f1117b2e8d55)

### Error Handling
![image](https://github.com/user-attachments/assets/e4c7ba98-b4a3-4dd5-baaf-56bd4eedc046)


---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author
- **Abhi Khokhar**
- [GitHub Profile](https://github.com/abhiKhokhar)
- [Portfolio](https://abhikhokhar.live)

