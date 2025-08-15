import JustValidate from 'https://cdn.jsdelivr.net/npm/just-validate@latest/dist/just-validate.es.js';

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

try {
    const validatorTouch = new JustValidate('.contacts__form');

    validatorTouch
        .addField('#name', [
            {
            rule: 'required',
            errorMessage: 'Please fill the name',
            },
            {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Min 2 char!',
            },
        ])
        .addField('#email', [
            {
            rule: 'required',
            errorMessage: 'Please fill the email',
            },
            {
            rule: 'email',
            },
        ])
        .addField('#text', [
            {
            rule: 'required',
            errorMessage: 'Please fill the text',
            },
            {
            rule: 'minLength',
            value: 5,
            },
        ])
        .addField('#checkbox', [
            {
            rule: 'required',
            },
        ])
        .onSuccess((event) => {
			const form = event.currentTarget;
			const formData = new FormData(form);

			fetch("https://httpbin.org/post", {
				method: "POST",
				body: formData,
			})
				.then((res) => res.json())
				.then((data) => {
					console.log("Success", data);
					form.reset();
				});
		});
} catch (e) {}


