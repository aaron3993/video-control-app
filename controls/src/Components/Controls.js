import React, { useState } from "react";
import "./Controls.css";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Forward10Icon from "@material-ui/icons/Forward10";
import Replay10Icon from "@material-ui/icons/Replay10";
import FastForwardIcon from "@material-ui/icons/FastForward";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";

function Controls(props) {
  const [muted, setMuted] = useState(true);

  const socket = props.socket;

  // socket.on("muteButton", () => {
  //   setMuted(true);
  // });

  // socket.on("unmuteButton", () => {
  //   setMuted(false);
  // });

  function handleControls(action) {
    socket.emit("playerControls", action);
  }

  return (
    <div className="controls-container">
      <div class="signal"></div>
      <button
        className="controls main-controls"
        onClick={() => {
          handleControls("play");
        }}
      >
        <PlayArrowIcon style={{ fontSize: "7rem" }}></PlayArrowIcon>
      </button>
      <button
        className="controls main-controls"
        onClick={() => {
          handleControls("pause");
        }}
      >
        <PauseIcon style={{ fontSize: "7rem" }}></PauseIcon>
      </button>
      <button
        className="controls back-controls"
        onClick={() => {
          handleControls("backward");
        }}
      >
        <Replay10Icon style={{ fontSize: "7rem" }}></Replay10Icon>
      </button>
      <button
        className="controls forward-controls"
        onClick={() => {
          handleControls("forward");
        }}
      >
        <Forward10Icon style={{ fontSize: "7rem" }}></Forward10Icon>
      </button>
      <button
        className="controls back-controls"
        onClick={() => {
          handleControls("slow");
        }}
      >
        <FastForwardIcon
          style={{ fontSize: "7rem", transform: "scaleX(-1)" }}
        ></FastForwardIcon>
      </button>
      <button
        className="controls forward-controls"
        onClick={() => {
          handleControls("fast");
        }}
      >
        <FastForwardIcon style={{ fontSize: "7rem" }}></FastForwardIcon>
      </button>
      {!muted && (
        <button
          className="controls"
          onClick={() => {
            handleControls("mute");
            setMuted(true);
          }}
        >
          <VolumeMuteIcon style={{ fontSize: "7rem" }}></VolumeMuteIcon>
        </button>
      )}
      {muted && (
        <button
          className="control-icons"
          onClick={() => {
            handleControls("unmute");
            setMuted(false);
          }}
        >
          <VolumeOffIcon style={{ fontSize: "7rem" }}></VolumeOffIcon>
        </button>
      )}
    </div>
  );
}

export default Controls;
