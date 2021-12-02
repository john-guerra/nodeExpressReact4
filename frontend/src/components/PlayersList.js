// import PropTypes from "prop-types";

// import useHandlePlayers from "../hooks/useHandlePlayers.js";

import Player from "../components/Player.js";

const PlayersList = ({ players, query, setQuery, selectPlayer }) => {
  const renderPlayers = () =>
    players.map((p, i) => (
      <Player
        key={`Player_${i}`}
        player={p}
        selectPlayer={selectPlayer}
      ></Player>
    ));

  const onChangeQuery = (evt) => {
    console.log("query: ", evt.target.value);

    setQuery(evt.target.value);
  };

  console.log("render PlayersList", players, query);
  return (
    <div className="PlayersList">
      <h2>Players</h2>

      <input
        type="text"
        className="form-control"
        placeholder="search"
        onChange={onChangeQuery}
        value={query}
      />

      <div className="row">{renderPlayers()}</div>
    </div>
  );
};

PlayersList.propTypes = {};

export default PlayersList;
