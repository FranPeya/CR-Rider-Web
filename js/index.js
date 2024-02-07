
// Activa el deslizamiento táctil
$(document).ready(function(){
  $("#tarjetasCarousel").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') {
        $(this).carousel('next');
      }
      if (direction == 'right') {
        $(this).carousel('prev');
      }
    },
    allowPageScroll: "vertical"
  });
});


