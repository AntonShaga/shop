const positionProduc = document.querySelector('.rest');
let productArray = JSON.parse(localStorage.getItem('zet'));
let productBasketArray = productArray.flat(Infinity)

function renderProducts (productBasketArray) {

  productBasketArray.forEach (function (item) {
    const productBasketHTML = `
                                <div class="basket__card" data-id="${item.id}">
                                  <img src="${item.imgSrc}" alt="" class="basket__card--img">
                                    <div class="basket__text"
                                      <h3 class="basket__card--title">${item.title}</h3>
                                      <p class="basket__card--description">${item.description}d</p>
                                      <p class="basket__card--price">${item.price}</p>
                                    </div>
                                    <p> Количество </p>
                                    <button type="button" class="basket__card--button">Удалить</button>
                                </div>
                              `;
    positionProduc.insertAdjacentHTML('beforeend', productBasketHTML);
  });
};
renderProducts(productBasketArray)
console.log(productBasketArray);