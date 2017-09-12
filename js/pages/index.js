const main = (() => {
  const controller = new BeerController(
    beerArticleComponent,
    new BeerSerializer(),
    new BeerApi()
  );

  window.onload = () => {
    controller.loadList();
  };

  document.querySelector('.search-form')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      controller.search();
    });
})();

