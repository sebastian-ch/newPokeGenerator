import { useState, useEffect } from "react";
import CardList from "./CardList";
import { PokemonsType } from "./config";
import usePokemons from "./hooks/usePokemons";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailedPokemon from "./DetailedPokemon";

function App() {
  const { getPokemons } = usePokemons();

  const [pokemons, setPokemons] = useState<PokemonsType[] | null>(null);

  useEffect(() => {
    getPokemons().then((pokemons: PokemonsType[]) => {
      setPokemons(pokemons.reverse());
    });
  }, []);

  const MainApp = () => {
    return (
      <>
        <h2 style={{ textAlign: "center" }}>AI Generated Pokemon</h2>
        <div className="container">
          {pokemons && <CardList pokemon={pokemons} />}
        </div>
      </>
    );
  };

  return (
    <Routes>
      <Route path="/newPokeGenerator/" element={<MainApp />} />
      <Route path="/" element={<MainApp />} />
      <Route path="/newPokeGenerator/:name" element={<DetailedPokemon />} />
      <Route path="/:name" element={<DetailedPokemon />} />
    </Routes>
  );
}

export default App;
