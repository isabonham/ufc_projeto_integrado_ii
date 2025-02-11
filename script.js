document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  let hasStarted = false; // Impede que o contador rode mais de uma vez

  function startCounter() {
      counters.forEach(counter => {
          const target = +counter.getAttribute("data-target");
          let count = 0;
          const isYearCounter = counter.closest(".stat").querySelector("p").innerText.includes("Anos");
          const increment = isYearCounter ? 1 : Math.ceil(target / 80);
          const intervalTime = isYearCounter ? 400 : 40; // Reduzi o tempo para deixar mais fluido

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

      if (sectionPosition < screenPosition && !hasStarted) {
          hasStarted = true;
          startCounter();
          window.removeEventListener("scroll", handleScroll);
      }
  }

  window.addEventListener("scroll", handleScroll);
});






document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let currentIndex = 1; // Começa no primeiro slide real
  let slideWidth = slides[0].offsetWidth + 20; // largura + margem

  function updateSlideWidth() {
      slideWidth = slides[0].offsetWidth + 20;
      slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  }

  window.addEventListener('resize', updateSlideWidth);

  nextBtn.addEventListener('click', () => {
      if (currentIndex >= slides.length - 1) return;
      currentIndex++;
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

      if (currentIndex === slides.length - 1) {
          setTimeout(() => {
              slider.style.transition = 'none';
              currentIndex = 1;
              slider.style.transform = `translateX(${-slideWidth}px)`;
          }, 500);
      }
  });

  prevBtn.addEventListener('click', () => {
      if (currentIndex <= 0) return;
      currentIndex--;
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

      if (currentIndex === 0) {
          setTimeout(() => {
              slider.style.transition = 'none';
              currentIndex = slides.length - 2;
              slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
          }, 500);
      }
  });
});


document.querySelector(".menu-toggle").addEventListener("click", function() {
  document.querySelector("nav").classList.toggle("active");
});
