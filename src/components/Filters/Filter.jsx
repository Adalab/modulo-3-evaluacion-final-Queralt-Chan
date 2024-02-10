import React from 'react'
import "../../scss/App.scss";

function Filter({handleHouses,handleNameFilter}) {

  
  return (

    <form className="inputStyle">
    
        <div>
          <label htmlFor="Name">Filtrar por nombre</label>
          <input 
          type="text" 
          id="name"
          placeholder="Personajes"
          onChange={(ev) =>  handleNameFilter (ev.target.value)}
        />
        </div>
        <div>
          <label htmlFor="House">Filtrar por casa</label>
          <select id="housesFilter" onChange={(ev) => handleHouses (ev.target.value)}>
          
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>

          </select>


        </div>

    

    </form>
   
  )
}

export default Filter;