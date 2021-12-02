import {useState, useEffect} from "react";

import Player from "../components/Player.js";

export default function useHandlePlayers() {
  const [players, setPlayers] = useState([]);
  async function reloadData() {
    const res = await fetch("/players");
    if (!res.ok) {
      throw new Error("error loading players");
    }
    const _players = await res.json();

    console.log("Got players", _players);

    setPlayers(_players.players);
    // triggers a reload
  }
  useEffect(() => {
    reloadData();
  }, []);

  const renderPlayers = () => players.map((p,i) => <Player key={`Player_${i}`} player={p}></Player>);

  return [players, renderPlayers];
}
