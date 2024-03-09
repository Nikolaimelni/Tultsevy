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

    updateCountdown();
});

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const names = [
        urlParams.get('name'), 
        urlParams.get('name2'), 
        urlParams.get('name3'), 
        urlParams.get('name4')
    ].filter(Boolean);

    const processedNames = names.map(name => name.replace(/_/g, ' '));

    const greeting = document.querySelector('.section-container:first-of-type .section-frame h1');
    if (processedNames.length > 0) {
        const femaleNames = ["Галина Васильевна", "Лина", "Анастасия", "Александра", "Екатерина", "Валерия", "Кристина", "Алёна", "Любовь", "Вероника", "Алина", "Олеся", "Алеся", "Ульяна", "Оксана", "Юлия", "Наталья"];
        let greetingPrefix = 'Дорогие';
        if (processedNames.length === 1) {
            greetingPrefix = femaleNames.includes(processedNames[0]) ? 'Дорогая' : 'Дорогой';
        }

        let namesString;
        if (processedNames.length > 2) {
            namesString = processedNames.slice(0, -1).join(', ') + ' и ' + processedNames.slice(-1);
        } else if (processedNames.length === 2) {
            namesString = processedNames.join(' и ');
        } else {
            namesString = processedNames[0];
        }
        
        greeting.innerHTML = `${greetingPrefix} <br>${namesString}!`;
    }

    document.querySelectorAll('.section-container').forEach(function(section) {
        section.classList.remove('hidden');
    });

    const form = document.getElementById("confirmation-form");
    const guestNameInput = document.getElementById("guest-name");
    let guestName = "Гость";
    if (processedNames.length > 0) {
        let guestNameString;
        if (processedNames.length > 2) {
            guestNameString = processedNames.slice(0, -1).join(', ') + ' и ' + processedNames.slice(-1);
        } else {
            guestNameString = processedNames.join(' и ');
        }
        guestName = guestNameString;
    }
    guestNameInput.value = guestName + " подтвердил(а) свое присутствие.";

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        fetch("https://formspree.io/f/xgegzzvz", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            },
        })
        .then(response => {
            if (response.ok) {
                alert("Спасибо за подтверждение вашего присутствия!");
            } else {
                alert("Произошла ошибка. Пожалуйста, попробуйте снова.");
            }
        })
        .catch(error => {
            alert("Произошла ошибка сети. Пожалуйста, проверьте ваше интернет-соединение и попробуйте снова.");
        });
    });
};
