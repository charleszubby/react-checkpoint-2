import React from "react";
import Player from "./Player";
import players from "../players";

const PlayersList = () => {
  return (
    <div style={{ display: "inline", backgroundColor: "black" }}>
      {players.map((player) => (
        <Player
          key={player.name}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))}
    </div>
  );
};

export default PlayersList;
