import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import countries from '../countries.json';

function  CountryDetails (props) {
    const { countryName } = useParams();

    const [foundCountries, setFoundCountries] = useState(null);


<div className="col-7">
<h1>France</h1>
<table className="table">
  <thead></thead>
  <tbody>
    <tr>
      <td style="width: 30%">Capital</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>Area</td>
      <td>
        551695 km
        <sup>2</sup>
      </td>
    </tr>
    <tr>
      <td>Borders</td>
      <td>
        <ul>
          <li><a href="/AND">Andorra</a></li>
          <li><a href="/BEL">Belgium</a></li>
          <li><a href="/DEU">Germany</a></li>
          <li><a href="/ITA">Italy</a></li>
          <li><a href="/LUX">Luxembourg</a></li>
          <li><a href="/MCO">Monaco</a></li>
          <li><a href="/ESP">Spain</a></li>
          <li><a href="/CHE">Switzerland</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
</div>

    return (
        <div>
          <h1>Country Details</h1>
          {!foundCountries && <h3>Country not found!</h3>}
    
          {foundCountries && (
            <>
              <h2>{foundCountries.name}</h2>
              <h3> {foundCountries.alpha3Code}</h3>
              <Link to="/CountryList">Back</Link>
            </>
          )}
          
        </div>
      )
    }




export default CountryDetails;