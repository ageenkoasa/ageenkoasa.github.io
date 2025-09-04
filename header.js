function initHeader() {
  const burgerBtn = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;
  const burgerIcon = document.getElementById('burger-icon');
  const closeIcon = document.getElementById('close-icon');

  // Открытие / закрытие бургера
  burgerBtn.addEventListener('click', () => {
    const isActive = mobileMenu.classList.toggle('active');
    burgerBtn.classList.toggle('burger-active');
    body.classList.toggle('overflow-hidden');
    burgerIcon.classList.toggle('hidden', isActive);
    closeIcon.classList.toggle('hidden', !isActive);
  });

  // Аккордеоны
  mobileMenu.querySelectorAll('.accordion-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
      e.preventDefault();
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('i');
      if (content && content.classList.contains('accordion-content')) {
        content.classList.toggle('active');
        content.classList.toggle('hidden');
        if (icon) icon.classList.toggle('rotate-180');
      }
    });
  });

  // Закрытие меню при клике на ссылки
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      if (e.target.closest('.accordion-toggle') || e.target.closest('.accordion-content')) return;
      mobileMenu.classList.remove('active');
      burgerBtn.classList.remove('burger-active');
      body.classList.remove('overflow-hidden');
      burgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });

  // Закрытие мобильного меню при ресайзе > 825px
  window.addEventListener('resize', () => {
    if (window.innerWidth > 825) {
      mobileMenu.classList.remove('active');
      burgerBtn.classList.remove('burger-active');
      body.classList.remove('overflow-hidden');
      burgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });

  // Проверка переноса текста десктопного меню
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

  window.addEventListener('load', checkTextWrap);
  window.addEventListener('resize', checkTextWrap);
}

function initAnchorOffset() {
  const header = document.querySelector('header-container');
  const links = document.querySelectorAll('#desktop-menu a, #mobile-menu a');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href')?.split('#')[1];
      if (!targetId) return;

      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      e.preventDefault();

      // Получаем высоту хедера + небольшой отступ
      const headerHeight = header.offsetHeight;
      const offset = 10; // можно увеличить/уменьшить

      const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = elementPosition - headerHeight - offset;

      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    });
  });
}

// Инициализация после DOM
document.addEventListener('DOMContentLoaded', initHeader);
document.addEventListener('DOMContentLoaded', initAnchorOffset);

