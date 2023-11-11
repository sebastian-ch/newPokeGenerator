import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { imageUrl } from "./config";
import usePokemons from "./hooks/usePokemons";

const DetailedPokemon = () => {
  const { getPokemons } = usePokemons();
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
  //console.log(location.state);
  return state ? (
    <div
      style={{
        display: "flex",
        maxWidth: "100vw",
        maxHeight: "100vh",
        // margin: 0,
        // padding: 0,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
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
        <img src={state.image} alt={state?.name} width="512" height="512" />
        <h4 style={{ color: "whitesmoke" }}>{state?.description}</h4>
      </div>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        maxWidth: "100vw",
        maxHeight: "100vh",
        // margin: 0,
        // padding: 0,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
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
          width="512"
          height="512"
        />
        <h4 style={{ color: "whitesmoke" }}>{pokePath?.description}</h4>
      </div>
    </div>
  );
};

export default DetailedPokemon;
