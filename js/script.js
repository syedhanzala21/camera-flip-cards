document.querySelectorAll(".camera-card").forEach((card) => {
  const button = card.querySelector(".card-inner");

  button.addEventListener("click", () => {
    const flipped = card.classList.toggle("is-flipped");
    button.setAttribute("aria-pressed", String(flipped));
  });
});
