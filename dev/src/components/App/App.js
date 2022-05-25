import React, { Component } from 'react';
import "./App.css"
import Header from "../Header/Header"
import ItemList from "../ItemList/ItemList"
import PersonDetails from "../PersonDetails/PersonDetails"
import RandomPlanet from "../RandomPlanet/RandomPlanet"
import StarshipsDetails from "../StarshipDetails/StarshipDetails"
import "./App.css"

class App extends Component {
    state = {
        personId: 2,
        item: "people"
    }
    onItemSelected = (personId)=>{
        this.setState({personId});
        console.log(personId)
    }

    switcher = (item) =>{
        this.setState({item});
        console.log(`switcher:${item}`)
    }


    render() {
        const {personId,item} = this.state;
        return (
            <div className='container'>
                <Header switcher={this.switcher}/>
                <RandomPlanet/>
                <div className="block container">
                <div className="row mb2">
                <ItemList item={item} onItemSelected= {this.onItemSelected}/>
                <PersonDetails item={item} personId={personId}/>
            </div>
            </div>
            </div>
        );
    }
}

export default App;