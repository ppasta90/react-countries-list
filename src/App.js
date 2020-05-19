import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import CountryList from './components/CountryList';



function App() {

  const [countries, setCountries] = useState([]);

  const addCountry = (country) => {
    if (!countries.includes(country)){
    setCountries([...countries, country])
    console.log(countries)
    }
  };
  
  return (
    <div>
      <h1>Countries of the world</h1>
      <SearchForm addCountry = {addCountry} />
      <CountryList countries = {countries}/>
    </div>
  );
}

export default App;
