const card = document.getElementById("glass-card");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 80) {
    card.classList.add("header");
  } else {
    card.classList.remove("header");
  }
});
