// small devices - open navigation

const navBtn = document.querySelector('.header__navBtn');
const nav = document.querySelector('nav');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
});

nav.addEventListener('click', (e) => {
  if (e.target.attributes[0].name === 'href') nav.classList.remove('menu-open');
});

///////////////// header slider

const btnUp = document.querySelector('.header__sliderArrowUp');
const btnDown = document.querySelector('.header__sliderArrowDown');
const sliderCurrentNumber = document.querySelector(
  '.header__sliderCurrentNumber'
);
const sliderLength = document.querySelector('.header__sliderLength');
const allSlides = document.querySelectorAll('.header__slider img');

let currentNumber = 1;

sliderLength.innerHTML =
  allSlides.length < 10 ? '0' + allSlides.length : allSlides.length;

function setAll() {
  sliderCurrentNumber.innerHTML =
    currentNumber < 10 ? '0' + currentNumber : currentNumber;

  allSlides.forEach((slide) => slide.classList.remove('slide-active'));
  allSlides[currentNumber - 1].classList.add('slide-active');
}
setAll();

function nextSlide() {
  currentNumber++;
  if (currentNumber === allSlides.length + 1) currentNumber = 1;
  setAll();
}
function prevSlide() {
  currentNumber--;
  if (currentNumber === 0) currentNumber = 6;
  setAll();
}

btnDown.addEventListener('click', nextSlide);
btnUp.addEventListener('click', prevSlide);

////////////// experience counter up

const experienceSection = document.querySelector('#experience').offsetTop;
const experienceDetails = document.querySelector('.experience__textDetails');
let element, temp, max;

function getElement(el) {
  element = document.querySelector('#' + el);
  max = element.innerHTML;
  temp = max - max * 0.99;

  counting(element, temp, max);
}

function counting(element, temp, max) {
  let delay;
  if (max <= 20) delay = 160;
  if (max > 20) delay = 32;
  if (max > 100) delay = 1;

  if (temp <= max) {
    setTimeout(function () {
      temp = temp + 1;

      element.innerHTML = Math.ceil(temp);

      counting(element, temp, max);
    }, delay);
  } else {
    element.innerHTML = max;
  }
}

let count = 0;

window.addEventListener('scroll', () => {
  if (window.scrollY > experienceSection) {
    count++;
    if (count == 1) {
      experienceDetails.classList.add('in-view');
      getElement('years_experience');
      getElement('award_gained');
      getElement('furnitures_sold');
    }
  }
});

////////// testimonial slider

const testimonialCards = document.querySelectorAll('.testimonial__sliderCard');
const testimonialBtnPrev = document.querySelector(
  '.testimonial__sliderBtnsPrev'
);
const testimonialBtnNext = document.querySelector(
  '.testimonial__sliderBtnsNext'
);
let cardIndex = 0;
let testimonialColumns = window.innerWidth < 992 ? 1 : 2;

const testimonialLength =
  window.innerWidth < 992
    ? testimonialCards.length - testimonialColumns
    : testimonialCards.length - testimonialColumns;
const testimonialPercent = 100 / testimonialColumns;

function testimonialPrevSlide() {
  if (cardIndex == 0) cardIndex = testimonialLength;
  else cardIndex--;

  testimonialCards[0].style.marginLeft = `-${cardIndex * testimonialPercent}%`;
}

function testimonialNextSlide() {
  if (cardIndex == testimonialLength) cardIndex = 0;
  else cardIndex++;

  testimonialCards[0].style.marginLeft = `-${cardIndex * testimonialPercent}%`;
}

testimonialBtnPrev.addEventListener('click', testimonialPrevSlide);
testimonialBtnNext.addEventListener('click', testimonialNextSlide);

console.log(window.innerWidth);

////////// form submit

const form = document.querySelector('form');

form.addEventListener('submit', (e) => e.preventDefault());
