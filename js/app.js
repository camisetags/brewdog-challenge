
const main = (() => {
  let beerArticleComponent = (beerObj) => (`
    <article>
      <div class="img-container">
          <img src="${beerObj.image_url}">
      </div>
      <div class="text-container">
          <h2>${beerObj.name}</h2>
          <p>${beerObj.tagline}</p>
      </div>
    </article>
  `);

  let controller = new BeerController(beerArticleComponent);
  controller.loadBeers();
})();

