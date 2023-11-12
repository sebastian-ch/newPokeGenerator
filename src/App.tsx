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
    if (!pokemons) {
      getPokemons().then((pokemons: PokemonsType[]) => {
        setPokemons(pokemons.reverse());
      });
    }
  }, []);

  const MainApp = () => {
    return (
      <>
        <h2 style={{ textAlign: "center", marginBottom: "3px" }}>
          AI Generated Pokemon
        </h2>
        <h4
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
            marginBottom: "20px",
          }}
        >
          Uses GPT to create a new Pokemon and DALL-E 3 to generate a picture of
          it. Click on the Pokemon to see more details. The description is most
          of the DALL-E prompt. Updates every 2 hours (or whenever I want
          another).
        </h4>
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
