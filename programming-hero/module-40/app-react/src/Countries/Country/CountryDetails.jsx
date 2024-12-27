import CountryData from "./CountryData";

const CountryDetails = (props) => {
    const {country, traveld} = props;

    const {capital, region} = country;
    return (
        <div>
            <details>
                <summary>Details: </summary>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </details>

            <hr />
            <CountryData country={country} traveld={traveld}></CountryData>
        </div>
    );
};

export default CountryDetails;