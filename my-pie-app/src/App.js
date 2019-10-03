import React from 'react';
import './App.css';
import {} from './Face'
// import Rapper from './components/Rappers';
// import image from './image';
import {
  RapperList
} from './components/RapperList';




// const Rappers = [
//   {id: 1, Name: 'Jay-Z', Face: '9X4'},
//   {id: 2, Name: 'Drake'},
//   {id: 3, Name: 'J Cole'},
//   {id: 4, Name: 'Kendrik Lamar'},
//   {id: 5, Name: 'Young Thug'},
//   {id: 6, Name: 'Pusha T'},
//   {id: 7, Name: 'Cardi B'},
//   {id: 8, Name: 'Kanye West'},
//   {id: 9, Name: 'ScHoolboyQ'}
// ]

function App() {
  return (



    <
    div className = "App" >
    <
    header className = "App-header" >
    <
    h1 > Nine X Four < /h1>

    <
    /header>

    <
    RapperList Rappers = {
      Rappers
    }
    />

    <
    /div>
  );
}

export default App;