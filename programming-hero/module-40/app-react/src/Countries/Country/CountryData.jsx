const CountryData = (props) => {
    const {country} = props;
    const {cca2, cca3, ccn3 } = country;
    return (
        <div>
            <details>
                <summary>Data: </summary>
                <p>CCA2: {cca2}</p>
                <p>CCA3: {cca3}</p>
                <p>CCN3: {ccn3}</p>
            </details>
        </div>
    );
};

export default CountryData;