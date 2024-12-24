import { createClient } from "@supabase/supabase-js";

console.log(import.meta.env.VITE_SUPABASE_URL)

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
);
export default function usePokemons() {

  const getPokemons = async () => {
    const { data, error } = await supabase.from("pokes").select("*");
    //console.log(data)
    if (error) throw error;
    return data;
  };

  return { getPokemons };
}
