
// Header Scroll
var header = document.querySelector('.header');

function onScroll(e) {

    // if( window.scrollY >= 100) {
    //     header.classList.add('collapse');
    // }else {
    //     header.classList.remove('collapse');     
    // }
       window.scrollY > 100 ? header.classList.add('collapse') : header.classList.remove('collapse') ;
} 
document.addEventListener('scroll', onScroll);

