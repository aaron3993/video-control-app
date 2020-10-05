import React from "react";
import "./Controls.css";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Forward10Icon from "@material-ui/icons/Forward10";
import Replay10Icon from "@material-ui/icons/Replay10";

function Controls(props) {
  const socket = props.socket;

  function handleControls(action) {
    socket.emit("playerControls", action);
  }

  return (
    <div className="controls-container">
      <div class="signal"></div>
      <button
        className="controls"
        onClick={() => {
          handleControls("play");
        }}
      ><PlayArrowIcon
      style={{ fontSize: "7rem" }}
      ></PlayArrowIcon></button>
      <button
        className="controls"
        onClick={() => {
          handleControls("pause");
        }}
      ><PauseIcon
      style={{ fontSize: "7rem" }}
      ></PauseIcon></button>
      <button
        className="controls"
        onClick={() => {
          handleControls("backward");
        }}
      ><Replay10Icon
      style={{ fontSize: "7rem" }}
      ></Replay10Icon></button>
      <button
        className="controls"
        onClick={() => {
          handleControls("forward");
        }}
      ><Forward10Icon
      style={{ fontSize: "7rem" }}
      ></Forward10Icon></button>
    </div>
  );
}

export default Controls;
