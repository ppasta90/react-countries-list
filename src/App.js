import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import CountryList from './components/CountryList';


function App() {

  const [countries, setCountries] = useState([]);

  const addCountry = (country) => {
    debugger;
    setCountries([...countries, country])
    console.log(countries)
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
