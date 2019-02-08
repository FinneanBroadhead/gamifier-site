var navOpen = false;

$(document).ready(function() {
  triggerNav();
});


function triggerNav() {
  if (navOpen) {
    closeNav();
  } else {
    openNav();
  }
}

$(window).click(function() {
  console.log("Clicked");
  triggerNav();
});

function openNav() {
  navOpen = true;
  console.log("Opened nav");
  $("#navigation-content-container").fadeIn(100);
}

function closeNav() {
  navOpen = false;
  console.log("Closed nav");
  $("#navigation-content-container").fadeOut(200);
}