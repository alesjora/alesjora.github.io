{
    window.addEventListener("load", init);
    let elementoMenu;
    let myTopnav;
    let myHeader;

    function init() {
        myTopnav = document.getElementById("myTopnav");
        myHeader = document.getElementById("myHeader");
        flechaAbajo = document.getElementById("flechaAbajo");
        elementoMenu = document.getElementById("abrirMenu");
        elementoMenu.addEventListener("click", funcionResponsive);
        
    }

    function funcionResponsive() {
        if (myTopnav.className === "topnav") {
            myTopnav.className += "responsive";
        } else {
            myTopnav.className = "topnav";
            myHeader.style.backgroundColor = "transparent";
        }

    }

    $(document).ready(function() {
        $("#flechaAbajo").click(function () {
            $('html,body').animate({
                scrollTop: $("main").offset().top
            }, 500);
        });
    
    });

}