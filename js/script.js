
const test = document.querySelector('.footer');
window.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-cart')) {

    const card = event.target.closest('.section__card');
    const productinfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.section__card--img').getAttribute('src'),
      title: card.querySelector('.section__card--title').innerText,
      description: card.querySelector('.section__card--description').innerText,
      price: card.querySelector('.section__card--price').innerText,
    }

    const cartItemHTML = `
    <div class="section__card" data-id="${productinfo.id}">
      <div class="section__card--iner">
        <img src="${productinfo.imgSrc}" alt="" class="section__card--img">
        <p class="section__card--line"></p>
        <h3 class="section__card--title">${productinfo.title}</h3>
        <p class="section__card--description">${productinfo.description}d</p>
        <p class="section__card--price">${productinfo.price}</p>
        <button data-cart type="button" class="section__card--button">Купити</button>
      </div>
    </div>`
    test.insertAdjacentHTML('beforeend',cartItemHTML)
    localStorage.setItem('zet', cartItemHTML);
    console.log(cartItemHTML);
  };
});