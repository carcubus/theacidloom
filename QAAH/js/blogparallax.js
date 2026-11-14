var vparo;
var quintow=0.2*window.innerWidth; // 1 quinto del ancho de ventana
var nart=13; //numero articulos
var nimg=7; //numero imagenes externas
var ichivato=0;
var nimgi= [0,0,1,0,2,1,1,2,0,0,0,1,0,1]; //numero imagenes internas
var order;
var posimgt;
var heiimgt;
var widimgt;
var posimgsup;
var posdivsup;
for (i=nart; i>0; i--) {
  eval('var posart'+i); 
  eval('var heiart'+i); 
  eval('var widart'+i); 
  eval('var posart'+i+'fan'); 
  eval('var posart'+i+'masc'); 
  eval('var posart'+i+'espejo'); 
}  
for (i = nimg; i > 0; i--) {
  eval('var posimg'+i); 
  eval('var heiimg'+i); 
  eval('var widimg'+i); 
  eval('var posimg'+i); 
  eval('var posimg'+i+'masc'); 
  eval('var posimg'+i+'tapa'); 
}
for (j=nart; j>0; j--) {
  for (i = nimgi[j]; i > 0; i--) {

    eval('var pos'+j+'imgi'+i+'fan'); 
    eval('var hei'+j+'imgi'+i); 
    eval('var wid'+j+'imgi'+i);
    eval('var mar'+j+'imgi'+i); 
    eval('var pos'+j+'imgi'+i); 
    eval('var pos'+j+'imgi'+i+'masc'); 
    eval('var pos'+j+'imgi'+i+'mir'); 
  } 
}
//blogorder();



$(document).ready(function(){ 

  order=1;
  actorder();
  actualizascroll();

  //recargar si se cambia el tamaño
  $(window).resize(function(){actorder();actualizascroll();});  //reejecutar js??

  //Movimiento con el scroll
	$(window).scroll(function(){actualizascroll();});  
  document.getElementById("tapanegra").style.display = "none"; //quita tapa negra
});

function revorder() {
  if (order == 1) {blogorder();}
  else if (order == 0) {historder();}
}
function actorder() {
  //Reposicionamiento Titulo
  posimgt = $("#imgtitulo").position();
  heiimgt = $("#imgtitulo").height();
  widimgt = $("#imgtitulo").width();
  $("#imgtitulosup").css({position: "fixed", top: posimgt.top + 'px', left: posimgt.left + 'px', height: heiimgt + 'px', width: widimgt + 'px'});
  posimgsup = $("#imgtitulosup").position();
  posdivsup = $("#divtitulosup").position();
  if (order == 0) {blogorder();}
  else if (order == 1) {historder();}
}

function historder() {
  order=1;
  vparo=window.innerWidth/window.innerHeight; //ratio pantalla
  eval("document.querySelector(':root').style.setProperty('--vparo', "+vparo+");"); 
  var heibar=0;
  console.log('historder-beginning');
  for (i=1; i<=nart; i++) {
      if (i == 1) {eval('$("#art'+i+'").css({position: "fixed",  top: "170vh"})'); }
      if (i > 1) {eval('$("#art'+i+'").css({position: "fixed",  top: posart'+(i-1)+'.top + 1.15 * (1/vparo) * widart'+(i-1)+'+ 1.05 * heiart'+(i-1)+' + "px"})'); }
      eval('posart'+i+' = $("#art'+i+'").position()'); 
      eval('heiart'+i+' = $("#art'+i+'").height()'); 
      eval('heibar = heibar + $("#art'+i+'").height()'); 
      eval('widart'+i+' = $("#art'+i+'").width()'); 
      eval('$("#art'+i+'fan").css({position: "fixed",  height: heiart'+i+' + "px"})'); 
      eval('$("#art'+i+'fan").css({position: "fixed",  top: posart'+i+'.top + "px"})'); 
      eval('$("#art'+i+'espejo").css({position: "fixed",  height: heiart'+i+' + "px"})'); 
      eval('$("#art'+i+'espejo").css({position: "fixed",  top: posart'+i+'.top + "px"})'); 
      eval('$("#art'+i+'masc").css({position: "fixed",  left: posart'+i+'.left - quintow + vparo*posart'+i+'.top + "px"})'); 
      eval('$("#art'+i+'masc").css({position: "fixed",  width: vparo*heiart'+i+' + widart'+i+' + "px"})'); 
      eval('posart'+i+'fan = $("#art'+i+'fan").position()'); 
      eval('posart'+i+'espejo = $("#art'+i+'espejo").position()'); 
      eval('posart'+i+'masc = $("#art'+i+'masc").position()'); 
      eval('$("#arti'+i+'").css({position: "absolute",  top: -400+posart'+i+'.top + "px"})'); 
    }
    heibar=heibar+2*nart*window.innerHeight;
    eval("document.querySelector(':root').style.setProperty('--heibar', "+heibar+");");
    elemorder();
}

