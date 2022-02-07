export default function initScrollAnimation() {
  const scrollItems = document.querySelectorAll('[data-scroll="animation"]');

  if (scrollItems.length) {
    const windowScroll = window.innerHeight * 0.9;
  
    function scrollAnimation() {
      scrollItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        const isItemVisible = (itemTop - windowScroll) < 0;
        if (isItemVisible) {
          const direction = item.dataset.animate;
          item.classList.add('active', direction);
        } else if (item.classList.contains('active')) {
          item.classList.remove('active');
        }
      });
    }
  
    scrollAnimation();
  
    window.addEventListener('scroll', scrollAnimation);
  }
}