// ==========================================================================
// CONEJO VALLEY FAMILY COUNSELING - INTERACTIVE SCRIPTS
// ==========================================================================

function initCounselingInteractions() {
  // 1. Sticky Header Shadow on Scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileToggle.classList.toggle('active');
      mobileDrawer.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // 3. Mobile Accordion Dropdowns
  const mobileAccordionTriggers = document.querySelectorAll('.mobile-accordion-trigger');
  mobileAccordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = trigger.closest('.mobile-nav-item');
      const subnav = parent.querySelector('.mobile-subnav');
      if (subnav) {
        subnav.classList.toggle('active');
        const arrow = trigger.querySelector('.nav-arrow');
        if (arrow) {
          arrow.style.transform = subnav.classList.contains('active') 
            ? 'rotate(225deg) translate(-2px, -2px)' 
            : 'rotate(45deg) translate(-2px, -2px)';
        }
      }
    });
  });

  // 4. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          if (mobileDrawer && mobileDrawer.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            mobileDrawer.classList.remove('active');
            document.body.style.overflow = '';
          }
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCounselingInteractions, { once: true });
} else {
  initCounselingInteractions();
}
