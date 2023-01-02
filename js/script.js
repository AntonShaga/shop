let shoppArrey = [];
let shoppingInLocalStorage = JSON.parse(localStorage.getItem('zet'));

if (shoppingInLocalStorage !== null) {
  shoppArrey.push(shoppingInLocalStorage)
};

window.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-cart')) {

    const card = event.target.closest('.section__card');
    const productinfo = {
                          id: card.dataset.id,
                          imgSrc: card.querySelector('.section__card--img').getAttribute('src'),
                          title: card.querySelector('.section__card--title').innerText,
                          description: card.querySelector('.section__card--description').innerText,
                          price: card.querySelector('.section__card--price').innerText,
                        };
    shoppArrey.push(productinfo);
    localStorage.setItem('zet', JSON.stringify(shoppArrey));
  };
});
