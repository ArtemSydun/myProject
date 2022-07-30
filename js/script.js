$(document).ready(function() {
  $('.checkbox').click(function(event) {
    $('.checkbox').toggleClass('active');
    $('.open-burger').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

