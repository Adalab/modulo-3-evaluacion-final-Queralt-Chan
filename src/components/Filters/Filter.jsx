import React from 'react'

function Filter() {
  return (
    <form>
      <section>
        <div>
          <label htmlFor="Name">Filtar por nombre</label>
          <input 
          type="text" 
          id="name"
          placeholder="Personajes"
        />
        </div>
        <div>
          <label htmlFor="House">Filtar por casa</label>
          <select id="housesFilter">
            <option value="all">allHouses</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>

          </select>


        </div>

      </section>

    </form>
   
  )
}

export default Filter;