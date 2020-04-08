
class SwapiService {
    async getResource(url) {
      const res = await fetch(url);
  
      if (!res.ok) throw new Error(`Couldn't fetch ${url}`)
  
      const body = await res.json();
      return body;
    }
    async getAllPeople() {
      const res = await this.getResource('https://swapi.co/api/people/')
      return res.results;
    }
  
    async getPerson(id) {
      return this.getResource(`https://swapi.co/api/people/${id}/`)
    }
  
    async getAllPlanets() {
      const res = await this.getResource('https://swapi.co/api/planets/')
      return res.results;
    }
  
    async getPlanet(id) {
      return this.getResource(`https://swapi.co/api/planets/${id}/`)
    }
  
    async getAllStarships() {
      const res = await this.getResource('https://swapi.co/api/starships/')
      return res.results;
    }
  
    async getStarships(id) {
      return this.getResource(`https://swapi.co/api/starships/${id}/`)
    }
  }
  
  
  export default SwapiService;