//script code 
/*----------------------menu--------------------*/
/*$(".sub_menu").hover(function(){
	var w_recent = document.documentElement.clientWidth;	
	
    if(w_recent>=961){
		$(this).find(".level1").toggle();
		$(this).toggleClass("active");
		$(".sub_menu span").toggleClass("active_background");	
		$("this").find(".sub_menu span").toggle();
		$(this).find("span").toggleClass("active_hover");
		$(this).find("span").removeClass("active_click");		
	}
})*/

/*----------------------menu--------------------*/
$(".menu_toggle").click(function(){
	
	var w_recent = document.documentElement.clientWidth;	
	
    if(w_recent<=960){							 
    $(this).toggleClass("open");	
	if ($(".menu_toggle").hasClass("open")) {
		$("nav .group4").slideDown();
		$('.main_menu').find('> li').find('.sub_menu span').addClass("active_background"); 		
	}
	else {
		$("nav .group4").slideUp(); 
		
	}
	}
});


	
$('.main_menu').find('> li').click(function() {
	
	var w_recent = document.documentElement.clientWidth;	
	if(w_recent<=960){
		$('.main_menu> li').not(this).find('ul').slideUp(10);
		$(this).find('ul').stop(true, true).slideToggle(10);
		$(this).toggleClass("active");
		$('.main_menu> li').not(this).removeClass("active");
		$(this).find('span').addClass("active_background");
		$(this).find('span').toggleClass("active_click");
		$('.main_menu> li').not(this).find("span").removeClass("active_click");
	}
	else {
		$('.main_menu> li').not(this).find('ul').hide();
		$(this).find('ul').stop(true, true).show();
		if($(this).hasClass("active")){
			$(this).find('ul').stop(true, true).hide();			
		}
		$(this).toggleClass("active");
		$('.main_menu> li').not(this).removeClass("active");
		$(this).find('.sub_menu span').addClass("active_background");
		$(this).find('span').toggleClass("active_hover");
		$('.main_menu> li').not(this).find("span").removeClass("active_hover");
		$('.main_menu> li').not(this).find("span").removeClass("active_click");
	}
});


function menu_resize() {
	var w_recent = document.documentElement.clientWidth;
	if($("nav .group3").css("display")=="none"){
		if(w_recent<=960){
			$("nav .group4").css("display","none");
			$(".level1").css("display","none");
			$(".sub_menu").removeClass("active");
			$('.main_menu').find('> li').find('span').removeClass("active_click");
			$('.main_menu').find('> li').find('.sub_menu span').addClass("active_background");	
			$(".menu_toggle").removeClass("open");			
		}	
		if(w_recent>=961){
			$("nav .group4").css("display","block");
			$(".level1").css("display","none");
			$(".level2").css("display","block");
			$('.main_menu').find('> li').find('span').removeClass("active_click");
			$('.main_menu').find('> li').find('span').removeClass("active_hover");
			$('.main_menu').find('> li').find('.sub_menu span').addClass("active_background");
			$(".sub_menu").removeClass("active");	
		}
	}
				
}

/*---------------------/menu--------------------*/



/*----------------------scrollTop--------------------*/
function scrollTop() {
	var topBtn = $('#page-top');	
	
	topBtn.hide();
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			topBtn.fadeIn("fast");	
			$("#page-top").css("bottom","68px");		
		} 		
		else {
			topBtn.fadeOut("fast");
		}
	});

    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, "fast");
		return false;
    });
};

/*----------------------/scrollTop--------------------*/


$(document).ready(function() {    
	scrollTop();
});


$(window).resize(function(){
	menu_resize();
	
});
