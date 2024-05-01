import './App.css';
import React, {useState, useEffect} from 'react';
import LeaderBoard from './Components/LeaderBoard';
import Shuffler from './Components/Shuffler';

function App(){
  return (
    <div className="text-white bg-white-800">
      <Shuffler/>
    </div>
  );
}
export default App;
