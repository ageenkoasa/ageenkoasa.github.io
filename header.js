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
            }

            if (icon) {
                icon.classList.toggle('rotate-180');
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
}

