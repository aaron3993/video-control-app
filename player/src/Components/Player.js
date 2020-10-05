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
      // videoId: "M7lc1UVf-VE?autoplay=1&mute=1&enablejsapi=1",
      // playerVars: { autoplay: 1, controls: 0 },
      events: {
        // onReady: onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      },
    });
  }

  // function onPlayerReady(event) {
  //   event.target.playVideo();
  // }

  return <div id="player"></div>;
}

export default Player;
