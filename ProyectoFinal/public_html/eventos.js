function rosa(){
    document.getElementById("titulocontenido").style.color="hotpink";
}
var dos= document.getElementById("buttoncolor");
dos.addEventListener("click",rosa);
function negro(){
    document.getElementById("titulocontenido").style.color="black";
}
var uno= document.getElementById("buttoncolor2");
uno.addEventListener("click",negro);

function validaSubmite(){
        if(document.miFormulario.nombre.value==="" || document.miFormulario.contraseña.value===""){
        alert("debes rellenar el formulario");
    }else{
        document.miFormulario.submit();
            }
        }
            function mostrarimg(){
                imagen2=document.getElementById("im1");
            imagen2.src="cartel_oferta.jpg";
            }
            function mostrarpimg(){
                imagen1=document.getElementById("im1");
                imagen1.src="oferta.jpg";
            }