import React from 'react';
import CountryCard from './CountryCard';

function CountryList({countries}) {

    
    return (
        <div>
            {
            countries.map(country => (
                <CountryCard  key = {country.id} country= {country} />
            ))
        }
        </div>
    )
};

export default CountryList;