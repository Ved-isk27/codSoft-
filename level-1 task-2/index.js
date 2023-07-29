
function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
      behavior: 'smooth',
      top: element.offsetTop,
    });
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav li a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default link behavior
  
        const target = event.target.getAttribute('href');
        smoothScroll(target);
      });
    });
  });
  