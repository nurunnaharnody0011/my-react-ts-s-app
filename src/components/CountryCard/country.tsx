import { useState } from "react";
import type { Country } from "../../type"
import "./country.css"
export interface CountryProps {
    country:Country
    handleVisitedCountries?: (country: Country) => void;
    handleVisitedCountriesFlags?: (flag: string) => void;
}
    export default function CountryCard({country,handleVisitedCountries,handleVisitedCountriesFlags}:CountryProps) {
        const [visited, setVisited] = useState<boolean>(false);
        const [visitedFlag, setVisitedFlag] = useState<boolean>(false);
        const handleVisited = () => {
            //setVisited(true);
            // if(!visited){
            //     setVisited(true);
            // } else {
            //     setVisited(false);
            // }
            setVisited(!visited);
            if (handleVisitedCountries) {
                handleVisitedCountries(country);
            }
            else {
                console.log("handleVisitedCountries function is not provided");
            }
        }
        const handleVisitedFlag = () => {
            setVisitedFlag(!visitedFlag);
            if (handleVisitedCountriesFlags) {
                handleVisitedCountriesFlags(country.flags.flags.png);
            }
            else {
                console.log("handleVisitedCountriesFlags function is not provided");
            }
        }
        
    return (
        <div className={`country-card ${visited ? `country-visited` : ``}`}>
            <h2>{country.name.common}</h2>
            <p>Official Name: {country.name.official}</p>
            <p>Population: {country.population.population.toLocaleString()}</p>
            <p>Languages: {Object.values(country.languages.languages).join(", ")}</p>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <button onClick={handleVisited}>{visited ? "Visited" : "Mark as Visited"}</button> <br />
            <button onClick={handleVisitedFlag}>{visitedFlag ? "Flag added" : "Add Flag to Visited"}</button>
        </div>
    )
    }