import React, { Component } from 'react';
import Logo from '../fruitsimages/Anafor-mini-vecto.svg'
import WinningModal from './winningmodal';
class NavBar extends Component {
    render() { 
        return (
          <React.Fragment>
        <nav className="navbar navbar-light bg-light">
        <form className="container-fluid justify-content-start">
        <img src={Logo} alt="Logo" width="30" height="30" />
          <button onClick={this.props.onReset} className="btn btn-sm btn-outline-danger" type="button">Réinitialiser</button>
          <button className="btn btn-outline-success me-2" type="button">Valider</button>
        </form>
      </nav>
      </React.Fragment>);
    }
}
 
export default NavBar;