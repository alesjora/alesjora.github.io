{
    window.addEventListener("load", init);
    let elementoMenu;
    let myTopnav;

    function init() {
        myTopnav = document.getElementById("myTopnav");
        flechaAbajo = document.getElementById("flechaAbajo");
        elementoMenu = document.getElementById("abrirMenu");
        elementoMenu.addEventListener("click", funcionResponsive);
        
    }

    function funcionResponsive() {
        if (myTopnav.className === "topnav") {
            myTopnav.className += "responsive";
        } else {
            myTopnav.className = "topnav";
        }

    }

    $(function() {
        $("#flechaAbajo").click(function () {
            $('html,body').animate({
                scrollTop: $("main").offset().top
            }, 1000);
        });
    });
    $(function() {
        let formularioBusqueda = $("#filtrosBusqueda");
        $("#mostrarFiltros").click(function () {
            if(this.innerHTML === "Mostrar filtros"){
                formularioBusqueda.show('fadein');
                this.innerHTML = "Ocultar filtros"
            } else {
                formularioBusqueda.hide('fadeout');
                this.innerHTML = "Mostrar filtros"
            }
        });
    });
}