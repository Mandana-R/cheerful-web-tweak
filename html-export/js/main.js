// Smart Expedite - Main JavaScript

// Disable browser scroll restoration - we handle it ourselves
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Immediately scroll to top (before DOMContentLoaded)
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', function() {
  // Force scroll to top again after DOM is ready
  window.scrollTo(0, 0);
  
  // And once more after a tiny delay to override any browser behavior
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 0);

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
  
  // Hero Quote Form (passes data to shippers page)
  initHeroQuoteForm();
  
  // Shippers page auto-fill from URL params
  initShippersAutoFill();
  
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

// Equipment Slider - Split Screen
function initEquipmentSlider() {
  // New split-screen slider
  if (!document.querySelector('.slider-split-container')) return;
  
  window._sliderData = [
    { title: 'Cargo Van — Low Roof', image: 'assets/Cargo_van.jpg', category: 'Van', dimensions: 'Cargo floor length 126.0 in (~ 2.5 standard pallets)', payload: '~2,600 lbs total payload' },
    { title: 'Cargo Van — High Roof', image: 'assets/Ford Cargo van.jpg', category: 'Van', dimensions: 'Cargo floor length 144.0 in (3 standard pallets)', payload: '~4,000 lbs total payload' },
    { title: 'Extended-size Sprinter Vans', image: 'assets/Full size Van.jpg', category: 'Van', dimensions: 'Cargo floor length 170.0 in (4 standard pallets)', payload: '~4,500 lbs payload' },
    { title: 'Straight Truck — Small (12–16 ft)', image: 'assets/16_footer.jpg', category: 'Straight Truck', dimensions: '6-8 standard pallets', payload: '~5,000 lbs payload' },
    { title: 'Straight Truck — Medium (17–20 ft)', image: 'assets/Inside the Dock.jpg', category: 'Straight Truck', dimensions: '8–10 standard pallets', payload: '~7,000 lbs payload' },
    { title: 'Straight Truck — Large (20–26 ft)', image: 'assets/26 on the road.jpg', category: 'Straight Truck', dimensions: '10–14 standard pallets', payload: 'Up to ~10,000 lbs payload' }
  ];
  window._sliderIndex = 0;
  window._sliderPaused = false;
  
  function updateSlider(index) {
    var d = window._sliderData[index];
    var img = document.getElementById('slider-split-img');
    img.style.opacity = '0';
    setTimeout(function() {
      img.src = d.image;
      img.alt = d.title;
      img.onload = function() { img.style.opacity = '1'; };
    }, 200);
    document.getElementById('slider-split-title').textContent = d.title;
    document.getElementById('slider-split-category').textContent = d.category;
    document.getElementById('slider-split-dimensions').textContent = d.dimensions;
    document.getElementById('slider-split-payload').textContent = d.payload;
    document.getElementById('slider-split-current').textContent = (index + 1);
    var bars = document.querySelectorAll('.slider-split-bar');
    bars.forEach(function(b, i) { b.classList.toggle('active', i === index); });
    window._sliderIndex = index;
  }
  
  window.sliderNext = function() { updateSlider((window._sliderIndex + 1) % 6); };
  window.sliderPrev = function() { updateSlider((window._sliderIndex - 1 + 6) % 6); };
  window.sliderGo = function(i) { updateSlider(i); };
  
  var container = document.querySelector('.slider-split-container');
  container.addEventListener('mouseenter', function() { window._sliderPaused = true; });
  container.addEventListener('mouseleave', function() { window._sliderPaused = false; });
  
  setInterval(function() {
    if (!window._sliderPaused) window.sliderNext();
  }, 4000);
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

// Hero Quote Form - navigates to shippers page with form data
function initHeroQuoteForm() {
  const form = document.getElementById('hero-quote-form');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const origin = document.getElementById('hero-origin').value;
    const destination = document.getElementById('hero-destination').value;
    const equipment = document.getElementById('hero-equipment').value;
    const urgency = document.getElementById('hero-urgency').value;
    
    const params = new URLSearchParams();
    if (origin) params.set('origin', origin);
    if (destination) params.set('destination', destination);
    params.set('equipment', equipment);
    params.set('urgency', urgency);
    
    window.location.href = 'shippers.html?' + params.toString() + '#rate-calculator';
  });
}

// Auto-fill shippers rate calculator from URL params
function initShippersAutoFill() {
  const params = new URLSearchParams(window.location.search);
  if (!params.has('origin') && !params.has('destination') && !params.has('equipment')) return;
  
  const equipmentMap = {
    'Cargo Van (Low Roof)': 'Cargo Van',
    'Cargo Van (High Roof)': 'Cargo Van',
    'Sprinter Van': 'Full-Size Sprinter',
    'Straight Truck (12-16 ft)': "16' Box Truck",
    'Straight Truck (17-20 ft)': "16' Box Truck",
    'Straight Truck (20-26 ft)': "26' Box Truck"
  };
  
  const urgencyMap = {
    'Same-Day': 'Same-Day Pickup',
    'Next-Day': 'Next-Day Pickup',
    'Scheduled': 'Scheduled (2+ days)'
  };
  
  // Find the rate calculator form inputs
  const rateSection = document.getElementById('rate-calculator');
  if (!rateSection) return;
  
  const inputs = rateSection.querySelectorAll('input[type="text"]');
  const selects = rateSection.querySelectorAll('select');
  
  // Fill origin (first text input)
  if (params.get('origin') && inputs[0]) {
    inputs[0].value = params.get('origin');
  }
  // Fill destination (second text input)
  if (params.get('destination') && inputs[1]) {
    inputs[1].value = params.get('destination');
  }
  // Fill vehicle type (first select)
  if (params.get('equipment') && selects[0]) {
    const mapped = equipmentMap[params.get('equipment')] || params.get('equipment');
    for (let opt of selects[0].options) {
      if (opt.text === mapped) { selects[0].value = opt.value || opt.text; break; }
    }
  }
  // Fill urgency (second select)
  if (params.get('urgency') && selects[1]) {
    const mapped = urgencyMap[params.get('urgency')] || params.get('urgency');
    for (let opt of selects[1].options) {
      if (opt.text === mapped) { selects[1].value = opt.value || opt.text; break; }
    }
  }
  
  // Scroll to rate calculator
  if (window.location.hash === '#rate-calculator') {
    setTimeout(function() {
      rateSection.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }
}
