import React, { useEffect } from "react";
import "./Player.css";

function Player(props) {
  const socket = props.socket;

  let player;
  function loadVideoPlayer() {
    player = new window.YT.Player("player", {
      height: "601",
      width: "961",
      videoId: "70Kd7cCDDPA",
      playerVars: { controls: 1, mute: 1 },
    });
  }

  useEffect(() => {
    const tag = document.createElement("script");
    tag.id = "iframe";
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = loadVideoPlayer;

    socket.on("playerAction", (action) => {
      switch (action) {
        case "play":
          player.playVideo();
          player.setPlaybackRate(1);
          break;
        case "pause":
          player.pauseVideo();
          break;
        case "forward":
          player.seekTo(player.getCurrentTime() + 10);
          break;
        case "backward":
          player.seekTo(player.getCurrentTime() - 10);
          break;
        case "slow":
          player.setPlaybackRate(player.getPlaybackRate() - 0.25);
          break;
        case "fast":
          player.setPlaybackRate(player.getPlaybackRate() + 0.25);
          break;
      }
    });
  });

  return <div id="player"></div>;
}

export default Player;
