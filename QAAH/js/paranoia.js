  var ipal = Math.floor(Math.random() * 2 + 1);
  var icolorin = Math.floor(Math.random() * 2 + 1);
  var sorteopal;
  let orden = [1,2,3,4];
  const ordens1 = [1,2];
  const ordens2 = [3,4];
  const nsubpal = [9,4,9,9];
  const elemcol=['ti','bar','no','nf','nbu','nm1','nm2','comb','com','acom','a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12','i1','ie1'];
  const elemcolesp=['comb','com','acom','a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12'];
  const elemcolnoesp=['ti','bar','no','nf','nbu','nm1','nm2','i1','ie1'];
  const paletaest1=[['indigo','white','red','grey'],['white','red','grey','black'],['grey','black','white','red'],['rgb(31,31,31)','white','red','grey'],
                    ['black','white','red','grey'],['black','white','red','grey'],['black','white','red','grey'],['rgb(191,191,191)','white','grey','red'],['black','white','darkgrey','rgb(139, 102, 187)'],['black','white','red','grey'],
                    ['black','grey','rgb(200,0,0)','white'],['rgb(191,191,191)','rgb(31,31,31)','white','black'],['grey','white','rgb(255,127,127)','black'],
                    ['grey','white','black','rgb(255,63,63)'],['rgb(191,191,191)','rgb(31,31,31)','black','white'],['grey','white','rgb(255,63,63)','black'],
                    ['black','grey','rgb(255,16,16)','white'],['rgb(191,191,191)','rgb(31,31,31)','white','black'],['grey','white','rgb(255,63,63)','black'],
                    ['black','grey','rgb(255,16,16)','white'],['rgb(191,191,191)','rgb(31,31,31)','white','black'],['grey','white','rgb(255,63,63)','black'],
                    ['black','purple','red','rgb(255,127,255)'],['rgb(191,63,95)','white','red','rgb(139, 102, 187)']
  ];
  const paletaest2=[['rgb(100,100,100)','white','black','rgb(191,191,191)'],['white','rgb(50,50,50)','grey','black'],['grey','black','rgb(200,200,200)','white'],['rgb(60,60,60)','white','black','grey'],
                    ['black','white','rgb(40,40,40)','grey'],['black','white','darkgrey','grey'],['black','white','rgb(170,170,170)','grey'],['rgb(190,210,190)','white','grey','red'],['black','white','darkgrey','rgb(139, 102, 187)'],['white','black','rgb(100,80,100','grey'],
                    ['rgb(50,50,50)','grey','white','black'],['black','rgb(200,190,180)','rgb(30,30,50)','white'],['grey','white','rgb(240,250,240)','black'],
                    ['rgb(50,60,50)','rgb(60,60,70)','rgb(220,200,220)','black'],['black','rgb(200,190,190)','rgb(30,50,50)','white'],['grey','rgb(50,40,50)','rgb(180,180,200)','black'],
                    ['rgb(60,50,50)','grey','black','white'],['black','rgb(200,190,180)','rgb(10,0,0)','white'],['grey','white','rgb(180,180,200)','black'],
                    ['rgb(50,50,50)','grey','white','black'],['black','rgb(200,190,180)','rgb(30,30,50)','white'],['grey','white','rgb(180,180,200)','black'],
                    ['black','rgb(100,100,80)','rgb(120,120,140)','rgb(255,230,255)'],['white','black','rgb(139, 102, 187)','rgb(190,170,170)']
  ];
colorincolorado();

for (i = 1; i < 7; i++) {
  let divcru="cruza"+i;
  animalocruzax(divcru);
}

for (i = 1; i < 7; i++) {
  let divcru="cruza"+i;
  let xdiv=document.getElementById(divcru);
  var handler = function reanipre() {reani(divcru);};
  xdiv.addEventListener('animationend', handler);
}

function colorincolorado() {
  icolorin+=1;
  if (icolorin > 2) {icolorin=1;}
  if (icolorin == 1) {colorestatico();}
  if (icolorin == 2) {
    eligecolores();
    corrigecolores();
  }
}

