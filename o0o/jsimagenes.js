
    var nimg = document.currentScript.getAttribute("nimgpas");   
    if (typeof nimg === "undefined" ) { var nimg = '4'; }

    var ngal = document.currentScript.getAttribute("ngalpas");   
    if (typeof ngal === "undefined" ) { var ngal = '1'; }

    var dvmarco = document.getElementById("divmarco");
    for (var iimg = 1; iimg <= nimg; iimg++) {
        dvmarco.innerHTML += '<img id="c1f'+iimg+'" class="chgimg" src="gll'+ngal+'/c'+ngal+'ff ('+iimg+').jpg" alt="Cua-foto'+iimg+'" onclick="nextimg('+iimg+')">';
    }
  

  function nextimg(ix) {
      let imagen='c1f'+ix;
      if (ix < nimg) {
        var ixs = ix+1;
      } else {
        var ixs = 1;
      }
	  if (typeof myto !== 'undefined') {clearTimeout(myto);}
      rantout=Math.random()*10000+10000;
      myto = setTimeout(function() {nextimg(ixs)},rantout);
      let imagensig='c1f'+ixs;
      let z=document.getElementById(imagen);
      let zsig=document.getElementById(imagensig);
      z.style.zIndex = 3;
      zsig.style.zIndex = 4;
      zsig.style.display = 'block';
      zsig.style.animation = 'aparece 1.5s';
      animaimg(imagensig);
      zsig.replaceWith(zsig.cloneNode(true));
      setTimeout(function() {z.style.display= 'none';},4000);
  }

  function animaimg(imgani) {
      var x=document.getElementById(imgani);
      var natw=x.naturalWidth;
      var nath=x.naturalHeight;
      var viewportw=window.innerWidth;
      var viewporth=window.innerHeight;
      var vwavh=viewportw/viewporth;
      var esc0=Math.random()*0.9+1;
      if (nath/natw < viewporth/viewportw) {
        h0=100*esc0;
        w0=100*esc0*(natw/nath);
        hf=100;
        wf=100*(natw/nath);
      } else {
        h0=100*esc0*(nath/natw)*vwavh;
        w0=100*esc0*vwavh;
        hf=100*(nath/natw)*vwavh;
        wf=100*vwavh;
      }
      var ransensx=Math.round(Math.random())*2-1;
      var ransensy=Math.round(Math.random())*2-1;

      var rann=Math.random()*2-1;
      var rann1x=(Math.cbrt(rann)+1)/2;
      var rann2x=Math.random()*(1-rann1x);
      var rann1y=Math.random();
      var rann2y=Math.random()*(1-rann1y);
      var ranx0=-rann1x*(w0-100*vwavh); 
      var ranxf=-rann2x*(wf-100*vwavh); 
      var rany0=-rann1y*(h0-100); 
      var ranyf=-rann2y*(hf-100); 

      var rantanima=Math.random()*12+8; 
      var rananidir=Math.round(Math.random()*3+0.5);
      x.style.setProperty('--posx0',ranx0+'vh');
      x.style.setProperty('--posy0',rany0+'vh');
      x.style.setProperty('--tamx0',w0+'vh');
      x.style.setProperty('--tamy0',h0+'vh');
      x.style.setProperty('--posx100',ranxf+'vh');
      x.style.setProperty('--posy100',ranyf+'vh');
      x.style.setProperty('--tamx100',wf+'vh');
      x.style.setProperty('--tamy100',hf+'vh');
      x.style.animation = 'mueveimg '+rantanima+'s ease-in-out, aparece 5s';
      x.style.left=ranxf+'vh';
      x.style.top=ranyf+'vh';
      x.style.width=wf+'vh';
      x.style.height=hf+'vh';
      if (rananidir == 1) {
        x.style.left=ranx0+'vh';
        x.style.top=rany0+'vh';
        x.style.width=w0+'vh';
        x.style.height=h0+'vh';
        x.style.animationDirection = 'reverse, normal';
      }
    }
    
    window.onload = function() {
      nranimg=Math.floor(Math.random()*nimg)+1;
      nextimg(nranimg);
    }

