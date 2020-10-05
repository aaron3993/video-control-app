import React from "react";
import Controls from "./Components/Controls";
import io from "socket.io-client";
import "./App.css";

const socket = io.connect("localhost:8080");

function App() {
  return (
    <div className="App">
      {/* <h1>Your Remote</h1> */}
      <Controls socket={socket} />
    </div>
  );
}

export default App;