function colorestatico() {
  ipal=ipal+1;
  if (ipal > 2) {ipal=1;}
  ij=0;
  for (const j of elemcol) {
    for (i = 1; i < 5; i++) {
      eval("document.querySelector(':root').style.setProperty('--color'+j+i, paletaest"+ipal+"[ij][i-1]);"); 
      eval("document.querySelector(':root').style.setProperty('--colorb'+j+i, paletaest"+ipal+"[ij][i-1]);"); 
    }
    ij++;
  }
}

    function animalocruzax(divcru) {
      var x=document.getElementById(divcru);
      var randelay=Math.random()*6;
      var rantanima=Math.random()*5+1;
      var rantam=Math.random()*50+5;
      x.style.width = rantam+'vmin';
      x.style.height = rantam+'vmin';
      var ranvoh=Math.round(Math.random());
      var ranpon=Math.round(Math.random());
      var ranp=Math.random()*80+10; //-0.5*x.style.width;
      if (ranvoh == 0) {
        x.style.left = ranp+'vw';
        x.style.top = "-100vh";
        if (ranpon == 0) {
          x.style.animation = 'animacruzav '+rantanima+'s';
        }
        else {
          x.style.animation = 'animacruzavn '+rantanima+'s';
        }
      }
      else {
        x.style.top = ranp+'vh';
        x.style.left = "-100vw";
        if (ranpon == 0) {
          x.style.animation = 'animacruzah '+rantanima+'s';
        }
        else {
          x.style.animation = 'animacruzahn '+rantanima+'s';
        }
      }
      x.style.setProperty('animation-delay',randelay+'s');
      x.style.setProperty('animation-timing-function','linear');
    }

    function reani(divcru) {  //relanza animación 
      var z=document.getElementById(divcru);
      z.style.animation = 'none'; 
      z.offsetHeight; /* trigger reflow */
      animalocruzax(divcru); 
    }

function eligecolores() {
  //var numcolset=4
 
  const paleta1 = [
    ['rgb(0,0,0)','rgb(63,0,0)','rgb(0,0,63)','rgb(31,0,31)','rgb(63,0,31)','rgb(31,0,63)','rgb(31,31,31)','rgb(63,0,63)','rgb(63,31,63)'],
    ['rgb(255,255,255)','rgb(255,191,191)','rgb(191,191,255)','rgb(255,191,255)','rgb(255,191,223)','rgb(223,191,255)','rgb(223,223,223)','rgb(255,255,191)','rgb(191,255,255)'],
    ['rgb(255,0,0)','rgb(0,0,255)','rgb(255,0,127)','rgb(127,0,255)','rgb(255,0,191)','rgb(191,0,255)','rgb(255,0,255)','rgb(191,0,191)','rgb(127,0,127)'],
    ['rgb(63,63,63)','rgb(127,127,127)','rgb(191,191,191)','rgb(159,127,159)','rgb(159,127,127)','rgb(127,127,159)','rgb(127,95,127)','rgb(127,95,95)','rgb(95,95,127)']
  ];
  const paleta2 = [
    ['rgb(0,0,0)','rgb(31,31,31)','rgb(31,31,63)','rgb(31,0,31)'],
    ['rgb(255,255,255)','rgb(191,191,191)','rgb(191,191,255)','rgb(255,191,255)'],
    ['rgb(255,0,0)','rgb(255,155,0)','rgb(255,99,71)','rgb(128,0,0)'],
    ['rgb(127,127,127)','rgb(127,159,127)','rgb(159,127,159)','rgb(127,95,127)']
  ];
  const paleta3 = [
    ['rgb(0,0,0)','rgb(0,63,0)','rgb(0,0,63)','rgb(0,31,31)','rgb(0,63,31)','rgb(0,31,63)','rgb(31,31,31)','rgb(0,63,63)','rgb(31,63,63)'],
    ['rgb(255,255,255)','rgb(191,255,191)','rgb(191,191,255)','rgb(191,255,255)','rgb(191,255,223)','rgb(191,223,255)','rgb(223,223,223)','rgb(255,255,191)','rgb(255,191,255)'],
    ['rgb(0,255,0)','rgb(0,0,255)','rgb(0,255,127)','rgb(0,127,255)','rgb(0,255,191)','rgb(0,191,255)','rgb(0,255,255)','rgb(0,191,191)','rgb(0,127,127)'],
    ['rgb(63,63,63)','rgb(127,127,127)','rgb(191,191,191)','rgb(127,159,159)','rgb(127,159,127)','rgb(127,127,159)','rgb(95,127,127)','rgb(95,127,95)','rgb(95,95,127)']
  ];
  const paleta4 = [
    ['rgb(0,0,0)','rgb(63,0,0)','rgb(0,63,0)','rgb(31,31,0)','rgb(63,31,0)','rgb(31,63,0)','rgb(31,31,31)','rgb(63,63,0)','rgb(63,63,31)'],
    ['rgb(255,255,255)','rgb(255,191,191)','rgb(191,255,191)','rgb(255,255,191)','rgb(255,223,191)','rgb(223,255,191)','rgb(223,223,223)','rgb(255,255,191)','rgb(191,255,255)'],
    ['rgb(255,0,0)','rgb(0,255,0)','rgb(255,127,0)','rgb(127,255,0)','rgb(255,191,0)','rgb(191,255,0)','rgb(255,255,0)','rgb(191,191,0)','rgb(127,127,0)'],
    ['rgb(63,63,63)','rgb(127,127,127)','rgb(191,191,191)','rgb(159,159,127)','rgb(159,127,127)','rgb(127,159,127)','rgb(127,127,95)','rgb(127,95,95)','rgb(95,127,95)']
  ];
  sorteopal = Math.floor(Math.random() * 4 + 1);
  for (const j of elemcol) {
    var possorteo=shuffle(orden);
    for (i = 1; i < 5; i++) {
      //color principal
      var sorteoenpal = Math.floor(Math.random() * nsubpal[sorteopal-1] + 1);
      if (sorteopal == 1) {var colorchosen = paleta1[possorteo[i-1]-1][sorteoenpal-1];}
      if (sorteopal == 2) {var colorchosen = paleta2[possorteo[i-1]-1][sorteoenpal-1];}
      if (sorteopal == 3) {var colorchosen = paleta3[possorteo[i-1]-1][sorteoenpal-1];}
      if (sorteopal == 4) {var colorchosen = paleta4[possorteo[i-1]-1][sorteoenpal-1];}
      document.querySelector(':root').style.setProperty('--color'+j+i, colorchosen);  
      //color secundario
      var sorteoenpalb = Math.floor(Math.random() * nsubpal[sorteopal-1] + 1);
      if (sorteopal == 1) {var colorchosen = paleta1[possorteo[i-1]-1][sorteoenpalb-1];}
      if (sorteopal == 2) {var colorchosen = paleta2[possorteo[i-1]-1][sorteoenpalb-1];}
      if (sorteopal == 3) {var colorchosen = paleta3[possorteo[i-1]-1][sorteoenpalb-1];}
      if (sorteopal == 4) {var colorchosen = paleta4[possorteo[i-1]-1][sorteoenpalb-1];}
      document.querySelector(':root').style.setProperty('--colorb'+j+i, colorchosen);  
    }
  }
} 