function blogorder() {
    order=0;
    var heibar=0;
    console.log('blogorder-newest');
    //Reposicionamiento articulos
    for (i=nart; i>0; i--) {
      if (i == nart) {eval('$("#art'+i+'").css({position: "fixed",  top: "170vh"})'); }
      if (i < nart) {eval('$("#art'+i+'").css({position: "fixed",  top: posart'+(i+1)+'.top + 1.3 * widart'+(i+1)+'+ 1.2 * heiart'+(i+1)+' + "px"})'); }
      eval('posart'+i+' = $("#art'+i+'").position()'); 
      eval('heiart'+i+' = $("#art'+i+'").height()'); 
      eval('heibar = heibar + $("#art'+i+'").height()');
      eval('widart'+i+' = $("#art'+i+'").width()'); 
      eval('$("#art'+i+'fan").css({position: "fixed",  height: heiart'+i+' + "px"})'); 
      eval('$("#art'+i+'fan").css({position: "fixed",  top: posart'+i+'.top + "px"})'); 
      eval('$("#art'+i+'espejo").css({position: "fixed",  height: heiart'+i+' + "px"})'); 
      eval('$("#art'+i+'espejo").css({position: "fixed",  top: posart'+i+'.top + "px"})'); 
      eval('$("#art'+i+'masc").css({position: "fixed",  left: posart'+i+'.left - quintow + vparo*posart'+i+'.top + "px"})'); 
      eval('$("#art'+i+'masc").css({position: "fixed",  width: vparo*heiart'+i+' + widart'+i+' + "px"})'); 
      eval('posart'+i+'fan = $("#art'+i+'fan").position()'); 
      eval('posart'+i+'espejo = $("#art'+i+'espejo").position()'); 
      eval('posart'+i+'masc = $("#art'+i+'masc").position()'); 
      eval('$("#arti'+i+'").css({position: "absolute",  top: -400+posart'+i+'.top + "px"})'); 
    } 
    heibar=heibar+1.5*nart*window.innerHeight;
    eval("document.querySelector(':root').style.setProperty('--heibar', "+heibar+");");
    elemorder(); 
}

