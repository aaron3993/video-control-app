import React, { useState, useEffect } from "react";
import getYouTubeID from "get-youtube-id";
import "./Player.css";

function Player(props) {
  const socket = props.socket;

  const [id, setId] = useState("");

  useEffect(() => {
    const tag = document.createElement("script");
    tag.id = "iframe";
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = loadVideoPlayer;

    socket.on("playerAction", (action) => {
      if (action === "play") {
        player.playVideo();
        player.setPlaybackRate(1);
      }
      if (action === "pause") {
        player.pauseVideo();
      }
      if (action === "forward") {
        player.seekTo(player.getCurrentTime() + 10);
      }
      if (action === "backward") {
        player.seekTo(player.getCurrentTime() - 10);
      }
      if (action === "slow") {
        player.setPlaybackRate(player.getPlaybackRate() - 0.25);
      }
      if (action === "fast") {
        player.setPlaybackRate(player.getPlaybackRate() + 0.25);
      }
      // if (action === "unmute") {
      //   player.unMute();
      // }
      // if (action === "mute") {
      //   player.mute();
      // }
    });
  });

  let player;
  function loadVideoPlayer() {
    player = new window.YT.Player("player", {
      height: "601",
      width: "961",
      videoId: id,
      playerVars: { controls: 0, mute: 1 },
    });
  }

  function handleChange(e) {
    setId(getYouTubeID(e.target.value));
  }

  return (
    <>
      <div id="player"></div>
      <input type="text" onChange={handleChange} />
    </>
  );
}

export default Player;
