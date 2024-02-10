
function ActorsCard ({actors}) {
    return (
     <article className="actorsContainer">

      <img className= "actorsImage" src={actors.image} alt="" />
      <h5>{actors.name}</h5>
      <h5>{actors.species}</h5>

     </article>
    );
  }
  
  export default ActorsCard;