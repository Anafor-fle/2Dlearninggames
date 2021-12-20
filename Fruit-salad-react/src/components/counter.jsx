import React, { Component } from 'react';

class Counter extends React.Component {
  
    render() { 
        return (
        <React.Fragment>
            <img src={this.props.counter.image} alt="fruit image" />
            <span>{this.props.counter.value}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-info m-1">+</button>
            <button onClick={() => this.props.onDecrement(this.props.counter)}className="btn btn-warning m-1">-</button>
            <button onClick={() => this.props.onReset(this.props.counter)}className="btn btn-danger btn-sm m-3">supprimer</button>
            <br/>
        </React.Fragment>
            );
    }
}
 
export default Counter;