function elemorder() {
    //Posicion puntos de enlace
  
    //Posicion relativa a articulos de imagenes
    $("#aimg1fan").css({position: "fixed",  top: posart1.top + 0.1*heiart1 + 'px'});
    $("#aimg1fan").css({position: "fixed",  height: 0.8*heiart1 + 'px'});
    $("#aimg2fan").css({position: "fixed",  top: posart3.top - 0.1*heiart3 + 'px'});
    $("#aimg2fan").css({position: "fixed",  height: 1.2*heiart3 + 'px'});
    $("#aimg3fan").css({position: "fixed",  top: posart7.top - 0.05*heiart7 + 'px'});
    $("#aimg3fan").css({position: "fixed",  height: 0.7*heiart7 + 'px'});
    $("#aimg4fan").css({position: "fixed",  top: posart8.top - 0.1*heiart8 + 'px'});
    $("#aimg4fan").css({position: "fixed",  height: 1.1*heiart8 + 'px'});
    $("#aimg5fan").css({position: "fixed",  top: posart9.top + 0.1*heiart9 + 'px'});
    $("#aimg5fan").css({position: "fixed",  height: 0.9*heiart9 + 'px'});
    $("#aimg6fan").css({position: "fixed",  top: posart10.top + 0.1*heiart10 + 'px'});
    $("#aimg6fan").css({position: "fixed",  height: 0.8*heiart10 + 'px'});
    $("#aimg7fan").css({position: "fixed",  top: posart12.top + 0.1*heiart12 + 'px'});
    $("#aimg7fan").css({position: "fixed",  height: 0.8*heiart12 + 'px'});
  
    //Reposicionamiento imagenes
    for (i = 1; i <= nimg; i++) {
      eval('posimg'+i+' = $("#aimg'+i+'").position()'); 
      eval('heiimg'+i+' = $("#aimg'+i+'fan").height()'); 
      eval('widimg'+i+' = $("#aimg'+i+'fan").width()'); 
      eval('posimg'+i+'fan = $("#aimg'+i+'fan").position()'); 
      eval('$("#aimg'+i+'masc").css({position: "fixed",  left: posimg'+i+'fan.left - 1.25*quintow  + widimg'+i+' + vparo*posimg'+i+'fan.top + "px"})');
      eval('$("#aimg'+i+'masc").css({position: "fixed",  width: vparo*heiimg'+i+' - 1.5*widimg'+i+' + "px"})'); 
      eval('posimg'+i+'masc = $("#aimg'+i+'masc").position()'); 
      eval('$("#aimg'+i+'tapa").css({position: "fixed",  top: posimg'+i+'fan.top + heiimg'+i+' + "px"})');
      eval('$("#aimg'+i+'tapa").css({width: widimg'+i+' + "px"})'); 
      eval('$("#aimg'+i+'tapa").css({height: heiimg'+i+' + "px"})'); 
      eval('posimg'+i+'tapa = $("#aimg'+i+'tapa").position()'); 
    } 
    for (j=1; j<=nart; j++) {
     for (i = 1; i <= nimgi[j]; i++) {
      eval('pos'+j+'imgi'+i+'fan = $(".a'+j+'imgi'+i+'fan").position()'); 
      eval('hei'+j+'imgi'+i+' = document.querySelector(".a'+j+'imgi'+i+'fan").offsetHeight'); 
      //eval('wid'+j+'imgi'+i+' = $(".a'+j+'imgi'+i+'fan").width()');
      eval('wid'+j+'imgi'+i+' = document.querySelector(".a'+j+'imgi'+i+'fan").offsetWidth'); 
      eval('mar'+j+'imgi'+i+' = $(".a'+j+'imgi'+i+'fan").outerWidth(true) - $(".a'+j+'imgi'+i+'fan").innerWidth()'); 
  
      eval('$("#a'+j+'imgi'+i+'").css({position: "fixed",  top: pos'+j+'imgi'+i+'fan.top + posart'+j+'.top + "px"})');
      eval('$("#a'+j+'imgi'+i+'").css({left: pos'+j+'imgi'+i+'fan.left + posart'+j+'.left +0.5*mar'+j+'imgi'+i+' + "px"})');
      eval('$("#a'+j+'imgi'+i+'").css({width: wid'+j+'imgi'+i+' + "px"})'); 
      eval('$("#a'+j+'imgi'+i+'").css({height: hei'+j+'imgi'+i+' + "px"})'); 
  
      eval('$("#a'+j+'imgi'+i+'mir").css({position: "fixed",  top: pos'+j+'imgi'+i+'fan.top + posart'+j+'.top + "px"})');
      eval('$("#a'+j+'imgi'+i+'mir").css({left: pos'+j+'imgi'+i+'fan.left + posart'+j+'.left +0.5*mar'+j+'imgi'+i+' + "px"})');
      eval('$("#a'+j+'imgi'+i+'mir").css({width: wid'+j+'imgi'+i+' + "px"})'); 
      eval('$("#a'+j+'imgi'+i+'mir").css({height: hei'+j+'imgi'+i+' + "px"})'); 
  
      eval('$("#a'+j+'imgi'+i+'masc").css({position: "fixed",  top: pos'+j+'imgi'+i+'fan.top + posart'+j+'.top + "px"})');
      eval('$("#a'+j+'imgi'+i+'masc").css({height: hei'+j+'imgi'+i+' + "px"})'); 
      eval('pos'+j+'imgi'+i+' = $("#a'+j+'imgi'+i+'").position()'); 
  
      eval('$("#a'+j+'imgi'+i+'masc").css({left: vparo*pos'+j+'imgi'+i+'fan.top + vparo*posart'+j+'fan.top + "px"})');
      eval('pos'+j+'imgi'+i+'masc = $("#a'+j+'imgi'+i+'masc").position()'); 
      eval('pos'+j+'imgi'+i+'mir = $("#a'+j+'imgi'+i+'mir").position()'); 
     }
    } 
    
}

