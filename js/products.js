const productsContainer = document.querySelector('#products');

getProducts ();

async function getProducts () {
  const response = await fetch('/js/goods.json');
  const productArray = await response.json();
  console.log(productArray.slice(0,3));
  console.log(productArray.slice(3,6));
  renderProducts(productArray);
}
  let start = 0;
  let end = 10


function renderProducts (productArray) {
  window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-more')) {
      start += 10
      end += 10
      renderProducts(productArray);
    }
  });

  productArray.slice(start, end).forEach (function (item){
    const productHTML = `
    <div class="section__card" data-id="${item.id}">
        <div class="section__card--iner">
          <img src="${item.imgSrc}" alt="" class="section__card--img">
          <p class="section__card--line"></p>
          <h3 class="section__card--title">${item.title}</h3>
          <p class="section__card--description">${item.description}d</p>
          <p class="section__card--price">${item.price}</p>
          <button data-cart type="button" class="section__card--button">Купити</button>
        </div>
      </div>
    `;
productsContainer.insertAdjacentHTML('beforeend', productHTML);
  })
}

/*
function renderProducts (productArray) {
  productArray.forEach (function (item){
    const productHTML = `<div class="section__card">
    <div class="section__card--iner">
      <img src="${item.imgSrc}" alt="" class="section__card--img">
      <p class="section__card--line"></p>
      <h3 class="section__card--title">${item.title}</h3>
      <p class="section__card--description">${item.description}d</p>
      <p class="section__card--price">${item.price}</p>
      <button class="section__card--button">Купити</button>
    </div>
</div>`;
productsContainer.insertAdjacentHTML('beforeend', productHTML);
  })
}*/