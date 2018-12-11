{
    // let inputNombre;
    // let errorNombre;
    // let inputEdad;
    // let errorEdad;

    // let errorSexo;
    // let inputDNI;
    // let errorDNI;
    // let inputCorreo;
    // let errorCorreo;
    // let inputFechaNacimiento;
    // let errorFechaNacimiento;
    // let inputTelefono;
    // let errorTelefono;
    // let inputCuentaCorriente;
    // let errorCuentaCorriente;
    // let inputDireccionWeb;
    // let errorDireccionWeb;

    let patrones = {
        nombre: [
            /^([A-Z][a-z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/,
            "Comienza por mayúsculas, al menos nombre y apellido"
        ],
        edad: [
            /^[/\d]{1,}$/,
            "La edad debe de ser un número mayor que 0"
        ],
        dni: [
            /^([0-9]{8})([A-Z(^IÑOU)]$)/i,
            ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
            ,"Formato válido 12345678Z"
        ],
        email: [
            /^[\w]+@{1}[\w]+\.[a-z]{2,}/i,
            "Formato de email no válido"
        ],
        fecha: [
            /^\d{2}([-/ ])\d{2}\1\d{4}$/,
            "Formatos válidos: dd/mm/YYYY, dd mm YYYY, dd-mm-YYYY"
        ],
        telefono: [
            /^\d{9}$/,
            "Error, formato correcto: Ejemplo 111222333"
        ],
        cuentaCorriente: [
            /^[\d]{20}$|^[\d]{4}([-/ ])[\d]{4}\1[\d]{2}\1[\d]{10}$/,
            "La cuenta corriente contiene 20 números, pueden ser seguidos o del formato: xxxx-xxxx-xx-xxxxxxxxxx / xxxx xxxx xx xxxxxxxxxx"
        ],
        direccionWeb: [
            /^http[s]?\:\/{2}[a-z0-9\.-]+\.[a-z]{2,}/gi,
            "Error, formato correcto: https://www.google.es o http://www.google.es"
        ]
    };

    let tester = {
        validarNombre(nombre) {
            if (!patrones.nombre[0].test(nombre))
                return patrones.nombre[1];
            return "";
        },
        validadEdad(edad){
            if (edad < 1 || !patrones.edad[0].test(edad))
                return patrones.edad[1];
            return "";
        },
        validarDNI(dni){
            if (!patrones.dni[0].test(dni))
                return patrones.dni[2];
            else{
                let [,numeroDNI,letraDNI] = patrones.dni[0].exec(dni);
                if(patrones.dni[1][numeroDNI % 23] != letraDNI)
                    return "Letra incorrecta";
                return "";
            }
        },
        validarEmail(email){
            if (!patrones.email[0].test(email))
                return patrones.email[1];
            return "";
        },
        validarFechaNacimiento(fechaNacimiento){
            if (!patrones.fecha[0].test(fechaNacimiento))
                return patrones.fecha[1];
            return "";
        },
        validarTelefono(telefono){
            if (!patrones.telefono[0].test(telefono))
                return patrones.telefono[1];
            return "";
        },
        validarCuentaCorriente(cuentaCorriente){
            if (!patrones.cuentaCorriente[0].test(cuentaCorriente))
                return patrones.cuentaCorriente[1];
            return "";
        },
        validarDireccionWeb(direccionWeb){
            if (!patrones.direccionWeb[0].test(direccionWeb))
                return patrones.direccionWeb[1];
            return "";
        },
        validarSexo(sexos){
            let seleccionado;
            for(let sexo of sexos){
                if(sexo.checked)
                    seleccionado = true;
                alert(sexo.value)
            }
              if(!seleccionado) 
                return "Debes seleccionar una opción.";
              return "";
        }
    }

    function init() {
        //Entrada de datos
        let inputNombre = document.getElementById("inputNombre");
        let inputEdad = document.getElementById("inputEdad");
        let radioButtonSexo = document.getElementsByTagName("sexo");
        let inputDNI = document.getElementById("inputDNI");
        let inputCorreo = document.getElementById("inputCorreo");
        let inputFechaNacimiento = document.getElementById("inputFechaNacimiento");
        let inputTelefono = document.getElementById("inputTelefono");
        let inputCuentaCorriente = document.getElementById("inputCuentaCorriente");
        let inputDireccionWeb = document.getElementById("inputDireccionWeb");
        let inputEnviar = document.getElementById("enviar");

        //Salida de información
        let errorNombre = document.getElementById("errorNombre");
        let errorEdad = document.getElementById("errorEdad");
        let errorSexo = document.getElementById("errorSexo");
        let errorDNI = document.getElementById("errorDNI");
        let errorCorreo = document.getElementById("errorCorreo");
        let errorFechaNacimiento = document.getElementById("errorFechaNacimiento");
        let errorTelefono = document.getElementById("errorTelefono");
        let errorCuentaCorriente = document.getElementById("errorCuentaCorriente");
        let errorDireccionWeb = document.getElementById("errorDireccionWeb");

        //Asignamos los eventos a las funciones
        inputNombre.addEventListener("blur", validarNombre.bind(null,inputNombre,errorNombre));
        inputEdad.addEventListener("blur", validarEdad.bind(null,inputEdad,errorEdad));
        inputDNI.addEventListener("blur", validarDNI.bind(null,inputDNI,errorDNI));
        inputCorreo.addEventListener("blur", validarEmail.bind(null,inputCorreo,errorCorreo));
        inputFechaNacimiento.addEventListener("blur", validarFechaNacimiento.bind(null,inputFechaNacimiento,errorFechaNacimiento));
        inputTelefono.addEventListener("blur", validarTelefono.bind(null,inputTelefono,errorTelefono));
        inputCuentaCorriente.addEventListener("blur", validarCuentaCorriente.bind(null,inputCuentaCorriente,errorCuentaCorriente));
        inputDireccionWeb.addEventListener("blur", validarDireccionWeb.bind(null,inputDireccionWeb,errorDireccionWeb));
        inputEnviar.addEventListener("click",comprobarTodo.bind(null,inputNombre,errorNombre,inputEdad,errorEdad,radioButtonSexo,errorSexo,inputDNI,errorDNI,
            inputCorreo,errorCorreo,inputFechaNacimiento,errorFechaNacimiento,inputTelefono,errorTelefono,inputCuentaCorriente,errorCuentaCorriente,inputDireccionWeb,errorDireccionWeb
            ));
    }

    function validarNombre(nombre, errorNombre) {
        errorNombre.textContent = tester.validarNombre(nombre.value);
    }
    function validarEdad(edad, errorEdad) {
        errorEdad.textContent = tester.validadEdad(edad.value);
    }
    function validarDNI(dni, errorDNI) {
        errorDNI.textContent = tester.validarDNI(dni.value);
    }
    function validarEmail(email, errorEmail) {
        errorEmail.textContent = tester.validarEmail(email.value);
    }
    function validarFechaNacimiento(fechaNacimiento, errorFechaNacimiento) {
        errorFechaNacimiento.textContent = tester.validarFechaNacimiento(fechaNacimiento.value);
    }
    function validarTelefono(telefono, errorTelefono) {
        errorTelefono.textContent = tester.validarTelefono(telefono.value);
    }
    function validarCuentaCorriente(cuentaCorriente, errorCuentaCorriente) {
        errorCuentaCorriente.textContent = tester.validarCuentaCorriente(cuentaCorriente.value);
    }
    function validarDireccionWeb(direccionWeb, errorDireccionWeb) {
        errorDireccionWeb.textContent = tester.validarDireccionWeb(direccionWeb.value);
    }
    function validarSexo(radioButtonSexo, errorSexo){
        errorSexo.textContent = tester.validarSexo(radioButtonSexo);
    }
    function comprobarTodo(inputNombre,errorNombre,inputEdad,errorEdad,radioButtonSexo, errorSexo, inputDNI,errorDNI,inputCorreo,errorCorreo,inputFechaNacimiento,errorFechaNacimiento,inputTelefono,errorTelefono,inputCuentaCorriente,errorCuentaCorriente,inputDireccionWeb,errorDireccionWeb){
        validarNombre(inputNombre,errorNombre);
        validarEdad(inputEdad,errorEdad);
        validarSexo(radioButtonSexo,errorSexo);
        validarDNI(inputDNI,errorDNI);
        validarEmail(inputCorreo,errorCorreo);
        validarFechaNacimiento(inputFechaNacimiento,errorFechaNacimiento);
        validarTelefono(inputTelefono,errorTelefono);
        validarCuentaCorriente(inputCuentaCorriente,errorCuentaCorriente);
        validarDireccionWeb(inputDireccionWeb,errorDireccionWeb);
    }

    window.addEventListener("load", init);
}