function actualizascroll(){
  var vpar=window.innerWidth/window.innerHeight;
  var barra = $(window).scrollTop();
  var posmue0p5 = - (barra * 0.5);
  var posmuem0p5 = + (barra * 0.5);
  var posmuem1 = + (barra * 1);   
  if (barra < 600) {$("#divtitulo").css({opacity: 1 - 0.002 * barra});}
  if (barra > 600) {$("#divtitulo").css({opacity: 0});}
  if (barra > 400 && barra < 1400) {$("#divtituloinf").css({opacity: 1 - 0.0015 * (barra-500)});}
  if (barra > 300 && barra < 900) {$("#divtitulosup").css({opacity: 1 - 0.002 * (barra-300)});}
  if (barra < 800) {$("#imgtitulosup").css({left: posimgsup.left - vpar * barra + 'px'});}
  if (barra < 800) {$("#divtitulosup").css({right: posdivsup.right + vpar * barra + 'px'});}
  if (barra > 1400) {$(".tituloelems").css({opacity: 0});} 
  if (barra > 1400) {$("#divtituloinf").css({opacity: 0}); $("#divtitulosup").css({opacity: 0});} 
  if (barra < posimg2fan.top) {$("#aimg2b").css({opacity: 0});} 
  if (barra > posimg2fan.top) {$("#aimg2b").css({opacity: 0.0006 * (barra - 30 - posimg2fan.top)});} 
  //para los articulos
  for (i = nart; i > 0; i--) {
    eval('$("#art'+i+'").css({position: "fixed",  top: posart'+i+'.top - barra + "px"})'); 
    eval('$("#art'+i+'fan").css({position: "fixed",  top: posart'+i+'fan.top - barra + "px"})'); 
    eval('$("#art'+i+'espejo").css({position: "fixed",  top: posart'+i+'espejo.top - barra + "px"})'); 
    eval('$("#art'+i+'masc").css({position: "fixed",  left: posart'+i+'masc.left - vpar * barra + "px"})'); 
  } 
      //para las imagenes externas
  for (i = nimg; i > 0; i--) {
    eval('$("#aimg'+i+'fan").css({position: "fixed",  top: posimg'+i+'fan.top - barra + "px"})');
    eval('$("#aimg'+i+'tapa").css({position: "fixed",  top: posimg'+i+'tapa.top - barra + "px"})');
    eval('$("#aimg'+i+'masc").css({left: posimg'+i+'masc.left - vpar * barra + "px"})');
  }
  //para las imagenes internas
  if (ichivato < 4) {
    ichivato+=1;
    console.log(ichivato,'xxxx',hei2imgi1,document.querySelector(".a2imgi1fan").offsetHeight);
    for (j=nart; j>0; j--) {
      for (i = nimgi[j]; i > 0; i--) {
        eval('pos'+j+'imgi'+i+'fan = $(".a'+j+'imgi'+i+'fan").position()'); 
        eval('hei'+j+'imgi'+i+' = document.querySelector(".a'+j+'imgi'+i+'fan").offsetHeight'); 
        eval('wid'+j+'imgi'+i+' = document.querySelector(".a'+j+'imgi'+i+'fan").offsetWidth'); 
        eval('$("#a'+j+'imgi'+i+'").css({position: "fixed",  top: pos'+j+'imgi'+i+'fan.top + posart'+j+'.top + "px"})');
        eval('$("#a'+j+'imgi'+i+'").css({left: pos'+j+'imgi'+i+'fan.left + posart'+j+'.left +0.5*mar'+j+'imgi'+i+' + "px"})');
        eval('$("#a'+j+'imgi'+i+'").css({width: wid'+j+'imgi'+i+' + "px"})'); 
        eval('$("#a'+j+'imgi'+i+'").css({height: hei'+j+'imgi'+i+' + "px"})'); 
        eval('pos'+j+'imgi'+i+' = $("#a'+j+'imgi'+i+'").position()'); 
        eval('$("#a'+j+'imgi'+i+'mir").css({width: wid'+j+'imgi'+i+' + "px"})'); 
        eval('$("#a'+j+'imgi'+i+'mir").css({height: hei'+j+'imgi'+i+' + "px"})'); 
        eval('$("#a'+j+'imgi'+i+'masc").css({height: hei'+j+'imgi'+i+' + "px"})'); 
      }
    }
  }
  for (j=nart; j>0; j--) {
    for (i = nimgi[j]; i > 0; i--) {
      eval('$("#a'+j+'imgi'+i+'").css({position: "fixed",  top: pos'+j+'imgi'+i+'.top - barra + "px"});');
      eval('$("#a'+j+'imgi'+i+'mir").css({position: "fixed",  top: pos'+j+'imgi'+i+'mir.top - barra + "px"});');
      eval('$("#a'+j+'imgi'+i+'masc").css({position: "fixed",  top: pos'+j+'imgi'+i+'masc.top - barra + "px"});');
      eval('$("#a'+j+'imgi'+i+'masc").css({position: "fixed",  left: pos'+j+'imgi'+i+'masc.left - vpar * barra + "px"});');
    }
  }
}  










