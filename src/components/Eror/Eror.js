import React, { Component } from 'react';

class Eror extends Component {
    render() {
        return (
            
            <React.Fragment>
                <img className="random-panet-img" alt=''/>
                
                <ul className="planet-info container">
                    <li><h3>Eror</h3></li>
                    <li>loading</li>
                </ul>
            </React.Fragment>
            
        );
    }
}

export default Eror;