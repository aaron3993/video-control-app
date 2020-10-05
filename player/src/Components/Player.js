import React, { useEffect } from "react";
import "./Player.css";

function Player(props) {
  const socket = props.socket;

  useEffect(() => {
    socket.emit("volume", player.isMuted());
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
      if (action === "unmute") {
        player.unMute();
        // socket.emit("unmute");
      }
      if (action === "mute") {
        player.mute();
        // socket.emit("mute");
      }
    });
  });

  let player;
  function loadVideoPlayer() {
    player = new window.YT.Player("player", {
      height: "601",
      width: "961",
      videoId: "M7lc1UVf-VE",
      playerVars: { controls: 1, mute: 1 },
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
