const main = (() => {
  const controller = new BeerController(
    beerArticleComponent,
    new BeerSerializer()
  );

  const beerId = getParameterByName('id');

  window.onload = () => {
    controller.show(beerId);
  };
})();