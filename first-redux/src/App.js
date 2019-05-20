import React from 'react';
import './App.css';
import Post from './components/Post'
import Postform from './components/Postform'


function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <hr/>
      <Postform/>
      <hr/>
      <Post/>
    </div>
  );
}

export default App;
