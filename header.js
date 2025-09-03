function initHeader() {

  const burgerBtn = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;
  const burgerIcon = document.getElementById('burger-icon');
  const closeIcon = document.getElementById('close-icon');

  // Открытие / закрытие бургера
  burgerBtn.addEventListener('click', function () {
    const isActive = mobileMenu.classList.toggle('active');
    burgerBtn.classList.toggle('burger-active');
    body.classList.toggle('overflow-hidden');
    if (isActive) {
      burgerIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      burgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });

  // Обработка аккордеонов
  const toggles = mobileMenu.querySelectorAll('.accordion-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const content = this.nextElementSibling;
      const icon = this.querySelector('i');
      if (content && content.classList.contains('accordion-content')) {
        content.classList.toggle('active');
        content.classList.toggle('hidden');
        if (icon) {
          icon.classList.toggle('rotate-180');
        }
      }
    });
  });

  // Клик по обычным ссылкам (не аккордеон) — закрываем меню
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      // Если кликнули именно по стрелке аккордеона — не закрываем
      if (e.target.closest('.accordion-toggle') || e.target.closest('.accordion-content')) {
        return;
      }
      // Закрываем меню
      mobileMenu.classList.remove('active');
      burgerBtn.classList.remove('burger-active');
      body.classList.remove('overflow-hidden');
      burgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });

  // При ресайзе экрана >= 1620px закрываем меню
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1620) {
      mobileMenu.classList.remove('active');
      burgerBtn.classList.remove('burger-active');
      body.classList.remove('overflow-hidden');
      burgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });

  // Улучшенная детекция переноса текста для десктопной версии
  function checkTextWrap() {
    const desktopMenu = document.getElementById('desktop-menu');
    if (!desktopMenu || window.innerWidth <= 1280) return;
    const headerContainer = document.querySelector('.container.mx-auto');
    if (!headerContainer) return;
    const lineHeight = parseFloat(getComputedStyle(desktopMenu).lineHeight);
    const menuHeight = desktopMenu.offsetHeight;

    if (menuHeight > lineHeight * 1.2) {
      headerContainer.classList.add('reduce-padding');
      desktopMenu.classList.add('reduce-gap', 'reduce-margins', 'smaller-font');
    } else {
      headerContainer.classList.remove('reduce-padding');
      desktopMenu.classList.remove('reduce-gap', 'reduce-margins', 'smaller-font');
    }
  }

  // Проверяем при загрузке и изменении размера окна
  window.addEventListener('load', checkTextWrap);
  window.addEventListener('resize', checkTextWrap);
}

document.addEventListener('DOMContentLoaded', initHeader);


