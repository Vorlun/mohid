const barsBtn = document.querySelector(".bars-i");
const barsMenu = document.querySelector(".bars");

barsBtn.addEventListener("click", () => {
  barsMenu.classList.toggle("active");
});
const wrapper = document.querySelector(".review-wrapper");
const inner = document.querySelector(".review-inner");
const carusel = document.querySelector(".carusel");
let dots = [];

function initCarousel() {
  const cards = document.querySelectorAll(".review-card");

  const visibleCards = window.innerWidth <= 1120 ? 1 : 2;

  const cardWidth = cards[0].offsetWidth;
  const gap = parseInt(getComputedStyle(wrapper).gap) || 0;

  const pageWidth = visibleCards * cardWidth + (visibleCards - 1) * gap;

  const pages = Math.ceil(cards.length / visibleCards);

  carusel.innerHTML = "";
  dots = [];

  for (let i = 0; i < pages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("carusel-circle");
    if (i === 0) dot.classList.add("active");
    dot.dataset.index = i;
    carusel.appendChild(dot);
    dots.push(dot);

    dot.addEventListener("click", () => {
      dots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");

      const shift = -(i * pageWidth);
      wrapper.style.transform = `translateX(${shift}px)`;
    });
  }

  inner.style.maxWidth = pageWidth + "px";
}

initCarousel();

window.addEventListener("resize", () => {
  initCarousel();
  wrapper.style.transform = "translateX(0)";
});
