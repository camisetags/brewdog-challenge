class BeerController {
  constructor(component, beerSerializer, service) {
    this.service = service;
    this.component = component;
    this.beerDOMContainer = document.querySelector('.beer-container');
    this.beerSerializer = beerSerializer;
  }

  loadList() {
    if (this.beerSerializer.getBeerList()) {
      this._loadBeersIntoDOM(
        this.beerSerializer.getBeerList()
      );
    } else {
      this._fetchBeers();
    }
  }

  search() {
    const q = document.querySelector('.q').value;
    document.querySelector('.q').value = "";
    
    let filteredBeers = this.beerSerializer
      .getBeerList()
      .filter(beer => beer.name.toLowerCase().includes(q));

    this._loadBeersIntoDOM(filteredBeers);
  }

  async show(id) {
    let response;
    let beer;
    if(id === 'random'){
      response = await this.service.getRandom();
      beer = await response.json();
    } else {
      response = await this.service.getById(id);
      beer = await response.json();
  
    }
    this._loadShowBeerIntoDOM(beer[0]);
  }

  async _fetchBeers() {
    let response = await this.service.list();
    let beerList = await response.json();
    
    if(beerList.length > 0) {
      this.beerSerializer.serialize(beerList);
      this._loadBeersIntoDOM(beerList);
    } else {
      this.beerDOMContainer.innerHTML = '<p class="no-results">Nenhuma cerveja encontrada...</p>'
    }
  }

  _loadBeersIntoDOM(beerList) {
    this.beerDOMContainer.innerHTML = '';
    if (beerList.length > 0) {
      beerList.forEach((beer) => {
        this.beerDOMContainer.innerHTML += `${this.component(beer)}\n`;
      });
    } else {
      this.beerDOMContainer.innerHTML += `<p class="no-results">Nenhuma cerveja encontrada...</p>`;
    }
  }

  _loadShowBeerIntoDOM(beer) {
    this.beerDOMContainer.innerHTML = '';
    this.beerDOMContainer.innerHTML = this.component(beer);
  }
}