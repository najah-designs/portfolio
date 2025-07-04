function hideLoader(iframe) {
  const card = iframe.closest('.behance-embed-card');
  if (card) {
    card.classList.add('loaded');
  }
}
