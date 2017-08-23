class BeerController {
  constructor(component, beerSerializer) {
    this.service = new BeerApi();
    this.component = component;
    this.beerListContainer = document.querySelector('#cervejas');
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
    const q = document.querySelector('#q').value;
    
    let filteredBeers = this.beerSerializer
      .getBeerList()
      .filter(beer => beer.name.toLowerCase().includes(q));

    this._loadBeersIntoDOM(filteredBeers);
  }

  async _fetchBeers() {
    let response = await this.service.list();
    let beerList = await response.json();
    
    if(beerList.length > 0) {
      this.beerSerializer.serialize(beerList);
      this._loadBeersIntoDOM(beerList);
    } else {
      this.beerListContainer.innerHTML = 'Nenhuma cerveja encontrada...'
    }
  }

  _loadBeersIntoDOM(beerList) {
    this.beerListContainer.innerHTML = '';
    if (beerList.length > 0) {
      beerList.forEach((beer) => {
        this.beerListContainer.innerHTML += `${this.component(beer)}\n`;
      });
    } else {
      this.beerListContainer.innerHTML += `Nenhuma cerveja encontrada...`;
    }
  }
}