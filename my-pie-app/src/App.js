import React from 'react';
import './App.css';
// import Rapper from './components/Rappers';
// import image from './image';
import {Rappers} from './components/RapperList';


function App() {
  return (

    <div className = "App" >
    <header className = "App-header" >
    <h1 > Nine X Four </h1>

    </header>

    
    <Rappers/>

    </div>
  );
}

export default App;