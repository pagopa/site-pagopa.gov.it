const animateEls = document.querySelectorAll('.animate');
function callback(entries) {
   const target = entries[0].target;
   target.classList.add('fade-in-bottom');
}

  
let observer = new IntersectionObserver(callback);
animateEls.forEach( el => {
   observer.observe(el); 
});