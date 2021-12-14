import React, { Component } from 'react';
import FruitSaladSummer from './fruitsaladsummer';
import FruitSaladWinter from './fruitsaladewinter';
import FruitSaladRed from './fruitsaladewinter';

class FruitSalads extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fruitsalads: [
            {component:{FruitSaladWinter}, id: 1, ingredients: [
                {name:'Apple', id:1, value:2},
                {name:'Kiwi', id:5, value:1},
                {name:'Pear', id:7, value:4},
                {name:'Orange', id:6, value:1},
                {name:'Banana', id:3, value:3},
              ]},
              {component:{FruitSaladRed}, id: 2, ingredients: [
                {name:'Cherry', id:4, value:16},
                {name:'Strawberry', id:9, value:6},
                {name:'Apple', id:1, value:1},
                {name:'Raspberry', id:8, value:12},
                {name:'Banana', id:3, value:2},
              ]},
              { component:{FruitSaladSummer}, id: 3, ingredients: [
                {name:'Apple', id:1, value:3},
                {name:'Apricot', id:2, value:5},
                {name:'Strawberry', id:9, value:13},
                {name:'Raspberry', id:8, value:15},
                {name:'Banana', id:3, value:2},
              ]},
        ]
      }
    }
       
    
     
  render() { 
        return (<div> {this.getRandomSalad()}</div>);
  }

  getRandomSalad() {
    const randomIndex = Math.floor(Math.random() * (4 - 1) + 1);
    let randomSalad = this.state.fruitsalads.filter(salad => salad.id === randomIndex);
    return randomSalad;
  }
}
 
export default FruitSalads;