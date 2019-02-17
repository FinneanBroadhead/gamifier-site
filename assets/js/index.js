$(document).ready(function() {
  $('.overlay').css('opacity', '0');
  setTimeout(removeOverlay, 250);
});

function removeOverlay() {
  $('.overlay').css('visibility', 'hidden');
}
