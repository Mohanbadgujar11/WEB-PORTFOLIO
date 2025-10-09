
// Repeated scroll entrance animation for all main sections
document.addEventListener('DOMContentLoaded', function () {
	const animatedSections = document.querySelectorAll('.animate-on-scroll');

	function checkVisibility() {
		animatedSections.forEach(section => {
			const rect = section.getBoundingClientRect();
			if (rect.top < window.innerHeight - 50 && rect.bottom > 50) {
				section.classList.add('visible');
			} else {
				section.classList.remove('visible');
			}
		});
	}

	window.addEventListener('scroll', checkVisibility);
	window.addEventListener('DOMContentLoaded', checkVisibility);
	checkVisibility();
});
