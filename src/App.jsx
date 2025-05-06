import React, { useEffect, useState } from "react";
import "./App.css";
import Controls from "./components/Controls";
import CityCard from "./components/CityCard";

const App = () => {
    const [cities, setCities] = useState([]);
    const [times, setTimes] = useState({});
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedTimezone, setSelectedTimezone] = useState("");

    useEffect(() => {
        const storedCities = JSON.parse(localStorage.getItem("cities")) || [];

        if (!storedCities.some(city => city.name === "Local")) {
            storedCities.unshift({ name: "Local", timezone: Intl.DateTimeFormat().resolvedOptions().timeZone });
        }

        setCities(storedCities);
    }, []);

    useEffect(() => {
        const updateTimes = () => {
            const now = new Date();
            const updated = {
                Local: new Intl.DateTimeFormat("en-GB", {
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                }).format(now),
            };

            cities.forEach((city) => {
                updated[city.name] = new Intl.DateTimeFormat("en-GB", {
                    timeZone: city.timezone,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                }).format(now);
            });

            setTimes(updated);
        };

        updateTimes();
        const interval = setInterval(updateTimes, 1000);
        return () => clearInterval(interval);
    }, [cities]);

    useEffect(() => {
        localStorage.setItem("cities", JSON.stringify(cities));
    }, [cities]);

    const addCity = () => {
        if (selectedCity && selectedTimezone && !cities.some((c) => c.name === selectedCity)) {
            setCities([...cities, { name: selectedCity, timezone: selectedTimezone }]);
            setSelectedCity("");
            setSelectedTimezone("");
        }
    };

    const removeCity = (name) => {
        setCities(cities.filter((city) => city.name !== name));
    };

    return (
        <div className="container">
            <h1 className="title">🌍 Digital World Clock</h1>
            <p className="local-time">Local Time: {times["Local"]}</p>

            <Controls
                selectedCity={selectedCity}
                selectedTimezone={selectedTimezone}
                setSelectedCity={setSelectedCity}
                setSelectedTimezone={setSelectedTimezone}
                addCity={addCity}
            />

            <div className="city-grid">
                {cities.filter(city => city.name !== "Local").map((city) => (
                    <CityCard key={city.name} city={city} time={times[city.name]} removeCity={removeCity} />
                ))}
            </div>
        </div>
    );
};

export default App;
