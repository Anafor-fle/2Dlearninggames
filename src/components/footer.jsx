import React, { Component } from 'react';

class Footer extends React.Component {
    render() { 
        return (
        <React.Fragment>
            <footer className="footer mt-auto py-3 bg-light d-grid gap-2 d-md-flex justify-content-md-end">
            <button onClick={() => this.props.onCheck(this.props.footer)} className="btn btn-outline-success btn-lg mx-auto">Valider</button>
            </footer>
        </React.Fragment>);
    }
}
 
export default Footer;