import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import FruitSalads from './components/recepies/fruitsalads';
import Apple from './fruitsimages/apple.svg';
import Apricot from './fruitsimages/apricot.svg';
import Banana from './fruitsimages/banana.svg';
import Cherry from './fruitsimages/cherry.svg';
import Kiwi from './fruitsimages/kiwi.svg';
import Orange from './fruitsimages/orange.svg';
import Pear from './fruitsimages/pear.svg';
import Raspberry from './fruitsimages/raspberry.svg';
import Strawberry from './fruitsimages/strawberry.svg';

class App extends Component {

  state = {
    counters: [
        {id: 1, value: 0, image:Apple},
        {id: 2, value: 0, image:Apricot},
        {id: 3, value: 0, image:Banana},
        {id: 4, value: 0, image:Cherry},
        {id: 5, value: 0, image:Kiwi},
        {id: 6, value: 0, image:Orange},
        {id: 7, value: 0, image:Pear},
        {id: 8, value: 0, image:Raspberry},
        {id: 9, value: 0, image:Strawberry},
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

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
}

handleReset = () => {
  const counters = this.state.counters.map(c => {c.value = 0; return c});
  this.setState({ counters })
  
}

  render()
 { return (
   <React.Fragment>
     <FruitSalads />
    <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
    <main className="container">
      <Counters 
      counters={this.state.counters} 
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement} 
      onDelete={this.handleDelete} 
      onReset={this.handleReset} />
    </main>
    </React.Fragment>
    
   
  );}
}

export default App;
