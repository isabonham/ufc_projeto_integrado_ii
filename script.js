document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");

    function startCounter() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const isYearCounter = counter.closest(".stat").querySelector("p").innerText.includes("Anos");
            const increment = isYearCounter ? 1 : Math.ceil(target / 80);
            const intervalTime = isYearCounter ? 400 : 80;

            const interval = setInterval(() => {
                count += increment;

                if (count >= target) {
                    count = target;
                    clearInterval(interval);
                }

                counter.innerText = count;

                if (isYearCounter) {
                    const suffix = count === 1 ? "ano" : "anos";
                    counter.nextElementSibling.innerText = suffix;
                }
            }, intervalTime);
        });
    }

    function handleScroll() {
        const statsSection = document.querySelector(".stats");
        const sectionPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            startCounter();
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener("scroll", handleScroll);
});





const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

// Duplicar as primeiras e últimas slides para criar o efeito de loop
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

slider.appendChild(firstClone);
slider.insertBefore(lastClone, slides[0]);

const slideWidth = slides[0].offsetWidth + 20; // largura + margem

// Inicializar posição
slider.style.transform = `translateX(${-slideWidth}px)`;

nextBtn.addEventListener('click', () => {
  currentIndex++;
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(${-slideWidth * (currentIndex + 1)}px)`;

  if (currentIndex >= slides.length) {
    setTimeout(() => {
      slider.style.transition = 'none';
      currentIndex = 0;
      slider.style.transform = `translateX(${-slideWidth}px)`;
    }, 500);
  }
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(${-slideWidth * (currentIndex + 1)}px)`;

  if (currentIndex < 0) {
    setTimeout(() => {
      slider.style.transition = 'none';
      currentIndex = slides.length - 1;
      slider.style.transform = `translateX(${-slideWidth * (currentIndex + 1)}px)`;
    }, 500);
  }
});
