//гамбургер
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

//рядок скілов
const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

//зміна кольору фіксованого елементу
document.addEventListener('DOMContentLoaded', () => {
    const sidepanel = document.getElementById('sidepanel');
    const promoSection = document.getElementById('promo-section');

    const checkSidepanelColor = () => {
        if (!sidepanel || !promoSection) {
            return;
        }

        const sidepanelRect = sidepanel.getBoundingClientRect();
        const promoRect = promoSection.getBoundingClientRect();

        // Перевіряємо, чи перетинається бічна панель з секцією promo
        const isIntersecting = (
            sidepanelRect.top < promoRect.bottom &&
            sidepanelRect.bottom > promoRect.top
        );

        if (isIntersecting) {
            sidepanel.classList.add('sidepanel--white');
        } else {
            sidepanel.classList.remove('sidepanel--white');
        }
    };

    // Слухаємо події прокручування та завантаження сторінки
    window.addEventListener('scroll', checkSidepanelColor);
    window.addEventListener('resize', checkSidepanelColor);
    checkSidepanelColor(); // Виконуємо перевірку одразу після завантаження сторінки
});


