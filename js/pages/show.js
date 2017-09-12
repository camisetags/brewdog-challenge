const main = (() => {
  const controller = new BeerController(
    beerUnique,
    new BeerSerializer(),
    new BeerApi()
  );

  const beerId = getParameterByName('id');

  window.onload = () => {
    controller.show(beerId);
  };

  document.querySelector('.search-form')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      document.querySelector('.beer-container').classList.add('list');
      controller.search();
    });
})();