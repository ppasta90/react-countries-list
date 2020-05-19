import React from 'react';


function CountryCard({country}) {
    return (
        <div>
            <h2>{country.name.toUpperCase()}</h2>
            <img src= {country.flag} alt="" style = {{maxWidth: "150px"}}/>
            <li>It is located in {country.region}</li>            
            <li>The capital is {country.capital}</li>
            <li>People speak {country.languages}</li>
            <li>{country.population} live there</li>
            <li>The main currency is {country.currencies}</li>
            <li></li>
        </div>
    )
}


export default CountryCard;