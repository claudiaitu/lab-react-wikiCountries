
import './App.css';
import countries from "./countries.json"
import NavBar from './components/NavBar';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import CountryList from './components/CountryList'
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <NavBar>LAB- WikiCountries</NavBar>
      <Routes>  
        <Route
          path="/"
          element={ <CountryList Country={CountryList} /> }
        />

        <Route 
          path="/CountryList/:countryname" 
          element={ <CountryDetails /> } 
        />            
      </Routes>
    </div>
  );
}

export default App;
