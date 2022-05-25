import React, { Component } from 'react';
import "./ItemList.css"
import SwapiService from "../../services/swapi-servis"
import Spinner from '../Spinner/Spinner';

class ItemList extends Component {
    state = {
        persons: [],
        loading: true
    }


    swapiservise = new SwapiService();

    componentDidMount(){
        this.updatePersons(this.props.item);
    }

    componentDidUpdate(prevProps){
        if(prevProps.item !== this.props.item){
            this.updatePersons(this.props.item);
            this.setState({loading: true});
        }
    }

    onPerosnLoaded = (persons) => {
        console.log(`person: ${persons}`)
        console.log(persons)
        this.setState({persons, loading:false})
    }

    updatePersons = (item) => {
        switch(item){
            case "people":
                this.swapiservise.getAllPeople().then((persons) =>{
                    this.onPerosnLoaded(persons);
                   
                })
                break;
                case "planets":
                this.swapiservise.getAllPlanets().then((persons) =>{
                    this.onPerosnLoaded(persons);
                   
                })
                break;case "starships":
                this.swapiservise.getAllStarships().then((persons) =>{
                    this.onPerosnLoaded(persons);
                  console.log(persons)
                })
                break;
                default:
                    this.swapiservise.getAllPeople().then((persons) =>{
                        this.onPerosnLoaded(persons);
                       
                    })
                    break;
        }
        
    }

   createItems(persons){
        
       return(
           persons.map((el)=> <li key = {el.id} onClick={() => this.props.onItemSelected(el.id)}>{el.name}</li>)
       )
   }

    render() {

        const {persons, loading} = this.state;
        const Items = !loading ? this.createItems(persons) : null;
        const spinner = loading ? <Spinner/> : null;
        return (
            <div className="list-item container col-md-6">
            <div className="list-items">
                <ul className="list-item-ul">
                    {Items}
                    <span className='spinner'>{spinner}</span>
                </ul>
            </div>
        </div>
        );
    }
}

export default ItemList;