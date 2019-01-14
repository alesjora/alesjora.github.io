{
    
    function init(){
        let boton = document.getElementById("boton");
        setTimeout(function(){
            boton.style.opacity = "1";
        },7900);
        let texto1 = document.getElementById("texto1");
        let texto2 = document.getElementById("texto2");
        setTimeout(function(){
            texto1.style.opacity = "1";
        },1999)
        setTimeout(function(){
            texto2.style.opacity = "1";
        },1999);
    }

    window.addEventListener("load",init);
}