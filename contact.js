// Contact form animation (optional: fake submit)
        document.addEventListener('DOMContentLoaded', function () {
            const form = document.querySelector('.contact-form');
            if (form) {
                form.addEventListener('submit', function (e) {
                    e.preventDefault();
                    form.reset();
                    form.querySelector('button').textContent = 'Message Sent!';
                    setTimeout(() => {
                        form.querySelector('button').textContent = 'Send Message';
                    }, 1800);
                });
            }
        });