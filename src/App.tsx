import { Suspense } from "react";
import "./App.css";
import type { Country } from "./type";
import Countries from "./components/CountryGrid/countries";

const countriesPromise = async (): Promise<Country[]> => {
  const response = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await response.json();
  return data.countries;
};

function App() {
  return (
    <>
    <h2>Welcome to the website where you can find all available Countries</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Countries countriesPromise={countriesPromise()} />
      </Suspense>
    </>
  );
}

export default App;
