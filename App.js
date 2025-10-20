// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation based on current page
    setActiveNavigation();
    
    // Initialize page-specific functionality
    initializePage();
});

function setActiveNavigation() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('contact.html')) return 'contact';
    if (path.includes('about.html')) return 'about';
    return 'profile'; // Default to profile
}

function initializePage() {
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'profile':
            initializeProfilePage();
            break;
        case 'contact':
            initializeContactPage();
            break;
        case 'about':
            // About page doesn't need special initialization
            break;
    }
}

function initializeProfilePage() {
    // Time functionality for profile page
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    if (timeElement) {
        const updateTime = () => {
            const currentTimeMillis = Date.now();
            timeElement.textContent = currentTimeMillis + ' ms';
        };
        updateTime();
        setInterval(updateTime, 100);
    }
}

function initializeContactPage() {
    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        const successMessage = contactForm.querySelector('.success-message');
        
        // Real-time validation
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearError);
        });
        
        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField.call(input)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                successMessage.classList.add('show');
                contactForm.reset();
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 5000);
            }
        });
    }
}

function validateField() {
    const field = this;
    const errorElement = document.getElementById(field.id + '-error');
    
    // Clear previous error
    field.classList.remove('error');
    if (errorElement) {
        errorElement.classList.remove('show');
    }
    
    // Check required fields
    if (field.value.trim() === '') {
        showError(field, errorElement, 'This field is required');
        return false;
    }
    
    // Email validation
    if (field.type === 'email' && !isValidEmail(field.value)) {
        showError(field, errorElement, 'Please enter a valid email address');
        return false;
    }
    
    // Message length validation
    if (field.id === 'message' && field.value.trim().length < 10) {
        showError(field, errorElement, 'Message must be at least 10 characters long');
        return false;
    }
    
    return true;
}

function showError(field, errorElement, message) {
    field.classList.add('error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearError() {
    this.classList.remove('error');
    const errorElement = document.getElementById(this.id + '-error');
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
