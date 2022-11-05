'use strict';
//console.log('hello3');
let contador = preguntas.length - 1;
let score = 0;
console.log(contador);

function buscarPregArr() {
    //cuando haya que hacer seleccion previa de varias preguntas al azar
}

function mostrarPregHTML(contador) {

    let laPregunta = preguntas[contador].mostrarPregunta();
    console.log("laPregunta", laPregunta);

    document.getElementById("final").style.display = "none";

    document.getElementById("preguntas").innerHTML = laPregunta;
    document.getElementById("resultado").innerHTML = " ";
    document.getElementById("explicacion").innerHTML = " ";

    document.getElementById("comprobarBtn").disabled = false;
    document.getElementById("nextBtn").disabled = true;
}



function evaluarRespUser() {
    let respuestaUsuario, respuestaCorrecta, mensajeResultado;

    respuestaCorrecta = preguntas[contador].correct;

    //En el caso de las opciones hay que leer el pseudo elemento checked de entre todas
    //respuestaUsuario = document.getElementById("qOpciones").innerHTML = document.querySelector("input[name='opciones']:checked").value;
    respuestaUsuario = document.querySelector("input[name='opciones']:checked");

    console.log("respuestaCorrecta, respuestaUsuario", respuestaCorrecta, respuestaUsuario);

    if (respuestaUsuario == null) {
        document.getElementById("resultado").innerHTML ="Por favor, selecciona una respuesta.";
    } else {

        // acertado o no acertado + puntuación
        if (respuestaUsuario.value == respuestaCorrecta) {
            score++;
            mensajeResultado = "Respuesta correcta, bien hecho!!!";
        } else {
            mensajeResultado = "Respuesta incorrecta :( ";
        }

        // resolucion y explicacion aclaratoria
        document.getElementById("resultado").innerHTML = mensajeResultado;
        document.getElementById("explicacion").innerHTML = preguntas[contador].hint;

        document.getElementById("comprobarBtn").disabled = true;
        document.getElementById("nextBtn").disabled = (contador <= -1) ? true : false;

        //document.getElementById("nextBtn").disabled = false;

        console.log("score", score)
        return score;
    }
}



mostrarPregHTML(contador);



function borrarPreguntaActual() {
    //borrar pregunta y todo actual, guardar score
}


function avanzar() {
    //contador --
    contador--;
    console.log(contador);

    if (contador >= 0) {
        //mostrar nueva pregunta
        mostrarPregHTML(contador);
    } else {
        document.getElementById("final").style.display = "block";
        document.getElementById("final").innerHTML = "Has acertado " + score + " de un total de " + preguntas.length + " preguntas."

        document.getElementById("preguntas").style.display = "none";
        document.getElementById("resultado").style.display = "none";
        document.getElementById("explicacion").style.display = "none";
        document.getElementById("comprobarBtn").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";
    }


}