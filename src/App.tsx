import { useState, useEffect } from "react";
import Card from "./Card";
import { PokemonsType, imageUrl } from "./config";
import usePokemons from "./hooks/usePokemons";
import "./App.css";

function App() {
  const { getPokemons } = usePokemons();

  const [pokemons, setPokemons] = useState<PokemonsType[] | null>(null);

  async function checkImage(url: any) {
    const res = await fetch(url);
    const buff = await res.blob();

    return buff.type.includes("image/");
  }

  useEffect(() => {
    const fetchPokes = async () => {
      getPokemons().then((pokemons: PokemonsType[]) => {
        //console.log(pokemons);
        setPokemons(pokemons.reverse());
      });
      //setPokemons(pokemonWithImages);
    };
    fetchPokes();
  }, []);

  return (
    <div className="container">
      {pokemons?.map((pokemon: PokemonsType) => {
        return <Card pokemon={pokemon} key={pokemon.name} />;
      })}
    </div>
  );
}

export default App;
