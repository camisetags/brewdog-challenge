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
})();