import { useEffect, useState } from "react";
import Country from "./Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [travel, setTravel] = useState([]);
  const handleTraveld = (countryData) => {
    setTravel([...travel, countryData]);
  };

  return (
    <div>
      {useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
          .then((res) => res.json())
          .then((data) => setCountries(data));
      }, [])}

      <h2>Total Countries: {countries.length}</h2>
      <h3>
        Traveled to: {travel.length}{" "}
        {travel.length > 1 ? "Countries" : "Country"}
      </h3>

      <div>
        {travel.map(country => <p key={country.cca2}>{country.name.common}</p>)}
      </div>

      <div className="three-columns-layout">
        {countries.map((desh) => (
          <Country
            country={desh}
            key={desh.cca2}
            traveld={handleTraveld}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
