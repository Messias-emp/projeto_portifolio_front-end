const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark"
    ? rootHtml.setAttribute("data-theme", "light")
    : rootHtml.setAttribute("data-theme", "dark");

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive
      ? accordionItem.classList.remove("active")
      : accordionItem.classList.add("active");
  });
});

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
const cards = document.querySelectorAll(".card");
let currentIndex = 0;

function showSlide(index) {
  cards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % cards.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showSlide(currentIndex);
}

// Opcional: troca automática a cada 6 segundos
setInterval(nextSlide, 6000);
