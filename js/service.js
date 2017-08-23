
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
      if (obj.length > 1) {
        obj = JSON.stringify(obj);
        window.localStorage.setItem('beerList', obj);
      } else {
        obj = JSON.stringify(obj);
        window.localStorage.setItem(`beer${obj[0].id}`, obj); 
      }
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

  getBeer(id) {
    try {
      return JSON.parse(
        window.localStorage.getItem(`beer${id}`)
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