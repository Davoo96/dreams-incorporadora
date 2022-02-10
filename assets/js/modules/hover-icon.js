export default function initHoverIcon() {
  const iconInstagram = document.getElementById('instagram');
  const iconLinkedin = document.getElementById('linkedin');

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
    
    iconLinkedin.src = 'assets/images/icons/icon-linkedin-orange.svg';
  
    onMouseLeaveLn.element = iconLinkedin;
    iconLinkedin.addEventListener('mouseleave', onMouseLeaveLn);
  }
  
  function onMouseLeaveLn() {
    iconLinkedin.src = 'assets/images/icons/icon-linkedin.svg';
  }
}

export function initHoverLinkedin() {
  
}