// Fichero src/components/App.jsx
import { useState } from 'react'
import "../scss/App.scss"
import data from "../services/data.json"
import ActorsList from './ActorsList';

function App() {
const [characters, setCharacters] = useState (data)

  return (
    <>
      <h1>Harry Potter</h1>
      <ActorsList data={characters}/>
    
    </>
    
 
  );
}

export default App;