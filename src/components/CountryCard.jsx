import React from 'react';

// TODO set width of card
function CountryCard({country}) {
    return (
        <div className = "list-group border border-dark my-4">
            <h2>{country.name.toUpperCase()}</h2>
            <img className = "m-auto pb-3" src= {country.flag} alt="" style = {{maxWidth: "150px"}}/>
            <li className = "list-group-item">It is located in {country.region}</li>            
            <li className = "list-group-item">The capital is {country.capital}</li>
            <li className = "list-group-item">People speak {country.languages}</li>
            <li className = "list-group-item">{country.population} people live there</li>
            <li className = "list-group-item">The main currency is {country.currencies}</li>
        </div>
    )
}


export default CountryCard;