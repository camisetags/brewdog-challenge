
class BeerApi {
  constructor() {
    this.apiEndpoint = 'https://api.punkapi.com/v2';
  }
  
  list() {
    return fetch(`${this.apiEndpoint}/beers/`);
  }

  getById(beerId) {
    return fetch(`${this.apiEndpoint}/beers/${beerId}`);
  }

  getRandom() {
    return fetch(`${this.apiEndpoint}/beers/random`);
  }
}

class BeerSerializer {
  serialize(obj) {
    try {
      obj = JSON.stringify(obj);
      window.localStorage.setItem('beerList', obj);
    } catch (e) {
      alert('Erro ao serializar objeto!');
      console.error(e);
    }
  }

  getBeerList() {
    try {
      return JSON.parse(
        window.localStorage.getItem('beerList')
      );
    } catch (e) {
      alert('Erro ao serializar objeto!');
      console.error(e);
    }
  }
}

getParameterByName = (name) => {
  const parameter = new URLSearchParams(window.location.search);
  return parameter.get(name);
}