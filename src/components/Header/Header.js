import React, { Component } from 'react';
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <div className="container">
            <div className="header container">
                
                <ul className="nav container">
                    <li ><h3 className="logo">StarDB</h3></li>
                    <li onClick={() => this.props.switcher("people")} >People</li>
                    <li onClick={() => this.props.switcher("planets")}>Planets</li>
                    <li onClick={() => this.props.switcher("starships")}>Starships</li>
                </ul>
            </div>
        </div>
        );
    }
}

export default Header;