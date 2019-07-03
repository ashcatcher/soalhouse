$(document).ready(function() {
  $('#menu-toggle').click(function(event) {
    event.preventDefault();
    $('#wrapper').toggleClass('toggled');
    $('.skylift').toggleClass('toggled');
  });

  $(window).resize(function(event) {
    if($(window).width()<=768){
      $('#wrapper').removeClass('toggled');
    }else{
      $('#wrapper').addClass('toggled');
    }
  });
});
