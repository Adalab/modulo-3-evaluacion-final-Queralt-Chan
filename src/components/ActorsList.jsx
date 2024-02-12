// aqui pintaremos la lista los personajes (array), crearemos estructura html, usar map para recorrer el array.

import ActorsCard from "./ActorsCard";
import "../scss/App.scss";

function ActorsList({data}) {
  
    return (
  
      <div className="titleStyle">
        <h2 className="titleActors"> Characters List</h2>
        <section className="actorsCardsContainer">
        {data.map((eachActor, i)=> <ActorsCard actors= {eachActor} key={i} />)}
        </section>
      </div>
    );
  }
  
  export default ActorsList;