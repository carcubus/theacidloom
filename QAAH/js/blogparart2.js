var vparo;
var quintow=0.2*window.innerWidth; // 1 quinto del ancho de ventana
var nart=1; //numero articulos
var nimg=0; //numero imagenes externas
var nimgi=4; //numero imagenes internas
var ichivato=0;
var heibar;

var posimgt;
var heiimgt;
var widimgt;

var posimgsup;
var posimgsup2;
var posdivsup;
var posdivsup2;
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
  eval('var posimg'+i+'hueco');
  eval('var heiimg'+i+'hueco');
}
for (i = nimgi; i > 0; i--) {
  eval('var posimgi'+i+'fan'); 
  eval('var heiimgi'+i); 
  eval('var widimgi'+i);
  eval('var marimgi'+i); 
  eval('var posimgi'+i); 
  eval('var posimgi'+i+'masc');
  eval('var posimgi'+i+'masc2');
  eval('var posimgi'+i+'mir');  
} 

$(document).ready(function(){ 

  elemorder();
  document.getElementById("tapanegra").style.display = "none";; //quita tapa negra
 
  //recargar si se cambia el tamaño
  $(window).resize(function(){elemorder(); actualizascroll();});  //reejecutar js??

  //Movimiento con el scroll
	$(window).scroll(function(){actualizascroll();}); 
     
});


