import { use, useState } from "react";
import type { Country } from "../../type";
import CountryCard from "../CountryCard/country";
import "./countries.css";

export interface CountriesProps {
  countriesPromise: Promise<Country[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  const [visitedCountries, setVisitedCountries] = useState<Country[]>([]);
  const [visitedCountriesFlags,setVisitedCountriesFlags] = useState<string[]>([]);
  const countries = use(countriesPromise);
   const handleVisitedCountries = (country: Country):void => {
    if (visitedCountries.includes(country)) {
      setVisitedCountries(visitedCountries.filter((c) => c !== country));
    } else {
      setVisitedCountries([...visitedCountries, country]);
    }
  };
  const handleVisitedCountriesFlags = (flag: string):void => {
    // const newVisitedCountriesFlags = visitedCountriesFlags.filter((c) => c !== flag);
    // if (newVisitedCountriesFlags.length === visitedCountriesFlags.length) {
    //   const country = countries.find((c) => c.flags.flags.png === flag);
    //   if (country) {
    //     setVisitedCountriesFlags([...visitedCountriesFlags, country.flags.flags.png]);
    //   }
    // } else {
    //   setVisitedCountriesFlags(newVisitedCountriesFlags);
    // }
    if(visitedCountriesFlags.includes(flag)){
      setVisitedCountriesFlags(visitedCountriesFlags.filter((c) => c !== flag));
    } else {
      setVisitedCountriesFlags([...visitedCountriesFlags, flag]);
    }
    
  };
  return (
   <div>
    <h2>Countries</h2>
    <h4>Visited Countries: {visitedCountries.length}</h4>
    <h4>Visited Countries Flags: {visitedCountriesFlags.length}</h4>
    {/* <div>
      {
        visitedCountriesFlags.map((flag) => (
          <img key={flag} src={flag} alt="Visited Country Flag" />
        ))
      }
    </div> */}
     <div className="countries-grid">
        {countries.map((country) => (
          <CountryCard 
          key={country.ccn3.ccn3} 
          country={country}
          handleVisitedCountries={handleVisitedCountries}
          handleVisitedCountriesFlags={handleVisitedCountriesFlags}
        >
        </CountryCard>
      ))}   
    </div>
    </div>
  );
    
}
