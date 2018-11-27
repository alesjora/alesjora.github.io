/**
 * Script truncar cadena 
 * @author José Rafael Álvarez Espino
 */

{
    let cadena;
    let longitud;
    let finalCadena;
    let mostrarInformacion;
    let mostrarError;
    function iniciar() {
        cadena = document.getElementById("cadena");
        longitud = document.getElementById("longitud");
        finalCadena = document.getElementById("finalCadena");
        mostrarInformacion = document.getElementById("informacion");
        mostrarError = document.getElementById("error");

        document.getElementById("truncar").addEventListener("click",truncar);
    }

    function truncar(){
        try{
            mostrarInformacion.textContent = cadena.value.truncar(longitud.value,finalCadena.value);
        } catch(e){
            mostrarError.textContent = e.message;
        }
    }

    String.prototype.truncar = function(longitud, finalCadena){
        if(longitud.length == 0 || isNaN(longitud))
            throw new Error("La longitud introducida no es correcta");

        if(longitud > this.length)
            throw new Error("La longitud de truncado es mayor que la cadena a truncar");
        
        finalCadena = finalCadena || "...";

        return this.substring(0,longitud) + finalCadena;

    }

    window.addEventListener("load", iniciar);
}