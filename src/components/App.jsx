// Fichero src/components/App.jsx
import { useState } from 'react'
import "../scss/App.scss"
import data from "../services/data.json"
import ActorsList from './ActorsList';


function App() {
const [characters, setCharacters] = useState (data);
const [filterActors, setFilterActors] = useState ("");

  return (
    <>
      <div>
      <img className="titleLogo" src="/images/harry.png" alt="Harry Potter"/>
     </div>
     
      <ActorsList data={characters}/>

    
    </>
    
 
  );
}

export default App;