function elemorder() {
  vparo=window.innerWidth/window.innerHeight; //ratio pantalla
  eval("document.querySelector(':root').style.setProperty('--vparo', "+vparo+");");
  heibar=$("#art1").height();
  eval("document.querySelector(':root').style.setProperty('--heibar', "+heibar+");"); 
  //Reposicionamiento Titulo
  posimgt = $("#imgtitulo").position();
  heiimgt = $("#imgtitulo").height();
  widimgt = $("#imgtitulo").width();
  $("#imgtitulosup").css({position: "fixed", top: posimgt.top + 'px', left: posimgt.left + 'px', height: heiimgt + 'px', width: widimgt + 'px'});
  $("#imgtitulosup2").css({position: "fixed", top: posimgt.top + 'px', left: posimgt.left + 'px', height: heiimgt + 'px', width: widimgt + 'px'});
  posimgsup = $("#imgtitulosup").position();
  posimgsup2 = $("#imgtitulosup2").position();
  posdivsup = $("#divtitulosup").position();
  posdivsup2 = $("#divtitulosup").position();
  for (i=1; i<=nart; i++) {
      if (i == 1) {eval('$("#art'+i+'").css({position: "fixed",  top: "160vh"})'); }
      if (i > 1) {eval('$("#art'+i+'").css({position: "fixed",  top: posart'+(i-1)+'.top + 1.7 * heiart'+(i-1)+' + "px"})'); }
      eval('posart'+i+' = $("#art'+i+'").position()'); 
      eval('heiart'+i+' = $("#art'+i+'").height()'); 
      eval('widart'+i+' = $("#art'+i+'").width()'); 
      eval('$("#art'+i+'fan").css({position: "fixed",  height: heiart'+i+' + "px"})'); 
      eval('$("#art'+i+'tapa").css({position: "fixed",  height: heiart'+i+' + "px"})'); 
      eval('$("#art'+i+'fan").css({position: "fixed",  top: posart'+i+'.top + "px"})'); 
      eval('$("#art'+i+'tapa").css({position: "fixed",  top: posart'+i+'.top + "px"})'); 
      eval('$("#art'+i+'espejo").css({position: "fixed",  height: heiart'+i+' + "px"})'); 
      eval('$("#art'+i+'espejo").css({position: "fixed",  top: posart'+i+'.top + "px"})'); 
      eval('$("#art'+i+'masc").css({position: "fixed",  top: window.innerHeight - posart'+i+'.top - heiart'+i+' + "px"})'); 
      eval('$("#art'+i+'masc").css({position: "fixed",  height: heiart'+i+' + "px"})'); 
      eval('posart'+i+'fan = $("#art'+i+'fan").position()'); 
      eval('posart'+i+'espejo = $("#art'+i+'espejo").position()'); 
      eval('posart'+i+'masc = $("#art'+i+'masc").position()'); 
      eval('$("#arti'+i+'").css({position: "absolute",  top: -200+posart'+i+'.top + "px"})'); 
    } 
  
    //Reposicionamiento imagenes
    for (i = 1; i <= nimg; i++) {
      eval('posimg'+i+'hueco = $("#aimg'+i+'hueco").position()');
      eval('heiimg'+i+'hueco = $("#aimg'+i+'hueco").height()');  
      eval('$("#aimg'+i+'").css({position: "fixed",  left: posart1.left + posimg'+i+'hueco.left + "px"})');
      eval('posimg'+i+' = $("#aimg'+i+'").position()'); 
      eval('$("#aimg'+i+'fan").css({position: "fixed",  top: posart1.top + posimg'+i+'hueco.top + "px",  left: posart1.left + posimg'+i+'hueco.left + "px"})'); 
      eval('$("#aimg'+i+'fan").css({position: "fixed",  height: heiimg'+i+'hueco + "px"})'); 
      eval('heiimg'+i+' = $("#aimg'+i+'fan").height()'); 
      eval('widimg'+i+' = $("#aimg'+i+'").width()'); 
      eval('posimg'+i+'fan = $("#aimg'+i+'fan").position()'); 
      eval('$("#aimg'+i+'masc").css({position: "fixed",  left: posimg'+i+'fan.left - 1.25*quintow  + widimg'+i+' + vparo*posimg'+i+'fan.top + "px"})');
      eval('$("#aimg'+i+'masc").css({position: "fixed",  width: vparo*heiimg'+i+' - 2*widimg'+i+' + "px"})'); 
      eval('posimg'+i+'masc = $("#aimg'+i+'masc").position()'); 
      eval('$("#aimg'+i+'tapa").css({position: "fixed",  top: posimg'+i+'fan.top + heiimg'+i+' + "px"})');
      eval('$("#aimg'+i+'tapa").css({width: widimg'+i+' + "px"})'); 
      eval('$("#aimg'+i+'tapa").css({height: heiimg'+i+' + "px"})'); 
      eval('posimg'+i+'tapa = $("#aimg'+i+'tapa").position()'); 

    } 
    for (i = 1; i <= nimgi; i++) {
      eval('posimgi'+i+'fan = $(".aimgi'+i+'fan").position()'); 
      eval('heiimgi'+i+' = $(".aimgi'+i+'fan").height()'); 
      eval('widimgi'+i+' = $(".aimgi'+i+'fan").width()');
      eval('marimgi'+i+' = $(".aimgi'+i+'fan").outerWidth(true) - $(".aimgi'+i+'fan").innerWidth()'); 
  
      eval('$("#aimgi'+i+'").css({position: "fixed",  top: posimgi'+i+'fan.top + posart1.top + "px"})');
      eval('$("#aimgi'+i+'").css({left: posimgi'+i+'fan.left + posart1.left -0.5*marimgi'+i+' + "px"})');
      eval('$("#aimgi'+i+'").css({width: widimgi'+i+' + "px"})'); 
      eval('$("#aimgi'+i+'").css({height: heiimgi'+i+' + "px"})'); 

      eval('$("#aimgi'+i+'inf").css({position: "fixed",  top: posimgi'+i+'fan.top + posart1.top + "px"})');
      eval('$("#aimgi'+i+'inf").css({left: posimgi'+i+'fan.left + posart1.left -0.5*marimgi'+i+' + "px"})');
      eval('$("#aimgi'+i+'inf").css({width: widimgi'+i+' + "px"})'); 
      eval('$("#aimgi'+i+'inf").css({height: heiimgi'+i+' + "px"})'); 
  
      eval('$("#aimgi'+i+'mir").css({position: "fixed",  top: posimgi'+i+'fan.top + posart1.top + "px"})');
      eval('$("#aimgi'+i+'mir").css({left: posimgi'+i+'fan.left + posart1.left -0.5*marimgi'+i+' + "px"})');
      eval('$("#aimgi'+i+'mir").css({width: widimgi'+i+' + "px"})'); 
      eval('$("#aimgi'+i+'mir").css({height: heiimgi'+i+' + "px"})'); 
  
      eval('$("#aimgi'+i+'masc").css({position: "fixed",  top: posimgi'+i+'fan.top + posart1.top + "px"})');
      eval('$("#aimgi'+i+'masc").css({height: heiimgi'+i+' + "px"})'); 
      eval('$("#aimgi'+i+'masc2").css({position: "fixed",  top: posimgi'+i+'fan.top + posart1.top + "px"})');
      eval('$("#aimgi'+i+'masc2").css({height: heiimgi'+i+' + "px"})'); 
      eval('posimgi'+i+' = $("#aimgi'+i+'").position()'); 
      eval('$("#aimgi'+i+'masc").css({left: + 0.5*widimgi'+i+' + vparo*posimgi'+i+'fan.top + vparo*posart1fan.top + "px"})');
      eval('posimgi'+i+'masc = $("#aimgi'+i+'masc").position()'); 
      eval('$("#aimgi'+i+'masc2").css({left: +0.2*window.innerWidth - 0.5*widimgi'+i+' - vparo*posimgi'+i+'fan.top - vparo*posart1fan.top + "px"})');
      eval('posimgi'+i+'masc2 = $("#aimgi'+i+'masc2").position()'); 
      eval('posimgi'+i+'mir = $("#aimgi'+i+'mir").position()'); 
    
    }   
    $("#aimgi2masc2").css({left: posimgi2masc2.left - 0.2*window.innerWidth + "px"});
    posimgi2masc2 = $("#aimgi2masc2").position();
    $("#aimgi2").css({left: posimgi2fan.left + posart1.left +0.05*window.innerWidth + "px"})
    $("#aimgi2inf").css({left: posimgi2fan.left + posart1.left +0.05*window.innerWidth + "px"})
    $("#aimgi2mir").css({left: posimgi2fan.left + posart1.left +0.05*window.innerWidth + "px"})
}

