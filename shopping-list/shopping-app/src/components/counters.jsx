import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    render() { 
        
        return (<div>
           {this.props.counters.map(counter => 
           
           <Counter 
           key={counter.id}
           onIncrement={this.props.onIncrement} //passing this functions from counter to app component
            onDecrement={this.props.onDecrement} 
            onDelete={this.props.onDelete} 
           counter={counter}/>)}
        </div>);
    }
}
 
export default Counters;
