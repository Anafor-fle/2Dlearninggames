import React, { Component } from 'react';
import NavBar from './components/navbar';
import GameBoard from './components/gameboard/gameboard'
import Salad from './components/recepies/salad';



class App extends Component {

  

  render()
 { return (
   <React.Fragment>
     <Salad />
      <GameBoard />
    <main className="container">
    <NavBar/>
    </main>
    </React.Fragment>
    
   
  );}
}

export default App;
