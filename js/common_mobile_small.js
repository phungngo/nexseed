$(".menu_toggle").click(function(){
	var w_recent = document.documentElement.clientWidth;	
	
    if(w_recent<=960){							 
    $(this).toggleClass("open");	
	$(".sub_menu span.icon_active1,.sub_menu span.icon_active2,.sub_menu span.icon_active3,.sub_menu span.icon_active4,.sub_menu span.icon_active5,.sub_menu span.icon_active6").removeClass("active_background");
	$(".menu1,.menu2,.menu3,.menu4,.menu5,.menu6").addClass("review_group4");
	$(".sub_menu span.icon_active1,.sub_menu span.icon_active2,.sub_menu span.icon_active3,.sub_menu span.icon_active4,.sub_menu span.icon_active5,.sub_menu span.icon_active6").addClass("review_group4");	
	if ($(".menu_toggle").hasClass("open")) {
		$("nav .group4").slideDown(); 
		$(".sub_menu span.icon_active1,.sub_menu span.icon_active2,.sub_menu span.icon_active3,.sub_menu span.icon_active4,.sub_menu span.icon_active5,.sub_menu span.icon_active6").addClass("active_background");
		$(".sub_menu span.icon_active1,.sub_menu span.icon_active2,.sub_menu span.icon_active3,.sub_menu span.icon_active4,.sub_menu span.icon_active5,.sub_menu span.icon_active6").removeClass("review_group4");	
	}
	else {
		$("nav .group4").slideUp(); 
		$(".menu1,.menu2,.menu3,.menu4,.menu5,.menu6").removeClass("review_group4");
	}
	}
	
});
	
$('.main_menu').find('> li').click(function() {
	var w_recent = document.documentElement.clientWidth;	
	if(w_recent<=960){
		$('.main_menu> li').not(this).find('ul').slideUp();
		$(this).toggleClass("active");
		$('.main_menu> li').not(this).removeClass("active");
		$(this).find('ul').stop(true, true).slideToggle();
		$(this).find('.sub_menu span').toggleClass("active_background");
		$(this).find('span').toggleClass("active_click");
		$('.main_menu> li').not(this).find("span").removeClass("active_hover");
		$('.main_menu> li').not(this).find("span").removeClass("active_click");
		//return false;
	}
	/*else {
		$('.main_menu> li').not(this).find('ul').hide();
		$(this).find('ul').stop(true, true).show();
		$(this).toggleClass("active");
		$('.main_menu> li').not(this).removeClass("active");
		$(this).find('.sub_menu span').toggleClass("active_background");
		$(this).find('span').toggleClass("active_hover");
		$('.main_menu> li').not(this).find("span").removeClass("active_hover");
		$('.main_menu> li').not(this).find("span").removeClass("active_click");
	}*/
});
/*---------------------/menu--------------------*/

$(document).ready(function() {    

});

$(window).resize(function(){
	var w_recent = document.documentElement.clientWidth;
	/*if(w_recent<=960){
		$("nav .group4").hide();
		$(".level1").hide();
		$(".level2").show();
		$(".sub_menu").removeClass("active");
		$('.main_menu').find('> li').find('span').removeClass("active_click");
		$('.main_menu').find('> li').find('.sub_menu span').removeClass("active_background");	
	}
	else {
		$("nav .group4").show();
		$(".level1").hide();
		$(".level2").show();
		$('.main_menu').find('> li').find('span').removeClass("active_click");
		$('.main_menu').find('> li').find('.sub_menu span').removeClass("active_background");
		$(".sub_menu").removeClass("active");	
				
	}
	
	$(".menu_toggle").removeClass("open");*/
	
});