function corrigecolores() {
  for (const j of elemcolesp) {
    var xcolor3=getComputedStyle(document.documentElement).getPropertyValue('--color'+j+'3');
    var xcolor4=getComputedStyle(document.documentElement).getPropertyValue('--color'+j+'4');
    //console.log('color orig',xcolor3,xcolor4);
    if (calcnormcolor(xcolor3,xcolor4) < 300) {
      const ncolors = arreglacolores(xcolor3,xcolor4);
      document.querySelector(':root').style.setProperty('--color'+j+'3', ncolors.ncolor1);
      document.querySelector(':root').style.setProperty('--color'+j+'4', ncolors.ncolor2);
      //console.log(j,'->',ncolors.ncolor1,ncolors.ncolor2);
    };
  }
}
function calcnormcolor(color1,color2) {
  var colorv1=getRGBValue(color1);
  var colorv2=getRGBValue(color2);
  var r1=colorv1.red;
  var r2=colorv2.red;
  var g1=colorv1.green;
  var g2=colorv2.green;
  var b1=colorv1.blue;
  var b2=colorv2.blue;
  var normcolor1=Math.abs(r1-r2)+Math.abs(g1-g2)+Math.abs(b1-b2);
  var normcolor2=Math.abs(r1+g1+b1-r2-g2-b2);
  normcolor=Math.min(normcolor1,normcolor2);
  return normcolor;
}

function arreglacolores(color1,color2) {
  var colorv1=getRGBValue(color1);
  var colorv2=getRGBValue(color2);
  var r1=colorv1.red;
  var r2=colorv2.red;
  var g1=colorv1.green;
  var g2=colorv2.green;
  var b1=colorv1.blue;
  var b2=colorv2.blue;
  var nrgb12;
  kk=encontrarMNmp(-r1/(r2-r1),-g1/(g2-g1),-b1/(b2-b1),(255-r1)/(r2-r1),(255-g1)/(g2-g1),(255-b1)/(b2-b1));
  k1=kk[0]
  k2=kk[1];
  nr1=r1+k1*(r2-r1);
  nr2=r1+k2*(r2-r1);
  ng1=g1+k1*(g2-g1);
  ng2=g1+k2*(g2-g1);
  nb1=b1+k1*(b2-b1);
  nb2=b1+k2*(b2-b1);
  nrgb12=(nr1+ng1+nb1)-(nr2+ng2+nb2);
  if (nrgb12 < 0) {
    ncolor1='rgb('+ Math.round(nr1/3) + ',' + Math.round(ng1/3) +',' + Math.round(nb1/3) +')';
    ncolor2='rgb('+ Math.round(nr2) + ',' + Math.round(ng2) +',' + Math.round(nb2) +')';
  }
  else {
    ncolor1='rgb('+ Math.round(nr1) + ',' + Math.round(ng1) +',' + Math.round(nb1) +')';
    ncolor2='rgb('+ Math.round(nr2/3) + ',' + Math.round(ng2/3) +',' + Math.round(nb2/3) +')';
  }
  return { ncolor1, ncolor2 };
}

