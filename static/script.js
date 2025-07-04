document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".behance-embed-card");

  cards.forEach((card) => {
    const iframe = card.querySelector("iframe");

    // Safety fallback: Hide loader after 5 seconds
    const fallbackTimeout = setTimeout(() => {
      card.classList.add("loaded");
    }, 5000); // Adjust if needed

    // If iframe loads earlier, hide the loader immediately
    iframe.addEventListener("load", () => {
      clearTimeout(fallbackTimeout);
      card.classList.add("loaded");
    });
  });
});
