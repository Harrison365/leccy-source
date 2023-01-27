import React from "react";
import "./Position.css";

export default function Position({ fuel, perc, place }) {
  fuel = fuel[0].toUpperCase() + fuel.slice(1);
  const emojis = {
    Gas: "🔥",
    Wind: "🍃",
    Nuclear: "☢️",
    Biomass: "🪵",
    Imports: "🇪🇺",
    Hydro: "🌊",
    Solar: "☀️",
    Coal: "🪨",
    Other: "❓",
    1: "🥇",
    2: "🥈",
    3: "🥉",
  };

  if (place === 1 || place === 2 || place === 3) {
    place = emojis[place];
  } else {
    place = "";
  }

  return (
    <tr>
      <td className="emoji">{emojis[fuel]}</td>
      <td className="fuelName">
        {" "}
        <strong>{fuel}</strong>
      </td>
      <td>
        <strong>{perc}%</strong>
      </td>
      <td>{place}</td>
    </tr>
  );
}
