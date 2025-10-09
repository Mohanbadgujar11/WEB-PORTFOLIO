// Animate project cards on scroll (new)
        function animateProjectsOnScroll() {
            const cards = document.querySelectorAll('.project-card');
            const trigger = window.innerHeight * 0.92;
            cards.forEach((card, i) => {
                const rect = card.getBoundingClientRect();
                if (rect.top < trigger) {
                    setTimeout(() => card.classList.add('visible'), i * 120);
                }
            });
        }
        window.addEventListener('scroll', animateProjectsOnScroll);