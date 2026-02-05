// Smart Expedite - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Scroll to top on page load (especially when coming from menu links)
  if (sessionStorage.getItem('scrollToTop') === 'true') {
    sessionStorage.removeItem('scrollToTop');
    window.scrollTo(0, 0);
  } else {
    // Also scroll to top on initial load
    window.scrollTo(0, 0);
  }

  // Mobile Menu Toggle
  initMobileMenu();
  
  // Scroll Animations
  initScrollAnimations();
  
  // Equipment Slider
  initEquipmentSlider();
  
  // FAQ Accordion
  initFAQAccordion();
  
  // Form Handling
  initFormHandling();
  
  // Active Navigation
  setActiveNavigation();
});

// Mobile Menu
function initMobileMenu() {
  const menuBtn = document.querySelector('.header-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIcon = menuBtn?.querySelector('svg');
  
  if (!menuBtn || !mobileMenu) return;
  
  menuBtn.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open');
    
    // Update icon
    if (isOpen) {
      menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
    } else {
      menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
    }
  });
  
  // Close menu on link click and scroll to top
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('open');
      menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
    });
  });
  
  // Add scroll to top for all navigation links (header and mobile)
  document.querySelectorAll('.header-nav a, .mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
      // Only scroll to top for page navigation links (not anchor links)
      const href = this.getAttribute('href');
      if (href && !href.startsWith('#') && !href.includes('#')) {
        sessionStorage.setItem('scrollToTop', 'true');
      }
    });
  });
}

// Scroll Animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.scroll-animate');
  
  if (!animatedElements.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add delay if specified
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, parseInt(delay));
        
        // Unobserve after animation
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px'
  });
  
  animatedElements.forEach(el => observer.observe(el));
}

// Equipment Slider
function initEquipmentSlider() {
  const slider = document.querySelector('.slider-container');
  if (!slider) return;
  
  const slides = slider.querySelectorAll('.slider-slide');
  const dots = slider.querySelectorAll('.slider-dot');
  const prevBtn = slider.querySelector('.slider-arrow.prev');
  const nextBtn = slider.querySelector('.slider-arrow.next');
  
  if (!slides.length) return;
  
  let currentIndex = 0;
  let autoSlideInterval;
  let isPaused = false;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
      slide.style.opacity = i === index ? '1' : '0';
    });
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    
    currentIndex = index;
  }
  
  function nextSlide() {
    const next = (currentIndex + 1) % slides.length;
    showSlide(next);
  }
  
  function prevSlide() {
    const prev = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prev);
  }
  
  function startAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      if (!isPaused) nextSlide();
    }, 4000);
  }
  
  // Event listeners
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoSlide(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoSlide(); });
  
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { showSlide(i); startAutoSlide(); });
  });
  
  // Pause on hover
  slider.addEventListener('mouseenter', () => { isPaused = true; });
  slider.addEventListener('mouseleave', () => { isPaused = false; });
  
  // Initialize
  showSlide(0);
  startAutoSlide();
}

// FAQ Accordion
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question?.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      
      // Close all items
      faqItems.forEach(faq => faq.classList.remove('open'));
      
      // Open clicked item if it wasn't open
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
}

// Form Handling
function initFormHandling() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Log form data (replace with actual submission logic)
      console.log('Form submitted:', data);
      
      // Show success message
      const successMsg = document.createElement('div');
      successMsg.className = 'form-success';
      successMsg.style.cssText = `
        background: hsla(160, 84%, 39%, 0.1);
        border: 1px solid hsla(160, 84%, 39%, 0.3);
        border-radius: 0.5rem;
        padding: 1rem;
        margin-top: 1rem;
        color: hsl(160, 84%, 52%);
        font-weight: 600;
        text-align: center;
      `;
      successMsg.textContent = 'Thank you! Your submission has been received.';
      
      // Remove existing success messages
      form.querySelectorAll('.form-success').forEach(msg => msg.remove());
      
      form.appendChild(successMsg);
      
      // Reset form
      form.reset();
      
      // Remove message after 5 seconds
      setTimeout(() => successMsg.remove(), 5000);
    });
  });
}

// Active Navigation
function setActiveNavigation() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.header-nav a, .mobile-menu a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
