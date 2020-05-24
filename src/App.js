import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import CountryList from './components/CountryList';
// TODO figure out differences app.css and index.css

function App() {

  const [countries, setCountries] = useState([]);

  const addCountry = (country) => {
    if (!countries.some(c => c.name === country.name)){
    setCountries([...countries, country])
    console.log(countries)
    } else {
      alert("This country is already in the list")
    }
  };
  
  return (
    <div className = "d-flex flex-column text-center align-items-center">
      <h1 className = "mt-4">Countries of the world</h1>
      <SearchForm addCountry = {addCountry} />
      <CountryList countries = {countries}/>
    </div>
  );
}

export default App;
