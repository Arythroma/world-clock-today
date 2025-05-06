# 🌍 Digital World Clock

**world-clock-today** is a simple and useful web app that shows the current time in different cities around the world. It is built using React and allows you to easily add or remove cities to see their local time.

## 🕰️ Features

- Shows your local time automatically
- Lets you add world cities and see their current time
- Supports more than 30 cities with correct time zones
- Saves added cities using `localStorage`
- Clean and responsive design for all devices
- Easy to use and fast interface

## 🛠️ Technologies Used

- **React** – for building the user interface
- **JavaScript** – for app logic
- **CSS** – for styling
- **Intl.DateTimeFormat** – for accurate time formatting

## 🚀 How to Install and Run

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Arythroma/world-clock-today.git
   cd world-clock-today
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. Open your browser and go to [http://localhost:5173](http://localhost:5173)

## Technologies Used

- React (JavaScript library)
- Vite (for fast build and dev server)
- CSS (for styling)
- Intl.DateTimeFormat API (to handle time zones)

## Project Structure

- `main.jsx`: Main entry point for the React app.
- `App.jsx`: The main component that controls the app logic.
- `components/CityCard.jsx`: A card component that displays city name and time.
- `components/Controls.jsx`: Select city and timezone, and add city.
- `timezones.js`: A list of available cities and their timezones.
- `App.css`: Styling for the whole app.
- `index.html`: The HTML structure used by Vite.

## License

This project is open source and free to use.

---
Created by Mohamed Osama Shab.