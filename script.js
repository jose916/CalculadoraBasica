var numero = "";
var numMuestra = "";
var numeroAnterior = "";
var operadorActual = "";

function Escribir(P_Numero) {
    numMuestra = numMuestra + P_Numero;
    num1.value = numMuestra;
    document.getElementById("num1").value = numMuestra;
}

function Operador(op) {
    if (numero == "") {
        numeroAnterior = numero;
        operadorActual = op;
        numMuestra += "" + op + "";
        document.getElementById("num1").value = numMuestra;
        numero = "";
    }
}

function Resultado() {
    if (numero !== "" && numeroAnterior !== "" && operador !== "") {
        var resultado;
        var numero1 = parseFloat(numeroAnterior);
        var numero2 = parseFloat(numero)

        switch (operadorActual) {
            case '+':
                resultado = numero1 + numero2;
                break;
            case '-':
                resultado = numero1 - numero2;
                break;
            case '*':
                resultado = numero1 * numero2;
            case '/':
                if (numero2 !== 0) {
                    resultado = numero1 / numero2
                } else {
                    alert("No se puede dividir en 0.");
                 
                }
                break;
        }

        numMuestra += " = " + resultado;
        num1.value = numMuestra;
        document.getElementById("num1").value = numMuestra;
        

        numero = resultado.toString();
        numeroAnterior = "";
        operadorActual = "";
    }
}
