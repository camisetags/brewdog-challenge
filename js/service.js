
class BeerApi {
  constructor() {
    this.apiEndpoint = 'https://api.punkapi.com/v2';
  }
  
  list() {
    return fetch(`${this.apiEndpoint}/beers/`);
  }

  getById(beerId) {
    return fetch(`${this.apiEndpoint}/beers/1`);
  }
}