export default class SwapiService {

    _apiBase = 'https://www.swapi.tech/api';
    
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    }
  
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformList);
    }
  
    async getPerson(id) {
      const person = await this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
    }
  
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
     return res.results.map(this._transformList);
    }
  
    async getPlanet(id) {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(planet.result);
    }
  
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformList);
    }
  
    async getStarship(id) {
      const starship = await this.getResource(`/starships/${id}/`);
      return this._transformStarship(starship);
    }
  
    _extractId(item) {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    }
  
    _transformPlanet(planet) {
      return {
        id: planet.uid,
        name: planet.properties.name,
        population: planet.properties.population,
        rotation: planet.properties.rotation_period,
        diameter: planet.properties.diameter
      };
    }

    _transformList(list) {
      return {
        id: list.uid,
        name: list.name
      };
    }

    _transformStarship(starship) {
      return {
        id: starship.uid,
        name: starship.result.properties.name,
        model: starship.result.properties.model,
        crew: starship.result.properties.crew,
        consumables: starship.result.properties.consumables,
      }
    }

    
  
    _transformPerson(person) {
      return {
        id: person.result.uid,
        name: person.result.properties.name,
        gender: person.result.properties.gender,
        birthYear: person.result.properties.birth_year,
        eyeColor: person.result.properties.eye_color
      }
      
      
    }

    
      
      
    
  }