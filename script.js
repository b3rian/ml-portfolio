// Optional: add interactivity later
window.addEventListener('load', () => {
    const textBox = document.querySelector('.text-box');
    const profileImg = document.querySelector('.profile-image');
  
    // Trigger animations after a slight delay
    setTimeout(() => {
      textBox.classList.add('animate-fade-slide');
      profileImg.classList.add('animate-pop');
    }, 100);
  });
  