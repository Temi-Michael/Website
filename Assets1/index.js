var lastScrollTop = 0;
window.addEventListener('scroll', function() {
  var container = document.querySelector('.container');
  var containerTop = container.getBoundingClientRect().top;
  var st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    container.classList.remove('scroll-up');
  } else {
    if (containerTop < 0) {
      container.classList.add('scroll-up');
    }
  }

  lastScrollTop = st <= 0 ? 0 : st;
});
