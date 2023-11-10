import { useState, useEffect } from "react";
import CardList from "./CardList";
import { PokemonsType } from "./config";
import usePokemons from "./hooks/usePokemons";
import "./App.css";

function App() {
  const { getPokemons } = usePokemons();

  const [pokemons, setPokemons] = useState<PokemonsType[] | null>(null);

  useEffect(() => {
    getPokemons().then((pokemons: PokemonsType[]) => {
      setPokemons(pokemons.reverse());
    });
  }, []);

  return (
    <div className="container">
      {pokemons && <CardList pokemon={pokemons} />}
    </div>
  );
}

export default App;
