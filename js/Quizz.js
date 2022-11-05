class Quizz {

    constructor(num, textQu, opA, opB, opC, opD, correct, hint) {
        this.num = num;
        this.textQu = textQu;
        this.opA = opA;
        this.opB = opB;
        this.opC = opC;
        this.opD = opD;
        this.correct = correct;
        this.hint = hint;
    }

    getTextQuestion() {
        return this.textQu;
    }
    getOpA() {
        return this.opA;
    }
    getOpB() {
        return this.opB;
    }
    getOpC() {
        return this.opC
    }
    getOpD() {
        return this.opD
    }

    getHint() {
        return this.hint
    }

    mostrarPregunta(){
        
        let devuelvePreg = '<p id="preg"><h2>' + this.textQu + '</h2></p>';
        devuelvePreg += '<p><label for="opciones">Selecciona la opción: </label> <br>';
        devuelvePreg += '<input name="opciones" value="A" id="opcionA" type="radio"> <span id="r1">' + this.opA + ' </span> <br>';
        devuelvePreg += '<input name="opciones" value="B" id="opcionB" type="radio"> <span id="r2">' + this.opB + ' </span> <br>';
        devuelvePreg += '<input name="opciones" value="C" id="opcionC" type="radio"> <span id="r3">' + this.opC + ' </span> <br>';
        devuelvePreg += '<input name="opciones" value="D" id="opcionD" type="radio"> <span id="r4">' + this.opD + ' </span> <br>';
        devuelvePreg += '<span id="qOpciones"></span>';
        devuelvePreg += '</p>';

       return devuelvePreg;


    }


    toString() {
        let devuelvePreg = '<p id="preg"><h2>' + this.textQuestion + '</h2></p>';
        devuelvePreg += '<p><label for="opciones">Selecciona la opción: </label>';
        devuelvePreg += '<input name="opciones" value="' + this.opA + '" id="opcionA" type="radio"> <span id="r1"> </span> <br>';
        devuelvePreg += '<input name="opciones" value="' + this.opB + '" id="opcionB" type="radio"> <span id="r2"> </span> <br';
        devuelvePreg += '<input name="opciones" value="' + this.opC + '" id="opcionC" type="radio"> <span id="r3"> </span> <br>';
        devuelvePreg += '<input name="opciones" value="' + this.opD + '" id="opcionD" type="radio"> <span id="r4"> </span> <br>';
        devuelvePreg += '<span id="vOpciones"></span>';
        devuelvePreg += '</p>';

       return devuelvePreg;
    }
}