import { useState, useEffect } from "react";
import Card from "./Card";
import { PokemonsType } from "./config";
import usePokemons from "./hooks/usePokemons";
import "./App.css";

function App() {
  const { getPokemons } = usePokemons();

  const [pokemons, setPokemons] = useState<PokemonsType[] | null>(null);

  useEffect(() => {
    getPokemons().then((pokemons: PokemonsType[]) => {
      console.log(pokemons);
      setPokemons(pokemons.reverse());
    });
  }, []);

  return (
    <div className="container">
      {pokemons?.map((pokemon: PokemonsType) => (
        <Card pokemon={pokemon} />
      ))}
    </div>
  );
}

export default App;
