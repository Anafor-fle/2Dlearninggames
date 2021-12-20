import React, { Component } from 'react';

class Receipe extends React.Component {

    render() { 
        return (
            <React.Fragment>
                <div className="card bg-light mb-3 p-3">
                <div className="card-header font-italic">{this.props.activeReceipe.title}</div>
                <div className="card-body">
                <ul className="card-text">
                    <li>{this.props.activeReceipe.ingredients[0].name}</li>
                    <li>{this.props.activeReceipe.ingredients[1].name}</li>
                    <li>{this.props.activeReceipe.ingredients[2].name}</li>
                    <li>{this.props.activeReceipe.ingredients[3].name}</li>
                    <li>{this.props.activeReceipe.ingredients[4].name}</li>
                </ul>
                </div>
                </div>
            </React.Fragment>
        );
  }
}
 
export default Receipe;