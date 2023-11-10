import { PokemonsType, imageUrl } from "./config";

function Card({ pokemon }: { pokemon: PokemonsType }) {
  //console.log(pokemon);

  return (
    <div className="card">
      <h4 style={{ color: "whitesmoke", padding: "1px", margin: "2px" }}>
        {pokemon.name}
      </h4>

      <img
        src={imageUrl + pokemon.name + ".jpg"}
        alt={pokemon.name}
        width="256"
        height="256"
      />
    </div>
  );
}

export default Card;
