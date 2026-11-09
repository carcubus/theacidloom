/*Parte js contacto*/

document.querySelector( "form" )
   .addEventListener( "invalid", function( event ) {
       event.preventDefault();
   }, true );
document.getElementById("circle3b").addEventListener('click', e => {if(e.target == e.currentTarget) desformcontac("circle3b")});

var zfa=document.getElementById("flechaatras");
zfa.onanimationend = function(){     
  zfa.classList.remove("flechamovil");
  zfa.offsetHeight;
  zfa.classList.add("flechahover");
  zfa.addEventListener('click', function(){aniiratras("flechaatras")});
}
var z3=document.getElementById("circle3");
z3.onanimationend = function(){     
  z3.classList.remove("circlemueve");
  z3.offsetHeight;
  z3.classList.add("latehover");
  z3.addEventListener('click', function(){apaformcontac("circle3b")});
}
     document.forms['contacto'].onsubmit = function(e){
      e.preventDefault();
      efectosubmit('arrobus');
      var formData = $('#contacto').serialize();
      $.post("contactform.php", formData);
      document.getElementById("email1").value = "";
      document.getElementById("email2").value = "";
      document.getElementById("mensaje").value = "";
     }
var maxzi = 1;

function aniiratras(objeto) {
    var oi=document.getElementById(objeto)
    /*var zi=oi.style.zIndex;
    zi=maxzi+1;
    oi.style.zIndex = zi;
    maxzi=zi;*/
    oi.style.animation = "agrandaflecha 5s";
    var oi2=document.getElementById('divnegro')
    oi2.style.animation = "agrandanegro 5s";
    setTimeout( function() { window.location = 'o0o.html' }, 2500 );
}
function separaemail() {
  var poscorreo = document.getElementById("email1").value; 
  if (poscorreo.includes("@")) {
    var uname  = poscorreo.substring(0, poscorreo.lastIndexOf("@"));
    var domain = poscorreo.substring(poscorreo.lastIndexOf("@") +1);
    document.getElementById("email1").value=uname;
    document.getElementById("email2").value=domain;
  }
 }
function apaformcontac(objeto) {
var oi=document.getElementById(objeto)
/*var zi=oi.style.zIndex;
zi=maxzi+1;
oi.style.zIndex = zi;
maxzi=zi;*/
oi.style.animation = "apaformani 2s";
oi.style.width = "max(600px,66vmin)";
oi.style.height = "max(600px,66vmin)";
desffatuo('circle3');
}
function desformcontac(objeto) {
var oii=document.getElementById(objeto);
oii.style.animation = "desformani 2s";
oii.style.width = "0px";
oii.style.height = "0px";
oii.style.minWidth = "0px";
oii.style.minHeight = "0px";
apaffatuo('circle3');
}
function efectosubmit(objeto) {
var o1=document.getElementById(objeto);
o1.style.animation = 'none'; 
o1.offsetHeight; /* trigger reflow */
o1.style.animation = "anisubmitarro 1s";
setTimeout(function() {desformcontac("circle3b");},1000);
}
function desffatuo(objeto) {
var z=document.getElementById(objeto);
var acttamy=z.height;
var acttamx=z.width;
z.style.minWidth = '0px';
z.style.minHeight = '0px';
z.style.animation = 'none';
z.offsetHeight; /* trigger reflow */
z.style.setProperty('--heig0',acttamy);
z.style.setProperty('--widt0',acttamx);
z.style.animation = "desffatuoani 0.8s";
z.style.width = "0px";
z.style.height = "0px";
z.style.opacity = 0;
}
function apaffatuo(objeto) {
var z=document.getElementById(objeto);
var otamy='8vmin';
var otamx='8vmin';
z.style.animation = 'none';
z.offsetHeight; /* trigger reflow */
z.style.setProperty('--heig0',otamy);
z.style.setProperty('--widt0',otamx);
z.style.animation = "apaffatuoani 3s";
z.style.width = otamx;
z.style.height = otamy;
z.style.minWidth = '50px';
z.style.minHeight = '50px';
z.style.opacity = 1;
z.onanimationend = function(){
 z.onmouseover = function(){       
  z.style.animation = "latec 1.2s ease 0s 3";
 }
 z.onmouseout = function(){       
  z.style.animation = "none";
 }
}
}

function giraarro(objeto) {
var z=document.getElementById(objeto);
z.style.animation = 'none'; 
z.getBBox(); /* trigger reflow svg */
z.offsetHeight; /* trigger reflow */
z.style.animation = "anigiraarro 1s";
}