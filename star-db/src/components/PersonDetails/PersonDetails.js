import React, { Component } from 'react';
import "./PersonDetails.css"
import SwapiService from "../../services/swapi-servis"
import Spinner from '../Spinner/Spinner';

class PersonDetails extends Component {

    swapiservice = new SwapiService();
    state = {
        person: [],
        items: [],
        img: "characters",
        loading: true
    }

    

    componentDidMount(){
        this.updatePerson(this.props.item);
    }


    componentDidUpdate(prevProps){
        if((this.props.personId !== prevProps.personId ) || (prevProps.item !== this.props.item)){
            this.updatePerson(this.props.item);
            this.setState({loading: true})
        }
        
    }

    updatePerson(item){
        switch(item){
            case "people":
                this.swapiservice.getPerson(this.props.personId).then((person)=>{
                    this.setState({person, items: ["Gender", "Birth Year","Eye Color"], img: "characters", loading:false});
                })
                break;
                case "planets":
                    this.swapiservice.getPlanet(this.props.personId).then((person)=>{
                        this.setState({person, items: ["Population", "Rotation Period","Diameter"], img: "planets", loading:false});
                    })
                break;case "starships":
                this.swapiservice.getStarship(this.props.personId).then((person)=>{
                    this.setState({person, items: ["Model", "Consumables","Crew"], img: "starships", loading:false});
                    console.log(`starship: ${person}`);
                })
                break;
                default:
                    this.swapiservice.getPerson(this.props.personId).then((person)=>{
                        this.setState({person, items: ["Model", "Cength","Crew"], img: "starships", loading:false});
                    })
                    break;
        }


        
    }

    render() {
        const {person, items,img,loading} = this.state;
        const id = this.props.personId;
        const spinner = loading ? <Spinner/> : <ImageDetails img={img} id={id}/>;
        
        return (
          <div className="col-md-6">
          <div className="person-details">
          <div className='spinner'>{spinner}</div>
          <Details person={person} items={items}/>
          </div>
      </div>
        );
    }
}

const ImageDetails = ({img, id}) => {
    console.log(`id: ${id}`)
   return(
    <img src={`https://starwars-visualguide.com/assets/img/${img}/${id}.jpg`}alt=''></img>
   )
}

const Details = ({person,items}) =>{
    const { name, gender, birthYear, eyeColor, population, rotation,diameter,crew,consumables,model} = person
    return(
        <ul>
                  <li><h3>{name}</h3></li>
                  <li><span>{items[0]}</span>
                      <span>{gender}{population}{model}</span></li>
                  <li><span>{items[1]}</span>
                      <span>{birthYear}{rotation}{consumables}</span></li>
                  <li><span>{items[2]}</span>
                      <span>{eyeColor}{diameter}{crew}</span></li>
              </ul>
    )
}

export default PersonDetails;