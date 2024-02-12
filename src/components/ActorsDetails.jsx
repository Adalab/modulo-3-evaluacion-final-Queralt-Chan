import React from 'react'


function ActorsDetails() {
  return (
    <figure className="actorsContainerDetail">
    <img className= "actorsImageDetail" src={actors.image} alt="" />
    <h5>{actors.name}</h5>
    <h5>{actors.species}</h5>
    <h5>{actors.gender}</h5>
    <h5>{actors.house}</h5>
    </figure> 

  )
}

export default ActorsDetails