var slideIndex = 1;
var numer = Math.floor(Math.random()*5)+1;
			
			var timer1 = 0;
			var timer2 = 0;
showDivs(slideIndex);

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function start() {
  y.loop = true;
  y.load();
}
var myIndex = 0;
carousel()
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000);
  }