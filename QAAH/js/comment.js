//--------------------------------------js caja comentarios-------------------------------------------//

            var idpost;
            function abrecom(postid) {
              idpost=postid;
              actualizacom();
              xx=document.getElementsByClassName("commentbox")
              for (i = 0; i < xx.length; i++) {
                  var xxx = xx[i];
                  xxx.classList.remove('ddinactive');
                  xxx.classList.add('ddactive');  
                  xxx.replaceWith(xxx.cloneNode(true)); 
              }
            }

            function actualizacom() {
              $.ajax({
                type: "POST",
                url: "comm.html",
                dataType: "html",
                data: { idsub: idpost },
                success : function (dataresult) {
                  $("#incombox").html(dataresult);
                }
              });
            }

            function cierracom(postid) {
              xx=document.getElementsByClassName("commentbox")
              for (i = 0; i < xx.length; i++) {
                  var xxx = xx[i];
                  xxx.classList.remove('ddactive');
                  xxx.classList.add('ddinactive');
                  //xxx.classList.toggle("ddactive");   
                  xxx.replaceWith(xxx.cloneNode(true)); 
              }
            }

            function abreform() {
              xx=document.getElementsByClassName("comformbox")
              for (i = 0; i < xx.length; i++) {
                  var xxx = xx[i];
                  xxx.classList.remove('ddinactive');
                  xxx.classList.add('ddactive');
                  //xxx.classList.toggle("ddactive");   
                  xxx.replaceWith(xxx.cloneNode(true)); 
              }
            }
            function cierraform() {
              xx=document.getElementsByClassName("comformbox")
              for (i = 0; i < xx.length; i++) {
                  var xxx = xx[i];
                  xxx.classList.remove('ddactive');
                  xxx.classList.add('ddinactive');
                  //xxx.classList.toggle("ddactive");   
                  xxx.replaceWith(xxx.cloneNode(true)); 
              }
            }

    $(document).ready(function(){
        $(document).on('submit','#formcom',function(e){
            e.preventDefault();
            var nombresub = $('#nombrein').val();
            var emailsub = $('#emailin').val();
            var comsub = $('#commentin').val();  
            $.ajax({
                type: "POST",
                url: "commadd.html",
                dataType: 'html',
                data: {nombresub: nombresub, comsub: comsub, emailsub: emailsub, idsub: idpost},
                success:function(response) {
                    actualizacom(); 
                    cierraform();
                    if (response.success == true)
                        {
                          console.log("commadd->success",response);
                        }
                    else
                        {
                          console.log("commadd->error",response);
                        }
                }
            })  
  
        });
    });
