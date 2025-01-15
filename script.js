var numero = "";
var numeroAntiguo = "";
var operadorNuevo = "";
var expresionTotal = "";
var newValue = "0";



function Escribir(P_Numero) {
    numero += P_Numero;
    expresionTotal += P_Numero;
    document.getElementById("num1").value = expresionTotal;
    actualizarPantalla();
}

function SeleccionarOperacion(op) {
    if (numero !== "") {
        numeroAntiguo = numero;
        operadorNuevo = op;
        expresionTotal += " " + op + " ";
        document.getElementById("num1").value = expresionTotal;
        actualizarPantalla();
        numero = "";
    }
}

function Resultado() {
    if (numero !== "" && numeroAntiguo !== "" && operadorNuevo !== "") {
        var resultado;
        var num1 = parseFloat(numeroAntiguo);
        var num2 = parseFloat(numero);

        switch(operadorNuevo) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '÷':
                if(num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    alert("No se puede dividir por cero");
                    Limpiar();
                    return;
                }
                break;
        }

        expresionTotal += " = " + resultado;
        num1.value = expresionTotal;
        document.getElementById("num1").value = expresionTotal;
        
        numero = resultado.toString();
        numeroAntiguo = "";
        operadorNuevo = "";
    }
}

function Limpiar() {
    expresionTotal = "";
    num1.value = "";
    document.getElementById("num1").value = "";
    numero = "";
    numeroAntiguo = "";
    operadorNuevo = "";
}

function borrarNumero() {
    if (expresionTotal.length > 0) {
        if (expresionTotal.slice(" ")) {
            expresionTotal = expresionTotal.slice(0, -1);
            operadorNuevo = "";
            numero = numeroAntiguo;
            numeroAntiguo = "";
        } else {
            expresionTotal = expresionTotal.slice(0, -1);
            numero = numero.slice(0, -1);
        }
        actualizarPantalla();
    }
}
function actualizarPantalla() {
    document.getElementById("num1").value = expresionTotal;
}