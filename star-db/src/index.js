
class SwapiService {
  async getResource(url) {
    const res = await fetch(url);

    if (!res.ok) throw new Error(`Couldn't fetch ${url}`)

    const body = await res.json();
    return body;
  }
  async getAllPeople() {
    return this.getResource('https://swapi.co/api/people/')
  }
}