function getRGBValue(rgb) { 
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (match) {
    const red = parseInt(match[1], 10);
    const green = parseInt(match[2], 10);
    const blue = parseInt(match[3], 10);
    return { red, green, blue };
  }
  return null;
}

function encontrarMNmp(num1, num2, num3, num4, num5, num6) {
  const numeros = [num1, num2, num3, num4, num5, num6];
  const negativos = numeros.filter(num => num <= 0);
  const mayorNegativo = Math.max(...negativos, -Infinity);
  var menorPositivo;
  if (mayorNegativo == 0) {
    const positivos = numeros.filter(num => num > 0);
    menorPositivo = Math.min(...positivos, Infinity);
  }
  else {
    const positivos = numeros.filter(num => num >= 0);
    menorPositivo = Math.min(...positivos, Infinity);
  }
  return [mayorNegativo, menorPositivo];
}

function eligecoloresesp() {
 const paleta1 = [
   ['rgb(0,0,0)','rgb(63,0,0)','rgb(0,0,63)','rgb(31,0,31)','rgb(63,0,31)','rgb(31,0,63)','rgb(31,31,31)','rgb(63,0,63)','rgb(63,31,63)'],
   ['rgb(255,255,255)','rgb(255,191,191)','rgb(191,191,255)','rgb(255,191,255)','rgb(255,191,223)','rgb(223,191,255)','rgb(223,223,223)','rgb(255,255,191)','rgb(191,255,255)'],
   ['rgb(255,0,0)','rgb(0,0,255)','rgb(255,0,127)','rgb(127,0,255)','rgb(255,0,191)','rgb(191,0,255)','rgb(255,0,255)','rgb(191,0,191)','rgb(127,0,127)'],
   ['rgb(63,63,63)','rgb(127,127,127)','rgb(191,191,191)','rgb(159,127,159)','rgb(159,127,127)','rgb(127,127,159)','rgb(127,95,127)','rgb(127,95,95)','rgb(95,95,127)']
 ];
 const paleta2 = [
   ['rgb(0,0,0)','rgb(31,31,31)','rgb(31,31,63)','rgb(31,0,31)'],
   ['rgb(255,255,255)','rgb(191,191,191)','rgb(191,191,255)','rgb(255,191,255)'],
   ['rgb(255,0,0)','orange','tomato','maroon'],
   ['rgb(127,127,127)','rgb(127,159,127)','rgb(159,127,159)','rgb(127,95,127)']
 ];
 sorteopal = Math.floor(Math.random() * 2 + 1); //elegir una paleta
//para elementos no especiales con texto
 for (const j of elemcolnoesp) {
  var possorteo=shuffle(orden);
  for (i = 1; i < 5; i++) {
    //color principal
    var sorteoenpal = Math.floor(Math.random() * nsubpal[sorteopal-1] + 1);
    if (sorteopal == 1) {var colorchosen = paleta1[possorteo[i-1]-1][sorteoenpal-1];}
    if (sorteopal == 2) {var colorchosen = paleta2[possorteo[i-1]-1][sorteoenpal-1];}
    document.querySelector(':root').style.setProperty('--color'+j+i, colorchosen);  
    //color secundario
    var sorteoenpalb = Math.floor(Math.random() * nsubpal[sorteopal-1] + 1);
    if (sorteopal == 1) {var colorchosen = paleta1[possorteo[i-1]-1][sorteoenpalb-1];}
    if (sorteopal == 2) {var colorchosen = paleta2[possorteo[i-1]-1][sorteoenpalb-1];}
    document.querySelector(':root').style.setProperty('--colorb'+j+i, colorchosen);  
  }
}
//para elementos especiales con texto
 for (const j of elemcolesp) {
   var possorteo1=shuffle(ordens2);
   var possorteo2=shuffle(ordens1);
   var possorteo=possorteo1.concat(possorteo2);
   for (i = 1; i < 5; i++) {
      //color principal
      var sorteoenpal = Math.floor(Math.random() * nsubpal[sorteopal-1] + 1);
      if (sorteopal == 1) {var colorchosen = paleta1[possorteo[i-1]-1][sorteoenpal-1];}
      if (sorteopal == 2) {var colorchosen = paleta2[possorteo[i-1]-1][sorteoenpal-1];}
      document.querySelector(':root').style.setProperty('--color'+j+i, colorchosen);  
      //color secundario
      var sorteoenpalb = Math.floor(Math.random() * nsubpal[sorteopal-1] + 1);
      if (sorteopal == 1) {var colorchosen = paleta1[possorteo[i-1]-1][sorteoenpalb-1];}
      if (sorteopal == 2) {var colorchosen = paleta2[possorteo[i-1]-1][sorteoenpalb-1];}
      document.querySelector(':root').style.setProperty('--colorb'+j+i, colorchosen);  
    }
 }
} 

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}