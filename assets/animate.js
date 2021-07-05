const animateEls = document.querySelectorAll('.animate');
function callback(entries) {
   const target = entries[0].target;
   target.classList.add('fade-in-bottom');
}
const options = {
    threshold: 0.5,
  }; 
  
let observer = new IntersectionObserver(callback, options);
animateEls.forEach( el => {
   observer.observe(el); 
});