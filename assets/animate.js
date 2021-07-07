const animateEls = document.querySelectorAll('.animate');
function callback(entries) {
   const target = entries[0].target;
   target.classList.add('fade-in-bottom');
}

if (!('IntersectionObserver' in window) ||
    !('IntersectionObserverEntry' in window) ||
    !('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
   animateEls.forEach( el => {
      el.classList.add('fade-in-bottom');
   });
} else {
   let observer = new IntersectionObserver(callback);
   animateEls.forEach( el => {
      observer.observe(el); 
   });

}
