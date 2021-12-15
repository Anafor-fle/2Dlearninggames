import React, { Component } from 'react';
import FruitSaladSummer from './fruitsaladsummer';
import FruitSaladWinter from './fruitsaladewinter';
import FruitSaladRed from './fruitsaladred';

class Salad extends React.Component {
   constructor() {
       super();
       this.state = {
           salads: [<FruitSaladSummer/>, <FruitSaladWinter/>, <FruitSaladRed/>]
       };
   }

   getRandomSalad = (e) => {
    return e[Math.floor(Math.random()* e.length)];
  }


  render() { 
        return (<div>{this.getRandomSalad(this.state.salads)}</div>);
  }

  
}
 
export default Salad;