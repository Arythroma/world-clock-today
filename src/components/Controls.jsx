import React from "react";
import { cityOptions } from "../timezones";

const Controls = ({ selectedCity, selectedTimezone, setSelectedCity, setSelectedTimezone, addCity }) => {
    return (
        <div className="controls">
            <select
                value={selectedCity}
                onChange={(e) => {
                    const city = cityOptions.find((c) => c.name === e.target.value);
                    if (city) {
                        setSelectedCity(city.name);
                        setSelectedTimezone(city.timezone);
                    }
                }}
                className="select"
            >
                <option value="">Select City</option>
                {cityOptions.map((city) => (
                    <option key={city.name} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </select>

            <select
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="select"
                disabled={!selectedCity}
            >
                <option value="">Select Timezone</option>
                {cityOptions.map((city) => (
                    <option key={city.timezone} value={city.timezone}>
                        {city.timezone}
                    </option>
                ))}
            </select>

            <button onClick={addCity} className="add-city-btn" disabled={!selectedCity || !selectedTimezone}>
                Add City
            </button>
        </div>
    );
};

export default Controls;
