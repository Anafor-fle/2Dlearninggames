import React, { Component } from 'react';


class Counter extends React.Component {

    render() { 
        return ( 
        <React.Fragment> {/*avoid creating a div that will appear in the final code*/}
            <img  src={this.props.counter.image}/>
            <span className="badge m-2 badge-warning">{this.props.counter.value}</span> 
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button> {/* check out how to pass argument*/}
            <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm">-</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Supprimer</button>
            <br />
        </React.Fragment>
        );
    }

}
export default Counter;