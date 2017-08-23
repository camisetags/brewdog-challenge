class BeerController {
  constructor(component, serializer) {
    this.service = new BeerApi();
    this.component = component;
    this.beerListContainer = document.querySelector('#cervejas');
    this.serializer = serializer;
    this.beers = this.serializer.deserialize();
  }

  loadList() {
    if (this.beers) {
      this._loadBeersIntoDOM(this.beers);
    } else {
      this._fetchBeers();
    }
  }

  search() {
    const q = document.querySelector('#q').value;
    let filteredBeers = this.beers.filter(beer => beer.name.toLowerCase().includes(q));
    this._loadBeersIntoDOM(filteredBeers);
  }

  _fetchBeers() {
    this.service.list()
      .then((response) => response.json())
      .then((beerList) => {
        if (beerList.length > 0) {
          this.serializer.serialize(beerList);
          this._loadBeersIntoDOM(beerList);
        } else {
          this.beerListContainer.innerHTML = 'Nenhuma cerveja encontrada...'
        } 
      });
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