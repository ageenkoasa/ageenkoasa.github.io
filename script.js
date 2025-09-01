// script.js
// -------------------------
// Header & Footer
export function initHeaderFooter() {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    if (header) loadPart("header", "header.html");
    if (footer) loadPart("footer", "footer.html");

    async function loadPart(id, file) {
        try {
            const response = await fetch(file);
            document.getElementById(id).innerHTML = await response.text();
        } catch (err) {
            console.error(`Не удалось загрузить ${file}:`, err);
        }
    }
}

// -------------------------
// Мобильное меню
export function initMobileMenu() {
    const openBtn = document.getElementById("open-menu-btn");
    const closeBtn = document.getElementById("close-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const links = document.querySelectorAll("#mobile-menu .menu-link");

    if (!openBtn || !closeBtn || !mobileMenu) return;

    function openMenu() {
        mobileMenu.classList.remove("-translate-y-5", "opacity-0", "pointer-events-none");
        mobileMenu.classList.add("translate-y-0", "opacity-100");
        openBtn.classList.add("hidden");
        closeBtn.classList.remove("hidden");
    }

    function closeMenu() {
        mobileMenu.classList.remove("translate-y-0", "opacity-100");
        mobileMenu.classList.add("-translate-y-5", "opacity-0", "pointer-events-none");
        openBtn.classList.remove("hidden");
        closeBtn.classList.add("hidden");
    }

    openBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    links.forEach(link => link.addEventListener("click", closeMenu));
}

// -------------------------
// Фильтрация курсов
// export function initCourseFilter() {
//     const filterButtons = document.querySelectorAll("[data-filter]");
//     const courses = document.querySelectorAll("[name='course-card']");

//     if (!filterButtons.length || !courses.length) return;

//     filterButtons.forEach(button => {
//         button.addEventListener("click", () => {
            
//             const category = button.getAttribute("data-filter");

//             courses.forEach(course => {
//                 if (category === "all" || course.getAttribute("data-category") === category) {
//                     course.classList.remove("hidden");
//                     course.classList.add("flex"); // восстанавливаем flex, чтобы карточки не ломались
//                 } else {
//                     course.classList.add("hidden");
//                     course.classList.remove("flex");
//                 }
//             });


//             // стили активной кнопки
//             filterButtons.forEach(btn => {
//                 btn.classList.remove("bg-aksios-blue", "text-white");
//                 btn.classList.add("bg-gray-200", "text-gray-700");
//             });
//             button.classList.remove("bg-gray-200", "text-gray-700");
//             button.classList.add("bg-aksios-blue", "text-white");
//         });
//     });
// }


// -------------------------
// FAQ-аккордеон
export function initFAQ() {
    const faqButtons = document.querySelectorAll('[name="faq-question"]');
    if (!faqButtons.length) return;

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('span:last-child');
            if (!answer || !icon) return;

            answer.classList.toggle('hidden');
            icon.textContent = answer.classList.contains('hidden') ? '+' : '−';
        });
    });
}

// -------------------------
// Плавный скролл
export function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    if (!anchors.length) return;

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// -------------------------
// Инициализация всех функций
document.addEventListener("DOMContentLoaded", () => {
    initHeaderFooter();
    initMobileMenu();
    //initCourseFilter();
    initFAQ();
    initSmoothScroll();
});


