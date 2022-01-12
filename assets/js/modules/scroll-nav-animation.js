export default function initScrollNavAnimation() {
  const headerNav = document.querySelector('[data-nav="dark"]')
  const sectionOne = document.querySelector('.header-bg');
  
  const sectionOneOptions = {
    rootMargin: "-300px 0px 0px 0px"
  };
  
  const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        headerNav.classList.add('active');
      } else {
        headerNav.classList.remove('active');
      }
    })
  }, sectionOneOptions);
  
  sectionOneObserver.observe(sectionOne);
}

