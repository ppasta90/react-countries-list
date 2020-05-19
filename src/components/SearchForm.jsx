import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function SearchForm({addCountry}){

    const [country, setCountry] = useState({
        id: "",
        name: "",
        flag: "",
        region: "",
        capital: ""
    });
    
    const handleInput = (e) => {
        setCountry({...country, name: e.currentTarget.value});
    };

    
   /*  useEffect((data) => {
        addCountry({...country,
                id: uuidv4(),
                flag: data[0].flag,
                region: data[0].region,
                capital: data[0].capital,
                languages: data[0].languages[0].name,
                currencies: data[0].currencies[0].name,
                population: data[0].population})
    }) */

    /* const fetchResults = async () => {
        let response = await fetch(`https://restcountries.eu/rest/v2/name/${country.name}?fullText=true`)
        let results = await response.json();
        console.log(results)
        return results;
    }; */

    const handleSubmit =  (e) => {
        e.preventDefault();
        if (country.name !== "") {
            fetch(`https://restcountries.eu/rest/v2/name/${country.name}?fullText=true`)
            .then(response => response.json())
            .then(data => {            
                addCountry({...country,
                    id: uuidv4(),
                    flag: data[0].flag,
                    region: data[0].region,
                    capital: data[0].capital,
                    languages: data[0].languages[0].name,
                    currencies: data[0].currencies[0].name,
                    population: data[0].population})
                setCountry({...country, name: ""})
            })
        .catch(error=>alert(error))
        }
    };


    return(
    <div>
        <form onSubmit = {handleSubmit}>
            <input value = {country.name} onChange = {handleInput} type = "input" placeholder = "type the country" />
            <button type = "submit">Search</button>
        </form>
    </div>
    )          
};

export default SearchForm;