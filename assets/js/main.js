(function() {
  "use strict";

  /**
   * Reliable mobile drawer navigation
   */
  const headerToggleBtn = document.querySelector('.header-toggle');
  const header = document.querySelector('#header');
  let mobileNavBackdrop = document.querySelector('.mobile-nav-backdrop');
  if (!mobileNavBackdrop) {
    mobileNavBackdrop = document.createElement('div');
    mobileNavBackdrop.className = 'mobile-nav-backdrop';
    mobileNavBackdrop.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(mobileNavBackdrop, document.body.firstChild);
  }

  function setMobileNav(open) {
    const shouldOpen = Boolean(open) && window.innerWidth < 1200;
    header.classList.toggle('header-show', shouldOpen);
    document.body.classList.toggle('mobile-nav-open', shouldOpen);
    headerToggleBtn.classList.toggle('bi-list', !shouldOpen);
    headerToggleBtn.classList.toggle('bi-x', shouldOpen);
    headerToggleBtn.setAttribute('aria-expanded', String(shouldOpen));
    headerToggleBtn.setAttribute('aria-label', shouldOpen ? 'Close navigation' : 'Open navigation');
  }
  window.closeMobileNav = () => setMobileNav(false);

  headerToggleBtn.setAttribute('role', 'button');
  headerToggleBtn.setAttribute('tabindex', '0');
  headerToggleBtn.setAttribute('aria-controls', 'header');
  headerToggleBtn.setAttribute('aria-expanded', 'false');
  headerToggleBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    setMobileNav(!document.body.classList.contains('mobile-nav-open'));
  });
  headerToggleBtn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setMobileNav(!document.body.classList.contains('mobile-nav-open'));
    }
  });

  mobileNavBackdrop.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    setMobileNav(false);
  });
  mobileNavBackdrop.addEventListener('click', () => setMobileNav(false));

  // Capture phase makes outside-click closing independent of RTL, overlays,
  // AOS, Bootstrap, and child handlers.
  document.addEventListener('pointerdown', (event) => {
    if (window.innerWidth >= 1200 || !document.body.classList.contains('mobile-nav-open')) return;
    const path = event.composedPath ? event.composedPath() : [];
    if (!path.includes(header) && !path.includes(headerToggleBtn)) setMobileNav(false);
  }, true);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMobileNav(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200) setMobileNav(false);
  });
  window.addEventListener('portfolio:language', () => setMobileNav(false));

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init/rebuild typed.js. The instance must be recreated whenever
   * the site language changes, otherwise Typed.js keeps its old strings.
   */
  const selectTyped = document.querySelector('.typed');
  let typedInstance = null;

  function initTyped(items = null) {
    if (!selectTyped || typeof Typed === 'undefined') return;

    const strings = Array.isArray(items)
      ? items
      : (selectTyped.getAttribute('data-typed-items') || '')
          .split(',')
          .map(item => item.trim())
          .filter(Boolean);

    if (!strings.length) return;

    if (typedInstance) {
      typedInstance.destroy();
      typedInstance = null;
    }

    // Typed.js may leave generated text/cursor behind after destroy().
    selectTyped.textContent = '';
    document.querySelectorAll('.typed-cursor').forEach(cursor => cursor.remove());

    typedInstance = new Typed(selectTyped, {
      strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  initTyped();

  window.addEventListener('portfolio:language', (event) => {
    initTyped(event.detail?.typedItems || null);
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init/rebuild Swiper sliders.
   * Rebuilding is required when the document changes between RTL and LTR;
   * updating an existing looped Swiper can leave its translated track off-screen.
   */
  const swiperInstances = new Map();

  function readSwiperConfig(swiperElement) {
    const configElement = swiperElement.querySelector('.swiper-config');
    if (!configElement) return null;

    try {
      return JSON.parse(configElement.textContent.trim());
    } catch (error) {
      console.error('Invalid Swiper configuration:', error);
      return null;
    }
  }

  function createSwiper(swiperElement) {
    const config = readSwiperConfig(swiperElement);
    if (!config || typeof Swiper === 'undefined') return null;

    // Keep pagination scoped to this slider rather than the whole document.
    if (config.pagination) {
      config.pagination = {
        ...config.pagination,
        el: swiperElement.querySelector('.swiper-pagination')
      };
    }

    const instance = new Swiper(swiperElement, config);
    swiperInstances.set(swiperElement, instance);
    return instance;
  }

  function destroySwiper(swiperElement) {
    const instance = swiperInstances.get(swiperElement) || swiperElement.swiper;
    if (instance && !instance.destroyed) {
      instance.destroy(true, true);
    }

    swiperInstances.delete(swiperElement);

    // Remove stale inline geometry left by Swiper/loop clones.
    swiperElement.removeAttribute('dir');
    swiperElement.style.removeProperty('overflow');
    const wrapper = swiperElement.querySelector('.swiper-wrapper');
    if (wrapper) wrapper.removeAttribute('style');

    swiperElement.querySelectorAll('.swiper-slide').forEach((slide) => {
      slide.removeAttribute('style');
    });
  }

  function initSwiper() {
    document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
      if (!swiperInstances.has(swiperElement) && !swiperElement.swiper) {
        createSwiper(swiperElement);
      }
    });
  }

  function rebuildSwipers() {
    document.querySelectorAll('.init-swiper').forEach(destroySwiper);

    // Wait until html[dir] and translated content have completed layout.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.querySelectorAll('.init-swiper').forEach(createSwiper);
      });
    });
  }

  window.addEventListener('load', initSwiper);
  window.addEventListener('portfolio:language', rebuildSwipers);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();