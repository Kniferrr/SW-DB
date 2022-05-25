import React, { Component } from 'react';
import "./RandomPlanet.css"
import SwapiService from "../../services/swapi-servis"
import Spinner from '../Spinner/Spinner';
import Eror from "../Eror/Eror"

class RandomPlanet extends Component {

    state = {
        planet: {},
        loading: true,
        eror: false
      };
    
    swapiService = new SwapiService();

  

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 100000);
  }

  componentWillUnmount() {
      clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
      this.setState({planet, loading: false})
      console.log(planet)
  }

  onError = () =>{
      this.setState({
          eror: true,
          loading: false
      })
  }

  updatePlanet = () => {
    console.log('update');
    const id = Math.floor(Math.random()*17) + 2;
    this.swapiService
      .getPlanet(id)
      .then((planet) => {
          this.onPlanetLoaded(planet)
          })
          .catch(this.onError);
  };

    render() {
        const {planet, loading,eror} = this.state;


        const hasData = !(loading || eror);
        const erorMasage = eror ? <Eror/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetViev planet={planet} /> : null;
        
        return (
            <div className="container">
            <div className="random-planet container">
            {erorMasage}
            {spinner}
            {content }
            </div>
        </div>
        );
    }
}

const PlanetViev = ({planet}) => {

    const {id, name, population, rotation, diameter} = planet;

    return(
        <React.Fragment>
            <img className="random-panet-img" alt="" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                
                <ul className="planet-info container">
                    <li>
                        <h3>{name}</h3>
                    </li>
                    <li>
                        <span>Population</span>
                        <span>{population}</span>
                    </li>
                    <li>
                        <span>Rotation Period</span>
                        <span>{rotation}</span>
                    </li>
                    <il>
                        <span>Diameter</span>
                        <span>{diameter}</span>
                    </il>
                </ul>
        </React.Fragment>
    )
}

export default RandomPlanet;