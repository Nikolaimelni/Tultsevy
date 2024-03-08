document.addEventListener("DOMContentLoaded", function() {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navbarCollapse.classList.remove("show");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.hidden');

    function checkVisibility() {
        elementsToAnimate.forEach(function(element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add('visible');
            }
        });
    }

    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
});

// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("fs-frm");
//     const emailInput = document.getElementById("email-address");
//     const successMessage = document.getElementById("submitSuccessMessage");
//     const errorMessage = document.getElementById("submitErrorMessage");

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();

//         resetValidationStates();

//         let isValid = true;

//         if (!form.checkValidity()) {
//             showValidationErrors();
//             isValid = false;
//         }

//         if (!validateEmail(emailInput.value)) {
//             emailInput.classList.add("is-invalid");
//             isValid = false;
//         }

//         if (!isValid) {
//             return;
//         }

//         const formData = new FormData(form);

//         const xhr = new XMLHttpRequest();
//         xhr.open("POST", "https://formspree.io/f/xyyrkzpq", true);
//         xhr.setRequestHeader("Accept", "application/json");

//         xhr.onload = () => {
//             if (xhr.status === 200) {
//                 successMessage.classList.remove("d-none");
//                 errorMessage.classList.add("d-none");
//             } else {
//                 errorMessage.textContent = "There was an error submitting the form. Please try again.";
//                 errorMessage.classList.remove("d-none");
//             }
//         };

//         xhr.onerror = () => {
//             errorMessage.textContent = "There was a network error. Please check your internet connection and try again.";
//             errorMessage.classList.remove("d-none");
//         };

//         xhr.send(formData);
//     });

//     const resetValidationStates = () => {
//         form.querySelectorAll(".form-control").forEach(input => {
//             input.classList.remove("is-invalid");
//         });
//     };

//     const showValidationErrors = () => {
//         form.querySelectorAll(":invalid").forEach(input => {
//             input.classList.add("is-invalid");
//         });
//     };

//     const validateEmail = (email) => {
//         const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         return re.test(email.toLowerCase());
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    function updateCountdown() {
        const countdownElement = document.getElementById('countdown');
        const targetDate = new Date('July 20, 2024 15:00:00').getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div class="time-unit">${days}<span class="time-label">дней</span></div>
            <div class="time-unit">${hours}<span class="time-label">часов</span></div>
            <div class="time-unit">${minutes}<span class="time-label">минут</span></div>
            <div class="time-unit">${seconds}<span class="time-label">секунд</span></div>
        `;

        setTimeout(updateCountdown, 1000);

        if (distance < 0) {
            clearInterval(updateCountdown);
            countdownElement.innerHTML = "Событие началось!";
        }
    }

    // Запуск функции обновления таймера
    updateCountdown();
});
window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var name1 = urlParams.get('name');
    var name2 = urlParams.get('name2');
    var greeting = document.querySelector('.section-frame h1');

    if (name1 && name2) {
        greeting.innerHTML = 'Дорогие <br>' + name1 + ' и ' + name2 + '!';
    } else if (name1) {
        greeting.innerHTML = 'Дорогой <br>' + name1 + '!';
    } else {
        greeting.innerHTML = 'Дорогой Гость!';
    }

    document.querySelector('.section-background').classList.remove('hidden');
};