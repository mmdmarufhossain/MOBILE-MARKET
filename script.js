// Smooth scroll for "Shop Now" button
document.querySelector('.buy-now')?.addEventListener('click', function () {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// Intersection Observer for animations
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach(section => {
  observer.observe(section);
});
// Smooth scroll already exists, but you can enhance user experience:
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add a popup alert when user clicks "Order Now"
document.querySelectorAll('.product a').forEach(button => {
  button.addEventListener('click', () => {
    alert('Redirecting to WhatsApp order...');
  });
});