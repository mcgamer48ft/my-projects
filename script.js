window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  if (!container) return; // Exit if the container element is not found

  const stars = [];
  const maxStars = 100; // Reduced the number of stars for better performance

  // Create stars
  for (let i = 0; i < maxStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    container.appendChild(star);
    stars.push(star);
  }

  // Move stars
  function moveStars() {
    stars.forEach((star) => {
      const x = Math.random() * 2 - 1; // Random value between -1 and 1 (slower movement)
      const y = Math.random() * 2 - 1; // Random value between -1 and 1 (slower movement)
      star.style.transform = `translate(${x}px, ${y}px)`;
    });
    requestAnimationFrame(moveStars);
  }
  moveStars();
});
