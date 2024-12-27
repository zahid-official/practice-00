import { useState } from "react";
import "./Country.css";
import CountryDetails from "./CountryDetails";
const Country = ({ country, traveld}) => {
  const { name, flags } = country;

  const [visit, setVisit] = useState(true);
  const handleVisit = () => {
    setVisit(!visit);
  };

  return (
    <div className="style">
      <h3>{name?.common}</h3>
      <div className="img-container">
        <img className="img" src={flags?.png} alt="flag" />
      </div><br />

      <button onClick={()=> traveld(country)}>Add to Bucketlist</button>
      <br /><br />
      <button onClick={handleVisit}>{visit ? "Visited" : "Not Yet"}</button>
      <p>
        {visit ? "Traveled to this country" : "Not visited this country yet"}
      </p>

      <hr />
      <CountryDetails country={country} traveld={traveld} ></CountryDetails>
    </div>
  );
};

export default Country;
