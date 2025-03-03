import { useState, useEffect } from "react";
import CardList from "./CardList";
import { PokemonsType } from "./config";
import usePokemons from "./hooks/usePokemons";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailedPokemon from "./DetailedPokemon";
import Stats from "./Stats";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const { getPokemons } = usePokemons();

  const [pokemons, setPokemons] = useState<PokemonsType[] | null>(null);

  useEffect(() => {
    if (!pokemons) {
      console.log("app");
      getPokemons().then((pokemons: PokemonsType[]) => {
        setPokemons(pokemons.reverse());
      });
    }
  }, []);

  function goToStats() {
    navigate("/stats");
  }

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
            marginBottom: "10px",
          }}
        >
          Uses AI to create a new Pokemon and dall-e-3 to generate a picture of
          it. Click on the Pokemon to see more details. The description is most
          of the dall-e prompt. New Pokemon every 2 hours (I stopped it on 1/1/2025)
        </h4>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            marginTop: "0px",
          }}
        >
          <button style={{ textAlign: "center" }} onClick={goToStats}>
            View Stats
          </button>
        </div>
        <div className="container">
          {pokemons && <CardList pokemon={pokemons} />}
        </div>
      </>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<MainApp />} />
      {/* <Route path="/" element={<MainApp />} /> */}
      <Route path=":name" element={<DetailedPokemon />} />
      <Route path="/stats" element={<Stats />} />
      {/* <Route path="/:name" element={<DetailedPokemon />} /> */}
    </Routes>
  );
}

export default App;
