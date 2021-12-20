import React, { Component } from 'react';
import Counter from './counter'

class Counters extends React.Component {

    

    render() { 
        return (<React.Fragment>
           {this.props.counters.map(counter => <Counter 
           key={counter.id} 
           onIncrement={this.props.onIncrement}
           onDecrement={this.props.onDecrement}
           onReset={this.props.onReset}
           counter={counter}/>)}
        </React.Fragment>);
    }
}
 
export default Counters;