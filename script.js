// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initSmoothScrolling();
    initFAQAccordion();
    initForms();
    initScrollAnimations();
    initModal();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// FAQ Accordion functionality
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Form handling
function initForms() {
    // Booking form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleBookingForm(this);
        });
    }

    // Hire purchase form
    const hirePurchaseForm = document.getElementById('hire-purchase-form');
    if (hirePurchaseForm) {
        hirePurchaseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleHirePurchaseForm(this);
        });
    }

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm(this);
        });
    }
}

// Handle booking form submission
function handleBookingForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.phone || !data.service || !data.pickup || !data.dropoff || !data.date || !data.time) {
        showModal('Please fill in all required fields.', 'error');
        return;
    }

    // Simulate form submission
    showModal('Your booking request has been submitted successfully! We will contact you within 30 minutes to confirm your booking.', 'success');
    
    // Reset form
    form.reset();
}

// Handle hire purchase form submission
function handleHirePurchaseForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.vehicle) {
        showModal('Please fill in all required fields.', 'error');
        return;
    }

    // Simulate form submission
    showModal('Your hire purchase application has been submitted successfully! Our team will review your application and contact you within 24 hours.', 'success');
    
    // Reset form
    form.reset();
}

// Handle contact form submission
function handleContactForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        showModal('Please fill in all required fields.', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showModal('Please enter a valid email address.', 'error');
        return;
    }

    // Simulate form submission
    showModal('Your message has been sent successfully! We will get back to you within 24 hours.', 'success');
    
    // Reset form
    form.reset();
}

// Request quote functionality
// function requestQuote(service) {
    // showModal(`Thank you for your interest in our ${service} service! Our team will contact you within 2 hours with a detailed quote.`, 'success');
// }

// Modal functionality
function initModal() {
    const modal = document.getElementById('success-modal');
    const closeBtn = modal.querySelector('.close');
    
    // Close modal when clicking the close button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Show modal with custom message
function showModal(message, type = 'success') {
    const modal = document.getElementById('success-modal');
    const modalMessage = document.getElementById('modal-message');
    const modalIcon = modal.querySelector('i');
    const modalTitle = modal.querySelector('h3');
    
    // Set message
    modalMessage.textContent = message;
    
    // Set icon and title based on type
    if (type === 'error') {
        modalIcon.className = 'fas fa-exclamation-circle';
        modalIcon.style.color = '#dc2626';
        modalTitle.textContent = 'Error!';
    } else {
        modalIcon.className = 'fas fa-check-circle';
        modalIcon.style.color = '#059669';
        modalTitle.textContent = 'Success!';
    }
    
    // Show modal
    modal.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        modal.style.display = 'none';
    }, 5000);
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature, .service-item, .vehicle-item, .contact-item');
    animateElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
}

// Utility function to format phone numbers
function formatPhoneNumber(phone) {
    // Remove all non-numeric characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Format Nigerian phone number
    if (cleaned.length === 11 && cleaned.startsWith('0')) {
        return '+234' + cleaned.substring(1);
    } else if (cleaned.length === 10) {
        return '+234' + cleaned;
    } else if (cleaned.length === 14 && cleaned.startsWith('234')) {
        return '+' + cleaned;
    }
    
    return phone; // Return original if no pattern matches
}

// Utility function to validate Nigerian phone numbers
function validateNigerianPhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    
    // Nigerian phone number patterns
    const patterns = [
        /^0[789][01]\d{8}$/, // 080, 081, 090, 091, 070, 071
        /^\+234[789][01]\d{8}$/, // +234 followed by valid number
        /^234[789][01]\d{8}$/ // 234 followed by valid number
    ];
    
    return patterns.some(pattern => pattern.test(cleaned));
}

// Add phone number formatting to input fields
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Format as user types
            if (value.length > 0) {
                if (value.startsWith('0')) {
                    value = value.replace(/^0/, '+234');
                } else if (value.startsWith('234')) {
                    value = '+' + value;
                } else if (value.length === 10) {
                    value = '+234' + value;
                }
            }
            
            e.target.value = value;
        });
    });
});

// Add loading states to buttons
document.addEventListener('DOMContentLoaded', function() {
    const submitButtons = document.querySelectorAll('button[type="submit"]');
    
    submitButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Processing...';
            this.disabled = true;
            
            // Re-enable after 2 seconds (simulating form processing)
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
});

// Add hover effects for service items
document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add scroll to top functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #1e40af;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 16px rgba(30, 64, 175, 0.4)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(30, 64, 175, 0.3)';
    });
});

// Add form field validation indicators
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('input, select, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
});

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error styling
    field.classList.remove('error');
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required.';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        if (!validateNigerianPhone(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid Nigerian phone number.';
        }
    }
    
    // Add error styling if invalid
    if (!isValid) {
        field.classList.add('error');
        field.style.borderColor = '#dc2626';
        
        // Show error message
        let errorDiv = field.parentNode.querySelector('.error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.cssText = `
                color: #dc2626;
                font-size: 0.875rem;
                margin-top: 0.25rem;
            `;
            field.parentNode.appendChild(errorDiv);
        }
        errorDiv.textContent = errorMessage;
    } else {
        field.style.borderColor = '#059669';
        
        // Remove error message
        const errorDiv = field.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
}

// Add CSS for error styling
const errorStyles = document.createElement('style');
errorStyles.textContent = `
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #dc2626 !important;
        box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    }
    
    .form-group input:not(.error):valid,
    .form-group select:not(.error):valid,
    .form-group textarea:not(.error):valid {
        border-color: #059669;
    }
`;
document.head.appendChild(errorStyles); 