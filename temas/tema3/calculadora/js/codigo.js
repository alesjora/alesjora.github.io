/**
 * Script calculadora
 * Autor: José Rafael Álvarez Espino
 */

/**
 * Calculadora
 * */

{

    

    function iniciar() {
        let botones = ['CE', 'DEL', '%', '*', '7', '8', '9', '-', '4', '5', '6', 'X', '1', '2', '3', '/', '0', '+', ',', '='];
        crearDivPadre();
        crearBotones(botones);
    }

    function crearBotones(botones) {
        let input;
        let divPadre = document.getElementById('divPadre');
        let inputText = document.createElement('input');
        inputText.type = 'text';
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
            input.style.height = '50px';
            input.style.width = '50px';
            input.style.margin = '5px';
            input.style.borderRadius = '5px';
            divPadre.appendChild(input);
            if (i % 4 == 0)
                divPadre.appendChild(document.createElement('br'));
        }
    }

    function crearDivPadre(){
        let div = document.createElement('div');
        div.id = 'divPadre';
        div.style.backgroundColor = '#F57054'
        div.style.width = '245px';
        document.body.appendChild(div);
    }

    window.addEventListener("load", iniciar);
}