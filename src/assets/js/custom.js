
  const cards = document.querySelectorAll('.category-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      cards.forEach(c => c.classList.remove('active')); // close all
      card.classList.add('active'); // open the hovered card
    });
  });
