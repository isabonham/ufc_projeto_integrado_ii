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

    let currentIndex = 0;

    function updateSlideWidth() {
        let slideWidth = slides[0].offsetWidth + 20; // Calcula a largura do slide + margem
        slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }

    window.addEventListener('resize', updateSlideWidth);

    // Avançar automaticamente os slides
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlideWidth();
    }

    setInterval(nextSlide, 3000); // Troca os slides a cada 3 segundos
});



document.querySelector(".menu-toggle").addEventListener("click", function() {
  document.querySelector("nav").classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
});
