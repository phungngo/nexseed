//script code 
/*----------------------menu--------------------*/
$(".sub_menu").hover(function(){
	var w_recent = document.documentElement.clientWidth;	
	
    if(w_recent>=734){
		$(this).find(".level1").toggle();
		$(this).toggleClass("active");
		$(".sub_menu span").toggleClass("active_background");	
		$("this").find(".sub_menu span").toggle();
		$(this).find("span").toggleClass("active_hover");
		$(this).find("span").removeClass("active_click");
		
	}
})
/*----------------------menu--------------------*/
$(".menu_toggle").click(function(){
	var w_recent = document.documentElement.clientWidth;	
	
    if(w_recent<=733){							 
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
	if(w_recent<=733){
		$('.main_menu> li').not(this).find('ul').slideUp(10);
		$(this).find('ul').stop(true, true).slideToggle(10);
		$(this).find('.sub_menu span').toggleClass("active_background");
		$(this).find('span').toggleClass("active_click");
		$('.main_menu> li').not(this).find("span").removeClass("active_click");
		//return false;
	}
	else {
		$(this).find('span').removeClass("active_click");
		$(this).find('.sub_menu span').removeClass("active_background");		
	}
});
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
	var w_recent = document.documentElement.clientWidth;
	if(w_recent<=733){
		$("html").css("width","100%");
		$("html").css("overflow-x","hidden");
		$("nav .group4").css("display","none");
		$(".level1").css("display","none");
		$(".level2").css("display","block");
		$('.main_menu').find('> li').find('span').removeClass("active_click");
		$('.main_menu').find('> li').find('.sub_menu span').removeClass("active_background");	
	}
	else if(w_recent<=960){
		$("html").css("width","960px");
		$("html").css("overflow-x","scroll");
		$("nav .group4").css("display","block");
		$(".level1").css("display","none");
		$(".level2").css("display","block");
		$('.main_menu').find('> li').find('span').removeClass("active_click");
		$('.main_menu').find('> li').find('.sub_menu span').removeClass("active_background");	
	}
	else {
		$("html").css("width","100%");
		$("html").css("overflow-x","scroll");
		$("nav .group4").css("display","block");
		$(".level1").css("display","none");
		$(".level2").css("display","block");
		$('.main_menu').find('> li').find('span').removeClass("active_click");
		$('.main_menu').find('> li').find('.sub_menu span').removeClass("active_background");	
				
	}
	
	$(".menu_toggle").removeClass("open");
	
});
