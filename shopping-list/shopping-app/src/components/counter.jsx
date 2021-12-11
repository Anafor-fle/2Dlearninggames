import React, { Component } from 'react';


class Counter extends React.Component {
    state = {
        count: 0,
        tags: [],
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>La liste est vide.</p>;
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>;
    }
    
    render() { 
        
        return ( 
        <React.Fragment> {/*avoid creating a div that will appear in the final code*/}
            <span className={this.getBadgeClasses()}>{this.formartCount()}</span> 
            <button className="btn btn-secondary btn-sm">Increment</button>
            {this.renderTags()}
        </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formartCount() {
        const { count } = this.state
        return count === 0 ? 'Zéro' : count;
    }

}
export default Counter;