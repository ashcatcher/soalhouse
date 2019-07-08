$(document).ready(function() {
  $('#menu-toggle').click(function(event) {
    event.preventDefault();
    $('#wrapper').toggleClass('toggled');
    $('.skylift').toggleClass('toggled');
    $('.radial-whack').toggleClass('toggled');
  });

  $(window).resize(function(event) {
    if($(window).width()<=768){
      $('#wrapper').removeClass('toggled');
      $('.skylift').removeClass('toggled');
      $('.whack').addClass('toggled');
    }else{
      $('#wrapper').addClass('toggled');
      $('.whack').removeClass('toggled');
    }
  });
});