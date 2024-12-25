import { POKEMON_TYPES } from "./config";
type PokemonType = keyof typeof POKEMON_TYPES;

type chipType = {
  label: string;
  textColor?: string;
  style?: React.CSSProperties;
  className?: string;
};
const Chip = ({
  label,
  textColor = "#000000",
  style = {},
  className = "",
}: chipType) => {
  const [type1, type2] = label.split("/");

  const chipStyle = {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 12px",
    color: textColor,
    border: "1.5px solid whitesmoke",
    borderRadius: "16px",
    fontSize: "14px",
    margin: "4px",
    marginRight: "0px",
    maxWidth: "100%",
    ...style,
  };

  const getTypeColor = (type: string): string => {
    const normalizedType = type.toLowerCase() as PokemonType;
    return POKEMON_TYPES[normalizedType] || POKEMON_TYPES.normal;
  };

  return (
    <>
      <div
        style={{
          ...chipStyle,
          backgroundColor: getTypeColor(type1),
        }}
        className={className}
      >
        <span>{type1}</span>
      </div>
      {type2 && (
        <div
          style={{
            ...chipStyle,
            backgroundColor: getTypeColor(type2),
          }}
          className={className}
        >
          <span>{type2}</span>
        </div>
      )}
    </>
  );
};

export default Chip;
