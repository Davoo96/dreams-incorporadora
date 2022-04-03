export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const menuListItems = document.querySelectorAll('[data-menu="list"] li');
  const eventos = ['click'];

  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';
  
    if(!element.hasAttribute(outside)) {
      events.forEach(userEvent => {
        setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
      })
      element.setAttribute(outside, '');
    }
  
    function handleOutsideClick(event) {
      if(!element.contains(event.target)){
        element.removeAttribute(outside);
        events.forEach(userEvent => {
          html.removeEventListener(userEvent, handleOutsideClick);
        })
        callback();
      }
    }
  }

  if(menuButton) {
    function closeMenu() {
      menuButton.classList.remove('active');
      menuList.classList.remove('active');
    }
    function openMenu() {
      menuList.classList.add('active');
      menuButton.classList.add('active');
      outsideClick(menuList, eventos, () => {
        closeMenu();
      })
    }
    menuListItems.forEach((item) => {
      item.addEventListener('click', closeMenu);
    })
    eventos.forEach(() => {
      menuButton.addEventListener('click', openMenu);
    })
  }
}