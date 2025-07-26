// Add animations and typing effect after page loads
window.addEventListener('load', () => {
    const textBox = document.querySelector('.text-box');
    const profileImg = document.querySelector('.profile-image');
  
    // Trigger content animations
    setTimeout(() => {
      textBox.classList.add('animate-fade-slide');
      profileImg.classList.add('animate-pop');
    }, 100);
  
    // Typing effect setup
    const typedText = document.querySelector('.typed-text');
    const cursor = document.querySelector('.cursor');
  
    const fullText = "Hello, I'm Brian Liboso";
    let index = 0;
  
    function typeCharacter() {
      if (index < fullText.length) {
        typedText.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeCharacter, 100);
      } else {
        cursor.style.display = 'none'; // Hide blinking cursor after typing
      }
    }
  
    setTimeout(typeCharacter, 600); // Start typing after animations
  });
  