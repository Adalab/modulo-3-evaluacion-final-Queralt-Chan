// Fichero src/components/App.jsx
import { useState } from 'react'
import "../scss/App.scss"
import data from "../services/data.json"
import ActorsList from './ActorsList';
import Filter from './Filters/Filter';
import { Routes, Route } from 'react-router-dom';
import ActorsDetails from './ActorsDetails';


function App() {
const [characters, setCharacters] = useState (data);
const [filterHouse, setFilterHouse] = useState ("Gryffindor");
const [filterName, setFilterName] = useState ("");

const handleHousesFilter = (value)=> {
  // console.log(value);
  setFilterHouse (value)
}
const handleNameFilter = (value) => {
  
  setFilterName (value)
}
 const filterCharacters = characters.filter ((character)=>
 character.name.toLowerCase().includes(filterName)).filter((character)=> character.house === filterHouse)
  
// const filterHouse = characters.filter((eachCharacter)=> eachCharacter.character.includes(filterHouses))

  return (
      <>
      <div className="mainContainer">
      <img className="titleLogo" src="/images/harry.png" alt=""/>
     </div>

    <Routes>
   
    
      <Route path='/'element={<><Filter handleHouses={handleHousesFilter}
      handleNameFilter={handleNameFilter}/>
      <ActorsList data={filterCharacters}/></>}></Route>
      <Route path="/actors/:actorsid" element={< ActorsDetails />}/>

      </Routes>

    
    </>
    
 
  );
}

export default App;