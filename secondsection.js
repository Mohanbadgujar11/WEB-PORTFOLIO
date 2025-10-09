
  // Animated typing effect for About Me section
  document.addEventListener('DOMContentLoaded', function () {
    if (window.Typed) {
      new Typed('#aboutme', {
        strings: [
          'Developer <span style="color:#ff014f">|</span> Coder <span style="color:#ff014f">|</span> Designer',
          'Freelancer <span style="color:#ff014f">|</span> Tech Enthusiast <span style="color:#ff014f">|</span> Problem Solver'
        ],
        typeSpeed: 35,
        backSpeed: 18,
        backDelay: 1200,
        startDelay: 400,
        loop: true,
        // showCursor: true,
        // cursorChar: '|',
        smartBackspace: true
      });
    }
  });


