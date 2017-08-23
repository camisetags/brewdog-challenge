
const main = (() => {
  const controller = new BeerController(
    beerArticleComponent,
    new BeerSerializer()
  );

  window.onload = () => {
    controller.loadList();
  };

  document.querySelector('#search-form')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      controller.search();
    });
})();

