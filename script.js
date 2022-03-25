// random number demo
function randomStart() {
    ranInterval=setInterval(randomNum,20)
  }

  function randomNum() {
    var x=document.getElementById("num-container");
    var wordBtn = document.getElementById("wordButton");
    var circle = document.getElementById("circle");
    x.innerHTML=Math.floor((Math.random()*300)+100);
    document.getElementById("wordButton").disabled = true;
    setTimeout(randomStop,1200);
  }

  function randomStop() {
    clearInterval(ranInterval);
    wordButton.classList.add("numbersDone");
    circle.classList.add("circleOn");
    circle.classList.remove("circleOff");
  }
// end of random number demo

// gallery
let slideIndex = [1,1];
let slideId = ["gallery-slides", "gallery-slides-2"]
showSlides(1, 0);
showSlides(1, 1);

// Next/previous controls
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n,no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "grid";
}
