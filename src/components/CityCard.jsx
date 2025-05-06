import React from "react";

const CityCard = ({ city, time, removeCity }) => {
    return (
        <div className="city-card">
            <h2>{city.name}</h2>
            <p className="time">{time}</p>
            {city.name !== "Local" && (
                <button onClick={() => removeCity(city.name)} className="remove-button">
                    ❌ Remove
                </button>
            )}
        </div>
    );
};

export default CityCard;
