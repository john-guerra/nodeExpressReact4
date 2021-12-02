import React from "react";
import PropTypes from "prop-types";

import "./Player.css";

const Player = ({ player, selectPlayer }) => {
  return (
    <div className="Player col-4 p-2">
      <label>
        Name : <output>{player.name}</output>
      </label>
      <br />
      <label>
        Age : <output>{player.age}</output>
      </label>

      <label><input type="checkbox" onChange={(evt)=> {
        console.log("select player", player.name);
        selectPlayer(player.name);
      }}/> Selected</label>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
};

export default Player;
