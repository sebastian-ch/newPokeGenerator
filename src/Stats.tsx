/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import usePokemons from "./hooks/usePokemons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useNavigate } from "react-router-dom";

const Stats = () => {
  const navigate = useNavigate();
  const { getStats } = usePokemons();
  const [sortedData, setSortedData] = React.useState([]);

  React.useEffect(() => {
    const typeCount = {};
    getStats().then((pokemons: any) => {
      pokemons.forEach((mon) => {
        const types = mon.type.split("/");
        //console.log(types);
        types.forEach((type) => {
          typeCount[type] = (typeCount[type] || 0) + 1;
        });
      });

      const chartData = Object.entries(typeCount).map(([type, count]) => ({
        type,
        count,
      }));
      console.log(chartData);
      setSortedData(chartData);
    });
  }, []);

  const getTypeColor = (type) => {
    const colors = {
      Normal: "#A8A878",
      Fire: "#F08030",
      Water: "#6890F0",
      Electric: "#F8D030",
      Grass: "#78C850",
      Ice: "#98D8D8",
      Fighting: "#C03028",
      Poison: "#A040A0",
      Ground: "#E0C068",
      Flying: "#A890F0",
      Psychic: "#F85888",
      Bug: "#A8B820",
      Rock: "#B8A038",
      Ghost: "#705898",
      Dragon: "#7038F8",
      Dark: "#705848",
      Steel: "#B8B8D0",
      Fairy: "#EE99AC",
      Sand: "#E0C068",
      Light: "#FFE065",
    };
    return colors[type] || "#A8A878";
  };

  function backToList() {
    navigate("/");
  }

  return (
    <div
      style={{
        display: "flex",
        height: "600px",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={backToList}>Back to List</button>
      <h2 style={{ textAlign: "center" }}>Pokemon Type Distribution</h2>
      <div style={{ width: "100%", height: "calc(100% - 60px)" }}>
        <ResponsiveContainer>
          <BarChart
            data={sortedData}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis
              dataKey="type"
              type="category"
              width={100}
              tick={{ fontSize: 14, fill: "whitesmoke" }}
              interval={0}
            />
            <Tooltip
              formatter={(value, name) => [`${value} Pokémon`, "Count"]}
              labelFormatter={(label) => `Type: ${label}`}
            />
            <Legend />
            <Bar
              dataKey="count"
              name="Count"
              radius={[0, 4, 4, 0]} // Rounded corners on the right side
            >
              {sortedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getTypeColor(entry.type)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;
