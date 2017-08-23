
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

const beerUnique = (beerObj) => (`
  ${beerArticleComponent(beerObj)}
  <div class="beer-card description">
    <h2>Description</h2>
    <p>
      ${beerObj.description}
    </p>
  </div>

  <div class="beer-card combination">
    <h2>Combination</h2>
    <ul>
      ${beerObj.food_pairing.map((pairing) =>
        `<li>${pairing}</li>`
      ).join('')}
    </ul>
  </div>
`);