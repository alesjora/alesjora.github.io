/**
 * Script calculadora
 * Autor: José Rafael Álvarez Espino
 */

/**
 * Calculadora
 * */

{
    let inputMuestra;
    let valor1, valor2;
    let sumar, restar, multiplicar, dividir, nuevoValor;


    function iniciar() {
        let botones = ['CE', 'DEL', '%', '+', '7', '8', '9', '-', '4', '5', '6', 'X', '1', '2', '3', '/', '0', '+/-', ',', '='];
        crearDivPadre();
        crearBotones(botones);
        inputMuestra = document.getElementById("inputMuestra");
        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("click", comportamiento);
        }
    }

    function comportamiento() {
        let valor = this.value;
        switch (valor) {
            case "0":
                if (nuevoValor) {
                    inputMuestra.value = valor;
                    nuevoValor = false;
                } else if (inputMuestra.value != 0 || inputMuestra.value.length == 0 || inputMuestra.value.includes("."))
                    inputMuestra.value += valor;
                break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if (inputMuestra.value == 0 && inputMuestra.value.length <= 1 || nuevoValor)
                    inputMuestra.value = valor;
                else
                    inputMuestra.value += valor;
                nuevoValor = false;
                break;
            case "+/-":
                if (inputMuestra.value > 0)
                    inputMuestra.value = -Math.abs(inputMuestra.value);
                else
                    inputMuestra.value = Math.abs(inputMuestra.value);
                break;
            case "DEL":
                inputMuestra.value = inputMuestra.value.substring(0, inputMuestra.value.length - 1);
                break;
            case ",":
                if (!inputMuestra.value.includes("."))
                    inputMuestra.value += ".";
                break;
            case "CE":
                inputMuestra.value = 0;
            case "+":
                valor1 = inputMuestra.value;
                sumar = true;
                restar = false;
                multiplicar = false;
                dividir = false;
                nuevoValor = true;
                break;
            case "-":
                valor1 = inputMuestra.value;
                sumar = false;
                restar = true;
                multiplicar = false;
                dividir = false;
                nuevoValor = true;
                break;
            case "X":
                valor1 = inputMuestra.value;
                sumar = false;
                restar = false;
                multiplicar = true;
                dividir = false;
                nuevoValor = true;
                break;
            case "/":
                valor1 = inputMuestra.value;
                sumar = false;
                restar = false;
                multiplicar = false;
                dividir = true;
                nuevoValor = true;
                break;
            case "=":
                if ((sumar || restar || multiplicar || dividir) && !nuevoValor) {
                    valor2 = inputMuestra.value;
                    calcularOperacion();
                }
        }
    }

    function calcularOperacion() {
        if (sumar) {
            inputMuestra.value = parseFloat(valor1) + parseFloat(valor2);
            sumar = false;
        } else if (restar) {
            inputMuestra.value = valor1 - valor2;
            restar = false;
        } else if (multiplicar) {
            inputMuestra.value = valor1 * valor2;
            multiplicar = false;
        } else {
            inputMuestra.value = valor1 / valor2;
            dividir = false;
        }
        valor1 = 0;
        valor2 = 0;
    }

    function crearBotones(botones) {
        let input;
        let divPadre = document.getElementById('divPadre');
        let inputText = document.createElement('input');
        inputText.type = 'text';
        inputText.id = 'inputMuestra';
        inputText.style.width = '226px';
        inputText.style.height = '30px';
        inputText.style.margin = '5px';
        inputText.style.textAlign = 'right';
        divPadre.appendChild(inputText);
        divPadre.appendChild(document.createElement('br'));
        for (let i = 1; i <= botones.length; i++) {
            input = document.createElement('input');
            input.type = 'button';
            input.value = botones[i - 1];
            input.id = botones[i - 1];
            input.style.height = '50px';
            input.style.width = '50px';
            input.style.margin = '5px';
            input.style.borderRadius = '5px';
            divPadre.appendChild(input);
            if (i % 4 == 0)
                divPadre.appendChild(document.createElement('br'));
        }
    }

    function crearDivPadre() {
        let div = document.createElement('div');
        div.id = 'divPadre';
        div.style.backgroundColor = '#F57054'
        div.style.width = '245px';
        document.body.appendChild(div);
    }

    window.addEventListener("load", iniciar);
}