export default function initHoverIcon() {
  const iconInstagram = document.getElementById('instagram');
  const iconLinkedin = document.getElementById('whatsapp');

  iconInstagram.addEventListener('mouseover', onMouseOverIg);
  iconLinkedin.addEventListener('mouseover', onMouseOverLn);

  function onMouseOverIg() {
    ;
    iconInstagram.src = 'assets/images/icons/icon-ig-orange.svg';
  
    onMouseLeaveIg.element = iconInstagram;
    iconInstagram.addEventListener('mouseleave', onMouseLeaveIg);
  }
  
  function onMouseLeaveIg() {
    iconInstagram.src = 'assets/images/icons/icon-ig.svg';
  }

  function onMouseOverLn() {
    
    iconLinkedin.src = 'assets/images/icons/ico-whatsapp-orange.svg';
  
    onMouseLeaveLn.element = iconLinkedin;
    iconLinkedin.addEventListener('mouseleave', onMouseLeaveLn);
  }
  
  function onMouseLeaveLn() {
    iconLinkedin.src = 'assets/images/icons/ico-whatsapp.svg';
  }
}

export function initHoverLinkedin() {
  
}