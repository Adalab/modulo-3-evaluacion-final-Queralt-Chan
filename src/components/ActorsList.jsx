// aqui pintaremos la lista los personajes (array), crearemos estructura html, usar map para recorrer el array.

import ActorsCard from "./ActorsCard";

function ActorsList({data}) {
  
    return (
  
      <div className="titleStyle">
        <h2>Characters List</h2>
        {data.map((eachActor, i)=> <ActorsCard actors= {eachActor} key={i} />)}
       
      </div>
    );
  }
  
  export default ActorsList;