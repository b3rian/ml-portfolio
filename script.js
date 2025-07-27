window.addEventListener('load', () => {
    const textBox = document.querySelector('.text-box');
    const profileImg = document.querySelector('.profile-image');
  
    // Trigger content animations
    setTimeout(() => {
      textBox.classList.add('animate-fade-slide');
      profileImg.classList.add('animate-pop');
    }, 100);
  
    // Typing effect
    const typedText = document.querySelector('.typed-text');
    const cursor = document.querySelector('.cursor');
  
    // Full text with HTML for styling
    const fullTextRaw = "Hello, I'm <span class='name'>Brian Liboso</span>";
    const plainText = "Hello, I'm Brian Liboso";
  
    let index = 0;
  
    function typeCharacter() {
      if (index < plainText.length) {
        const currentChar = plainText.charAt(index);
        typedText.innerHTML = fullTextRaw.slice(0, index)
          .replace('Brian Liboso', "<span class='name'>Brian Liboso</span>");
        index++;
        setTimeout(typeCharacter, 100);
      } else {
        typedText.innerHTML = fullTextRaw;
        cursor.style.display = 'none'; // hide cursor after typing
      }
    }
  
    setTimeout(typeCharacter, 600); // delay before typing
  });  