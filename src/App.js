import './App.css';
import { useState } from 'react';
import dice1 from './images/dice11.PNG'
import dice2 from './images/dice12.PNG'
import dice3 from './images/dice13.PNG'
import dice4 from './images/dice14.PNG'
import dice5 from './images/dice15.PNG'
import dice6 from './images/dice16.PNG'


function App() {
  let arr = [dice1,dice2,dice3,dice4,dice5,dice6]
  const [randDice1,setRandDice1] = useState(arr[(Math.floor(Math.random() * arr.length))]);
  const [randDice2,setRandDice2] = useState(arr[(Math.floor(Math.random() * arr.length))]);
  function left() {
    setRandDice1(arr[(Math.floor(Math.random() * arr.length))]);
  }
  function right() {
    setRandDice2(arr[(Math.floor(Math.random() * arr.length))]);
  }
  
  return (
    <div className="App">
      <img src={randDice1} alt='dice' className='dice1' onClick={left}/>
      <img src={randDice2} alt='dice' className='dice2' onClick={right}/>
    </div>
  );
}

export default App;