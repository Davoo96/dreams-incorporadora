export default function initHoverCard() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.addEventListener('mouseover', onMouseOver);
  });
  
  function onMouseOver() {
    this.classList.add('card-active');
  
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }
  
  function onMouseLeave() {
    this.classList.remove('card-active');
  }
}