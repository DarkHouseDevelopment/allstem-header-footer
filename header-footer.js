document.addEventListener('DOMContentLoaded', () => {
  init.ready();
});

window.addEventListener('resize', () => {
  init.resize();
});

window.addEventListener('load', () => {
  init.load();
});

const init = {
  ready() {
    this.stickyHeaderShowOnScrollUp();
  },

  load() {
    
  },

  resize() {

  },

  stickyHeaderShowOnScrollUp() {
    const body = document.body;
    const header = document.querySelector('header.site-header');
    let lastScrollTop = 0;
  
    if (body.classList.contains('header-sticky') || body.classList.contains('header-sticky-scroll')) {
      const headerHeight = header.offsetHeight;
  
      // Check on page load
      if (window.scrollY > headerHeight) {
        header.classList.add('is-scrolling');
      }
  
      window.addEventListener('scroll', () => {
        const st = window.scrollY;
        if (st > headerHeight) {
          header.classList.add('is-scrolling');
        } else {
          header.classList.remove('is-scrolling', 'is-scrolling-up');
        }
        if (st > lastScrollTop) {
          header.classList.remove('is-scrolling-up');
        } else if (st <= 0) {
          header.classList.remove('is-scrolling', 'is-scrolling-up');
        } else {
          header.classList.add('is-scrolling-up');
        }
        lastScrollTop = st;
      });
    }
  }

};
