const serviceFeaturesButtonContainer = document.querySelector('.service-features__buttons');
const serviceFeaturesButtons = document.querySelectorAll('.service-features__button');
const serviceFeaturesScreens = document.querySelectorAll('.service-slider__item');

const classActiveFeaturesButton = 'active';
const classActiveServiceSliderScreen = 'service-slider__item--active';

const serviceFeaturesScreen = document.querySelector('.service-slider__item');

const firstSoft = document.querySelector('.softs__item');
const softs = document.querySelectorAll('.softs__item');
firstSoft.classList.add('softs__item--active');

setInterval(() => {
  const activeSoft = document.querySelector('.softs__item--active');
  const index = Array.from(softs).indexOf(activeSoft);
  activeSoft.classList.remove('softs__item--active');
  const newIndex = index + 1 < softs.length ? index + 1 : 0;
  Array.from(softs)[newIndex].classList.add('softs__item--active');
}, 5000);

serviceFeaturesScreen.classList.add('service-slider__item--active');

const setActive = (element, classNameActive, classNameBase) => {
  document.querySelector(`.${classNameBase}.${classNameActive}`).classList.remove(classNameActive);
  element.classList.add(classNameActive)
};

const moveMenu = () => {
  const activeElement = document.querySelector('.service-features__button.active');
  const buttonElements = Array.from(serviceFeaturesButtons)
  const activeElementIndex = buttonElements.indexOf(activeElement);

  serviceFeaturesButtonContainer.innerHTML = '';

  buttonElements.slice(activeElementIndex, buttonElements.length).forEach((item) => {
    serviceFeaturesButtonContainer.append(item)
  });

  buttonElements.slice(0, activeElementIndex).forEach((item) => {
    serviceFeaturesButtonContainer.append(item)
  });
};

serviceFeaturesButtonContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('service-features__button')) {
    setActive(e.target, 'active', 'service-features__button');
    setActive(
      Array.from(serviceFeaturesScreens)[Array.from(serviceFeaturesButtons).indexOf(e.target)],
      'service-slider__item--active',
      'service-slider__item'
    );
    moveMenu();
  }
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper__pagination',
    slidesPerView: 1
  },
});




const menu = document.querySelector('.menu');
const toggle = document.querySelector('.page-header__toggle');
const mainButton = document.querySelector('.page-header__button')
const pageHeaderElement = document.querySelector('.page-header');

toggle.addEventListener('click', function() {
  toggle.classList.toggle('page-header__toggle--closed');
  menu.classList.toggle('menu--oppened');
  mainButton.classList.toggle('page-header__button--oppened');
})