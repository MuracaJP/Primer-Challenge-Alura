/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

//Validar que el texto cumpla las reglas
function validarCaracteres(msjIngresado){

    if (msjIngresado.length==0){

        alert("Introduzca su mensaje");
        return false;

    } else{    

        for(var i=0;i<msjIngresado.length;i++){

            var msjIngresadoAscii= msjIngresado.charCodeAt(i);

            if(msjIngresadoAscii<96 || msjIngresadoAscii>122 ){

                if(msjIngresadoAscii!=32){
                    alert("El mensaje no puede contener caracteres especiales, acento y mayúsculas");
                    return false;
                }
            }                                            
        }
    }    
}

//Al clickear el btn encriptar se ejecuta la función encriptar

var botonEncriptar = document.querySelector("#encriptar");

botonEncriptar.addEventListener("click",function(event){

    var cuadroTexto = document.querySelector("#msjIngresado");
    var texto = cuadroTexto.value;

    validarCaracteres(texto);

    var msjEncriptado = encriptar(texto);
    document.getElementById("msjResultado").value = msjEncriptado;
    
    limpiarCampo(cuadroTexto);
    return;
});

//Al clickear el btn desencriptar se ejecuta la función desencriptar

var botonDesencriptar = document.querySelector("#desencriptar");

botonDesencriptar.addEventListener("click",function(){

    var cuadroTexto = document.querySelector("#msjIngresado");
    var texto = cuadroTexto.value;

    validarCaracteres(texto);

    var msjDesencriptado = desencriptar(texto);
    document.getElementById("msjResultado").value = msjDesencriptado;
 
    limpiarCampo(cuadroTexto);  
    return;
});

//Al clikear el boton copiar se ejecuta la función copiar

var botonCopiar = document.querySelector("#copiar");
botonCopiar.addEventListener("click",function(){

    var cuadroTexto = document.querySelector("#msjResultado");
    var texto = cuadroTexto.value;
  
    validarCaracteres(texto)
    copiar();

    limpiarCampo(cuadroTexto);  
    return;
});

function encriptar(msjIngresado){
   var msjIngresado = msjIngresado.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
   return msjIngresado;   
}

function desencriptar(msjIngresado){
    var msjDesencriptado = msjIngresado.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
   return msjDesencriptado;
}

//Copia el texto al portapapeles
function copiar(){
    var textCopy = document.getElementById("msjResultado");
    textCopy.select(); //selecciona el texto
    document.execCommand("copy");//copio el texto.
}

//Resetea el campo de texto
function limpiarCampo(cuadroTexto){
    cuadroTexto.value="";
}

