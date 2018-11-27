/**
 * Script sin array 
 * @author José Rafael Álvarez Espino
 */

{
    
    function iniciar() {
        let array = [1,2,3,4,5,3,6,7,8,3,9,3];
        let elementoAQuitar = 3;
        console.log("Array antes de ser procesado: "+array);
        console.log("Elemento a quitar: "+elementoAQuitar);
        array = array.sin(elementoAQuitar);
        console.log("Array después de ser procesado: "+array);
    }

    Array.prototype.sin = function(numero){
        return this.filter(function(elemento){
            return elemento != numero;
        });
    }

    window.addEventListener("load", iniciar);
}