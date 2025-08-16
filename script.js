// Page navigation functionality
document.addEventListener('DOMContentLoaded', function () {
    // Hide all pages except home
    document.querySelectorAll('.page-content').forEach(page => {
        if (page.id !== 'home') {
            page.style.display = 'none';
        }
    });

    // Navigation click handling
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Get target page
            const targetPage = this.getAttribute('data-page');

            // Hide all pages
            document.querySelectorAll('.page-content').forEach(page => {
                page.style.display = 'none';
            });

            // Show target page
            document.getElementById(targetPage).style.display = 'block';

            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');

            // Scroll to top
            window.scrollTo(0, 0);
        });
    });

    // Subscribe button functionality
    document.querySelector('.subscribe-btn').addEventListener('click', function () {
        const email = this.previousElementSibling.value;
        if (email && validateEmail(email)) {
            alert('Thank you for subscribing to our newsletter!');
            this.previousElementSibling.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });

    // Contact form submission
    document.querySelector('.contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });

    // Like button functionality
    document.querySelectorAll('.btn-outline-primary').forEach(button => {
        if (button.textContent.includes('Like')) {
            button.addEventListener('click', function () {
                this.innerHTML = '<i class="bi bi-hand-thumbs-up-fill me-1"></i> Liked';
                this.classList.remove('btn-outline-primary');
                this.classList.add('btn-primary');
            });
        }
    });

    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});