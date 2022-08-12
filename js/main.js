'use strict';
(function () {
  var menu = document.querySelector('.nav');
  var toggle = menu.querySelector('.nav__toggle');


  toggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu.classList.toggle('nav--close');
  });
})();
