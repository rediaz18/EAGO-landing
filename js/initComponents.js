$(document).ready(function () {

  /* M.AutoInit(); */

  /* Dropdown Init */
  $(".dropdown-trigger").dropdown({
    coverTrigger: false
  });
  $(".dropdown-trigger-nested").dropdown({
    hover: true,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    gutter: ($('.dropdown-content').width() * 3) / 2.5 + 5, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
  });

  /* Sidenav Init */
  $('.sidenav').sidenav();


  /* Carousel Init */
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    duration: 300,
    indicators: true
  });

  autoplay()
  function autoplay() {
    $('.carousel.carousel-slider').carousel('next');
    setTimeout(autoplay, 4500);
  }

  $('.parallax').parallax();

});

