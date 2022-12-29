const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');


sliderItems.forEach(function(slide, index) {

  if (index !== 0) {
    slide.classList.add('hidden')
  }

  slide.dataset.index = index;
  sliderItems[0].setAttribute('data-active', '');

  slide.addEventListener('click', function() {
    showNextSlide ('next');
  });
});

btnNext.onclick = function () {
  showNextSlide ('next');
};

btnPrev.onclick = function () {
  showNextSlide ('prev');
};
/*
function showNextSlide (derection) {
  const currentSlide = slider.querySelector('[data-active]');
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active')

  let nextSlideIndex; 

  if (derection === 'next') {
    if (currentSlideIndex + 1 === sliderItems.length) {
      nextSlideIndex = 0;
    } else {
      nextSlideIndex = currentSlideIndex + 1;
    }
  } else if (derection == 'prev') {
    if (currentSlideIndex  === 0) {
      nextSlideIndex = sliderItems.length -1;
    } else {
      nextSlideIndex = currentSlideIndex - 1;
    }
  }

  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    
    nextSlide.setAttribute('data-active', '');
}
*/

function showNextSlide (derection) {
  const currentSlide = slider.querySelector('[data-active]');
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active')

  let nextSlideIndex; 

  if (derection === 'next') {
    if (currentSlideIndex + 1 === sliderItems.length) {
      nextSlideIndex = 0;
    } else {
      nextSlideIndex = currentSlideIndex + 1;
    }
  } else if (derection == 'prev') {
    if (currentSlideIndex  === 0) {
      nextSlideIndex = sliderItems.length -1;
    } else {
      nextSlideIndex = currentSlideIndex - 1;
    }
  }

  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    
    nextSlide.setAttribute('data-active', '');
}

///