function minielemorder() {
  for (i = nimgi; i > 0; i--) {
    eval('posimgi'+i+'fan = $(".aimgi'+i+'fan").position()'); 
    eval('heiimgi'+i+' = document.querySelector(".aimgi'+i+'fan").offsetHeight'); 
    eval('widimgi'+i+' = document.querySelector(".aimgi'+i+'fan").offsetWidth');
    eval('$("#aimgi'+i+'").css({position: "fixed",  top: posimgi'+i+'fan.top + posart1.top + "px"})');
    eval('$("#aimgi'+i+'").css({left: posimgi'+i+'fan.left + posart1.left +0.5*marimgi'+i+' + "px"})');
    eval('$("#aimgi'+i+'").css({width: widimgi'+i+' + "px"})'); 
    eval('$("#aimgi'+i+'").css({height: heiimgi'+i+' + "px"})'); 
    eval('$("#aimgi'+i+'mir").css({width: widimgi'+i+' + "px"})'); 
    eval('$("#aimgi'+i+'mir").css({height: heiimgi'+i+' + "px"})'); 
    eval('$("#aimgi'+i+'masc").css({height: heiimgi'+i+' + "px"})'); 
    eval('$("#aimgi'+i+'masc2").css({height: heiimgi'+i+' + "px"})'); 
    eval('posimgi'+i+' = $("#aimgi'+i+'").position()'); 
  }
}


function actualizascroll(){
  var vpar=window.innerWidth/window.innerHeight;
  var barra = $(window).scrollTop(); 
  if (barra < 600) {$("#divtitulo").css({opacity: 1 - 0.002 * barra});}
  if (barra > 400 && barra < 1400) {$("#divtituloinf").css({opacity: 1 - 0.0015 * (barra-500)});}
  if (barra > 300 && barra < 900) {$("#divtitulosup").css({opacity: 1 - 0.002 * (barra-330)});}
  if (barra > 300 && barra < 900) {$("#divtitulosup2").css({opacity: 1 - 0.002 * (barra-330)});}
  if (barra < 800) {$("#imgtitulosup").css({top: posimgsup.top + vpar * barra + 'px'});}
  if (barra < 800) {$("#divtitulosup").css({top: posdivsup.top + vpar * barra + 'px'});}
  if (barra < 800) {$("#imgtitulosup2").css({top: posimgsup2.top - vpar * barra + 'px'});}
  if (barra < 800) {$("#divtitulosup2").css({top: posdivsup2.top - vpar * barra + 'px'});}
  if (barra > 1500) {$(".tituloelems").css({opacity: 0});} 

  //para los articulos
  for (i = nart; i > 0; i--) {
    eval('$("#art'+i+'").css({position: "fixed",  top: posart'+i+'.top - barra + "px"})'); 
    eval('$("#art'+i+'tapa").css({position: "fixed",  top: posart'+i+'fan.top - barra + "px"})');
    eval('$("#art'+i+'fan").css({position: "fixed",  top: posart'+i+'fan.top - barra + "px"})'); 
    eval('$("#art'+i+'espejo").css({position: "fixed",  top: posart'+i+'espejo.top - barra + "px"})'); 
    eval('$("#art'+i+'masc").css({position: "fixed",  top: posart'+i+'masc.top + barra + "px"})'); 
  } 

      //para las imagenes externas
  for (i = nimg; i > 0; i--) {
    eval('$("#aimg'+i+'fan").css({position: "fixed",  top: posimg'+i+'fan.top - barra + "px"})');
    eval('$("#aimg'+i+'tapa").css({position: "fixed",  top: posimg'+i+'tapa.top - barra + "px"})');
    eval('$("#aimg'+i+'masc").css({left: posimg'+i+'masc.left - vpar * barra + "px"})');
  }
  //para las imagenes internas
  if (ichivato < 3) {
    ichivato+=1;
    minielemorder();
  }
  for (i = nimgi; i > 0; i--) {
    eval('$("#aimgi'+i+'").css({position: "fixed",  top: posimgi'+i+'.top - barra + "px"});');
    eval('$("#aimgi'+i+'inf").css({position: "fixed",  top: posimgi'+i+'.top - barra + "px"});');
    eval('$("#aimgi'+i+'mir").css({position: "fixed",  top: posimgi'+i+'mir.top - barra + "px"});');
    eval('$("#aimgi'+i+'masc").css({position: "fixed",  top: posimgi'+i+'masc.top - barra + "px"});');
    eval('$("#aimgi'+i+'masc").css({position: "fixed",  left: posimgi'+i+'masc.left - vpar * barra + "px"});');
    eval('$("#aimgi'+i+'masc2").css({position: "fixed",  top: posimgi'+i+'masc2.top - barra + "px"});');
    eval('$("#aimgi'+i+'masc2").css({position: "fixed",  left: posimgi'+i+'masc2.left + vpar * barra + "px"});');
  }
}   




