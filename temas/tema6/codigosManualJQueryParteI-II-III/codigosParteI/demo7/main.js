$(function () {
	$("#pilallamadas").click(function(event){
		event.preventDefault();
		$("#micapa").fadeOut(2000,function(){
            $("#micapa").css({top: 300, left:200});
            $("#micapa").fadeIn(2000);
        });
	});
});