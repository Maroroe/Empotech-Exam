var modal = document.getElementById("myModal");
var modalChar = document.getElementById("myModalChar");
var modalTal = document.getElementById("myModalTal");
var modalAlias = document.getElementById("myModalAlias");
var modalBack = document.getElementById("myModalBack");


var btn = document.getElementById("myBtn");
var btnChar = document.getElementById("myBtnChar");
var btnTal = document.getElementById("myBtnTal");
var btnAlias = document.getElementById("myBtnAlias");
var btnBack = document.getElementById("myBtnBack");


var span = document.getElementsByClassName("close")[0];
var spanTal = document.getElementsByClassName("close")[1]
var spanBack = document.getElementsByClassName("close")[2]
var spanAlias = document.getElementsByClassName("close")[3]
var spanChar = document.getElementsByClassName("close")[4]


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

btnChar.onclick = function() {
  modalChar.style.display = "block";
}

spanChar.onclick = function() {
  modalChar.style.display = "none";
}

btnTal.onclick = function() {
  modalTal.style.display = "block";
}

spanTal.onclick = function() {
  modalTal.style.display = "none";
}

btnAlias.onclick = function() {
  modalAlias.style.display = "block";
}

spanAlias.onclick = function() {
  modalAlias.style.display = "none";
}

btnBack.onclick = function() {
  modalBack.style.display = "block";
}

spanBack.onclick = function() {
  modalBack.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

   if (event.target == modalTal) {
    modalTal.style.display = "none";
  }
     if (event.target == modalAlias) {
    modalAlias.style.display = "none";
  }

    if (event.target == modalBack) {
    modalBack.style.display = "none";
  }
  if (event.target == modalChar) {
    modalChar.style.display = "none";
  }
}

//animation for navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

//Birthday Timer
var countDownDate = new Date("May 28, 2022 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("birthday").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementsById("birthday").innerHTML = "EXPIRED";
  }
}, 1000);
