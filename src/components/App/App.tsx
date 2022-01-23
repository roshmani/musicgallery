import React from 'react';
import {MusicList} from '../Music-List/MusicList';
import './App.css';

function App() {
  return (
    <div className="App">
          <header className="header-div"> 
            <h1 className="headerh1">Music Unlimited</h1>
             <p className="headtxt">A repo as you have never seen..</p>
          </header>     
          <MusicList/>        
    </div>
  );
}

export default App;
