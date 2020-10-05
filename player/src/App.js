import React from 'react';
import Player from './Components/Player'
import io from 'socket.io-client'
import './App.css';

const socket = io.connect('localhost:8080')

function App() {
  return (
    <div className="App">
      <Player socket={socket}/>
    </div>
  );
}

export default App;