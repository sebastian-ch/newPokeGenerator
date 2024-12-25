import { useNavigate } from "react-router-dom";
import Chip from "./Chip";
import { PokemonsType } from "./config";

function CardList({ pokemon }: { pokemon: PokemonsType[] }) {
  const navigate = useNavigate();

  function onClick(po: PokemonsType) {
    const data = {
      name: po.name,
      type: po.type,
      description: po.description,
      image: po.img,
    };
    navigate(`/newPokeGenerator/${po.name}`, { state: data });
  }

  return (
    <>
      {pokemon?.map((po) => (
        <div key={po.name} className="card" onClick={() => onClick(po)}>
          <h4 style={{ color: "whitesmoke", padding: "1px", margin: "2px" }}>
            {po.name}
          </h4>
          <img className="img-list" src={po.img} loading="lazy" />
          <Chip label={po.type} />
        </div>
      ))}
    </>
  );
}

export default CardList;
