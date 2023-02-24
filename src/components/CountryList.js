 import { useState } from "react";
 import { Link } from "react-router-dom";
 import CountryDetails from "./CountryDetails";
 import countries from "../countries.json";
 
 
 
 function CountryList (props) {
    const [foundCountries, setFoundCountries] = useState(countries);
    console.log(foundCountries)


    
    return (
      <div>
          <h2>Country List</h2>
     
     
             
   
          {foundCountries.map((country) => {
            return (
              <div key={country.name.common} className="countries">
                <h3>
                  
                 <img alt="pic" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
                <Link to={`/CountryDetails/${country.alpha3Code}`}> 
                    {country.name.common} 
                    </Link>

                  
                </h3>
              </div>
            );
          })}
        </div>
 );
    }


    




export default CountryList;