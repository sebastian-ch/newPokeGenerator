import { apiUrl } from "../config";

export default function usePokemons() {
  const getPokemons = async () => {
    const response = await fetch(apiUrl + "pokemons");
    const data = await response.json();
    //console.log(data);
    return await data.data;
  };

  return { getPokemons };
}
