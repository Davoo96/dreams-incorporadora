export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  
  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('active');
    tabMenu[0].classList.add('active');
  
    function activeTab(index) {
      tabContent.forEach((card) => {
        card.classList.remove('active');
      });
      const direction = tabContent[index].dataset.animate;
      tabContent[index].classList.add('active', direction);
    }
  
    function activeMenu(index) {
      tabMenu.forEach((tab) => {
        tab.classList.remove('active');
      });
      tabMenu[index].classList.add('active');
    }
  
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
        activeMenu(index);
      })
    })
  }
}