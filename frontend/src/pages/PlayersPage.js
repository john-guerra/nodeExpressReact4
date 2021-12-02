import React, { useState, useEffect } from "react";

import BaseLayout from "./BaseLayout.js";

import PlayersList from "../components/PlayersList.js";

function ShowSelected({selectedPlayers}) {
  return "The selected one is:" + selectedPlayers;
}
const PlayersPage = () => {
  const [query, setQuery] = useState(
    new URL(window.location).searchParams.get("q") || ""
  );

  const [players, setPlayers] = useState([]);
  async function reloadData() {
    console.log("querying the backend", query);
    const res = await fetch(`/players?q=${query}`);
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
  }, [query]);


  const [selectedPlayers, setSelectedPlayers] = useState(new Set())
  function selectPlayer(player) {
    const newSet = new Set(selectedPlayers.values());
    newSet.add(player);
    setSelectedPlayers(newSet);
  }
  return (
    <div className="PlayersPage">
      <BaseLayout>
        <div className="row">
          <div className="col-4">
            {" "}
            <h1>NU Squid Games</h1>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              cum nihil sapiente laboriosam deserunt impedit est eos quod
              nesciunt maiores fugit, tempore blanditiis eligendi odit tempora?
              Error optio est amet?
            </div>
          </div>

          <div className="col-8">
            <PlayersList
              players={players}
              query={query}
              setQuery={setQuery}
              selectPlayer={selectPlayer}
            ></PlayersList>

            <ShowSelected selectedPlayers={Array.from(selectedPlayers.values())}></ShowSelected>
          </div>
        </div>
        {/* /row */}
      </BaseLayout>
    </div>
  );
};

export default PlayersPage;
