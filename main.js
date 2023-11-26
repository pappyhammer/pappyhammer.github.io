

/* for sticky banner */
window.onscroll = function () { stickyFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

/* https://stackoverflow.com/questions/23601792/get-only-light-colors-randomly-using-javascript */
function getRandomColor() {
    color = "hsla(" + Math.random() * 360 + ", 100%, 70%, 0.6)";
    return color;
}

var getElm = document.getElementsByClassName('topic_tag');
for(var i = 0, l = getElm.length; i < l; i++) {
  var randomColor = getRandomColor();
  getElm[i].style.backgroundColor =  randomColor;
}