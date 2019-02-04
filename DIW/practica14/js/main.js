{
    $(function () {
        let $nav = $("nav");
        let $myTopNav = $("#myTopnav");
        if ($(window).width() > 1023)
            $nav.show();
        $("#abrirMenu").click(abrirCerrarMenu);
        $(window).resize(function () {
            if ($(window).width() > 1023)
                $nav.show();
            else if ($(window).width() < 1024 && $myTopNav.hasClass("topnav"))
                $nav.hide();
        });
        let elemento;
        $("li a").click(function () {
            elemento = $(this).prop("id").split("-")[1];
            scrollHaciaElemento("#" + elemento);
        });
        
        function scrollHaciaElemento(elemento) {
            if ($(window).width() < 1023)
                abrirCerrarMenu();
            setTimeout(function () {
                $('html,body').animate({
                    scrollTop: $(elemento).offset().top
                }, 1000);
            }, 500);
        }

        function abrirCerrarMenu() {
            if ($nav.css("display") === "none") {
                $myTopNav.addClass("topnavresponsive");
                $myTopNav.removeClass("topnav");
                $nav.slideToggle();
            } else {
                $nav.slideToggle();
                $myTopNav.addClass("topnav");
                $myTopNav.removeClass("topnavresponsive");
            }
        }
    });

    $(function () {
        let $this;
        $(".more").click(function (event) {
            event.preventDefault();
            $this = $(this);
            $this.hide("fadeout");
            $this.siblings(".cardTitle").hide("fadeout");
            $this.siblings(".imagenCard").hide("fadeout");
            setTimeout(function () {
                $this.siblings(".resumen").show("fadein");
                $this.siblings('.close').show("fadein");
            }, 100);
        });

        $(".close").click(function (event) {
            event.preventDefault();
            $this = $(this);
            $this.hide("fadeout");
            $this.siblings(".resumen").hide("fadeout");
            $this.siblings('.more').show("fadein");
            $this.siblings(".cardTitle").show("fadein");
            $this.siblings(".imagenCard").show("fadeout");
        });

    });
}