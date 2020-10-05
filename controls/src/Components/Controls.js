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
      <PlayArrowIcon
        className="controls"
        onClick={() => {
          handleControls("play");
        }}
        style={{ fontSize: "10rem" }}
      ></PlayArrowIcon>
      <PauseIcon
        className="controls"
        onClick={() => {
          handleControls("pause");
        }}
        style={{ fontSize: "10rem" }}
      ></PauseIcon>
      <Replay10Icon
        className="controls"
        onClick={() => {
          handleControls("backward");
        }}
        style={{ fontSize: "10rem" }}
      ></Replay10Icon>
      <Forward10Icon
        className="controls"
        onClick={() => {
          handleControls("forward");
        }}
        style={{ fontSize: "10rem" }}
      ></Forward10Icon>
    </div>
  );
}

export default Controls;
