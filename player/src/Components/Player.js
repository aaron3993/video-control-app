import React, { useEffect } from "react";
import "./Player.css";

function Player(props) {
  const socket = props.socket;

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
    });
  });

  let player;
  function loadVideoPlayer() {
    player = new window.YT.Player("player", {
      height: "601",
      width: "961",
      videoId: "M7lc1UVf-VE",
      playerVars: { controls: 0, mute: 1 },
      events: {
        onReady: onPlayerReady,
      },
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  return <div id="player"></div>;
}

export default Player;
