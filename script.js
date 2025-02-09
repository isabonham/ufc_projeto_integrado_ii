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