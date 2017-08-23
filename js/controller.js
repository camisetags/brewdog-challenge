class BeerController {
  constructor(component) {
    this.service = new BeerApi();
    this.component = component;
    this.beerListContainer = document.querySelector('#cervejas');
  }

  loadBeers() {
    this.service.list()
      .then((response) => response.json())
      .then((beerList) => {
        if (beerList.length > 0) {
          this._loadBeersIntoDOM(beerList);
        } else {
          this.beerListContainer.innerHTML = 'Nenhuma cerveja encontrada...'
        } 
      });
  }

  _loadBeersIntoDOM(beerList) {
    beerList.forEach((beer) => {
      this.beerListContainer.innerHTML += `${this.component(beer)}\n`;
    });
  }
}