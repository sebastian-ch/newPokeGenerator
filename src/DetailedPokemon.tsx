import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { imageUrl } from "./config";
import usePokemons from "./hooks/usePokemons";

const DetailedPokemon = () => {
  const { getPokemons } = usePokemons();
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = useParams();
  const { state } = location;

  const [pokePath, setPokePath] = useState<any>([]);

  useEffect(() => {
    if (!state) {
      console.log(name);
      console.log("state is undefined");
      getPokemons().then((pokemons: any) => {
        const currntPath = pokemons.find((poke: any) => {
          return poke.name == name;
        });
        console.log(currntPath);
        setPokePath(currntPath);
      });
    }
  }, [state]);

  function backToList() {
    navigate("/newPokeGenerator");
  }

  return state ? (
    <div
      style={{
        display: "flex",
        maxWidth: "100vw",
        maxHeight: "100vh",
        flexDirection: "column",

        //margin: 10,
        // padding: 0,
        alignItems: "center",
        justifyContent: "center",
        //overflow: "hidden",
      }}
    >
      <button onClick={backToList}>Back to List</button>
      <div className="detailed-card">
        <h2 style={{ color: "whitesmoke", padding: "1px", margin: "2px" }}>
          {state?.name}
        </h2>
        <h3
          style={{
            color: "whitesmoke",
            padding: "1px",
            margin: "2px",
            marginBottom: "5px",
          }}
        >
          {state?.type}
        </h3>
        <img src={state.image} alt={state?.name} className="detailed-img" />
        <h4 style={{ color: "whitesmoke" }}>{state?.description}</h4>
      </div>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100vw",
        maxHeight: "100vh",
        // margin: 0,
        // padding: 0,
        alignItems: "center",
        justifyContent: "center",
        //overflow: "hidden",
      }}
    >
      <button onClick={backToList}>Back to List</button>

      <div className="detailed-card">
        <h2 style={{ color: "whitesmoke", padding: "1px", margin: "2px" }}>
          {pokePath?.name}
        </h2>
        <h3
          style={{
            color: "whitesmoke",
            padding: "1px",
            margin: "2px",
            marginBottom: "5px",
          }}
        >
          {pokePath?.type}
        </h3>
        <img
          src={imageUrl + pokePath?.name + ".jpg"}
          alt={pokePath?.name}
          className="detailed-img"
        />
        <h4 style={{ color: "whitesmoke" }}>{pokePath?.description}</h4>
      </div>
    </div>
  );
};

export default DetailedPokemon;
