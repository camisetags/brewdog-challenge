
const beerArticleComponent = (beerObj) => (`
  <a class="beer-card" href="show.html?id=${beerObj.id}">
    <div class="img-container">
        <img src="${beerObj.image_url}">
    </div>
    <div class="text-container">
        <h2>${beerObj.name}</h2>
        <p>${beerObj.tagline}</p>
    </div>
  </a>
`);