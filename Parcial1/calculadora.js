function sumar() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 + num2);
}

function restar() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 - num2);
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 * num2);
}

function dividir() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    if (num2 !== 0) {
        document.getElementById("resultado").innerHTML = "Resultado: " + (num1 / num2);
    } else {
        document.getElementById("resultado").innerHTML = "No se puede dividir por cero";
    }
}

function raizCuadrada() {
    let num1 = parseFloat(document.getElementById("input1").value);
    if (num1 >= 0) {
        document.getElementById("resultado").innerHTML = "Resultado: " + Math.sqrt(num1);
    } else {
        document.getElementById("resultado").innerHTML = "No se puede calcular la raíz cuadrada de un número negativo";
    }
}

function potencia() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + Math.pow(num1, num2);
}

