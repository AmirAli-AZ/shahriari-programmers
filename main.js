window.onscroll = function() {
  pageScroll()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function pageScroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}