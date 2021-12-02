let list = document.querySelector('.advantage__list');
let msnry = new Masonry( list, {
  // Настройки
  columnWidth: 319,
  itemSelector: '.advantage__item',
  horizontalOrder: true,
  gutter: 26
});


//smooth transition on anchors
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
}