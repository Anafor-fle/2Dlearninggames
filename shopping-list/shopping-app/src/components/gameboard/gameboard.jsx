import React, { Component } from 'react';
import Counters from './counters';
import Apple from './fruitsimages/apple.svg';
import Apricot from './fruitsimages/apricot.svg';
import Banana from './fruitsimages/banana.svg';
import Cherry from './fruitsimages/cherry.svg';
import Kiwi from './fruitsimages/kiwi.svg';
import Orange from './fruitsimages/orange.svg';
import Pear from './fruitsimages/pear.svg';
import Raspberry from './fruitsimages/raspberry.svg';
import Strawberry from './fruitsimages/strawberry.svg';


class GameBoard extends React.Component {
    state = {
        counters: [
            {name:'Apple', id: 1, value: 0, image:Apple},
            {name:'Apricot', id: 2, value: 0, image:Apricot},
            {name:'Banana', id: 3, value: 0, image:Banana},
            {name:'Cherry', id: 4, value: 0, image:Cherry},
            {name:'Kiwi', id: 5, value: 0, image:Kiwi},
            {name:'Orange', id: 6, value: 0, image:Orange},
            {name:'Pear', id: 7, value: 0, image:Pear},
            {name:'Raspberry', id: 8, value: 0, image:Raspberry},
            {name:'Apple', id: 9, value: 0, image:Strawberry},
        ]
      }
    
      handleIncrement = (counter) => {
        const counters = [...this.state.counters]; {/* cloning counters array to not directly modify*/}
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }
    
    handleDecrement = (counter) => {
        const counters = [...this.state.counters]; {/* cloning counters array to not directly modify*/}
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
    }
    
    handleDelete = (counterId) => {  {/* change function in order to get only the selected counter to reset and not all counters*/}
        const counters = this.state.counters.map(c => {c.value = 0; return c});
        this.setState({ counters })
    }
    
    handleReset = () => {
      const counters = this.state.counters.map(c => {c.value = 0; return c});
      this.setState({ counters })
      
    }
    render() { 
        return (<React.Fragment>
            <Counters 
      counters={this.state.counters} 
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement} 
      onDelete={this.handleDelete} 
      onReset={this.handleReset} />
        </React.Fragment>);
    }
}
 
export default GameBoard;