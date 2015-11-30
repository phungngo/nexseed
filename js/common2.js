//script code 
$(".sub_menu").hover(function(){
	var w_recent = document.documentElement.clientWidth;	
	
    if(w_recent>=734){
		$(this).find(".level1").toggle();
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
	$(".menu1,.menu2,.menu3,.menu4,.menu5,.menu6").removeClass("review_group4");
	$(".sub_menu span.icon_active1,.sub_menu span.icon_active2,.sub_menu span.icon_active3,.sub_menu span.icon_active4,.sub_menu span.icon_active5,.sub_menu span.icon_active6").removeClass("review_group4");
		
	
$('.sub_menu').click(function()
{
	var index = $(this).index()+1;
		
	var w_recent = document.documentElement.clientWidth;	
	
	if(w_recent<=733) {		
		$(".sub_menu span").css("display","block");
		if(index==1){
			$(".menu1").css("display","block");
			$(".sub_menu span.icon_active1").addClass("active_background");
			$(".sub_menu span.icon_active2,.sub_menu span.icon_active3,.sub_menu span.icon_active4,.sub_menu span.icon_active5,.sub_menu span.icon_active6").removeClass("active_background");
			$(".menu2,.menu3,.menu4,.menu5,.menu6").css("display","none");
			$(".sub_menu span.icon_active2,.sub_menu span.icon_active3,.sub_menu span.icon_active4,.sub_menu span.icon_active5,.sub_menu span.icon_active6").css("display","none");
			
		}
		else if(index==2){
			$(".menu2").css("display","block");
			$(".sub_menu span.icon_active2").addClass("active_background");
			$(".sub_menu span.icon_active1,.sub_menu span.icon_active3,.sub_menu span.icon_active4,.sub_menu span.icon_active5,.sub_menu span.icon_active6").removeClass("active_background");
			$(".menu1,.menu3,.menu4,.menu5,.menu6").css("display","none");
			$(".sub_menu span.icon_active1,.sub_menu span.icon_active3,.sub_menu span.icon_active4,.sub_menu span.icon_active5,.sub_menu span.icon_active6").css("display","none");
			
		}
		else if(index==3){
			$(".menu3").css("display","block");
			$(".sub_menu span.icon_active3").addClass("active_background");
			$(".sub_menu span.icon_active1,.sub_menu span.icon_active2,.sub_menu span.icon_active4,.sub_menu span.icon_active5,.sub_menu span.icon_active6").removeClass("active_background");
			$(".menu2,.menu1,.menu4,.menu5,.menu6").css("display","none");
			$(".sub_menu span.icon_active1,.sub_menu span.icon_active2,.sub_menu span.icon_active4,.sub_menu span.icon_active5,.sub_menu span.icon_active6").css("display","none");
			
		}
		else if(index==4){
			$(".menu4").css("display","block");
			$(".sub_menu span.icon_active4").addClass("active_background");
			$(".sub_menu span.icon_active1,.sub_menu span.icon_active2,.sub_menu span.icon_active3,.sub_menu span.icon_active5,.sub_menu span.icon_active6").removeClass("active_background");
			$(".menu2,.menu1,.menu3,.menu5,.menu6").css("display","none");
			$(".sub_menu span.icon_active1,.sub_menu span.icon_active2,.sub_menu span.icon_active3,.sub_menu span.icon_active5,.sub_menu span.icon_active6").css("display","none");
			
		}
		else if(index==5){
			$(".menu5").css("display","block");
			$(".sub_menu span.icon_active5").addClass("active_background");
			$(".sub_menu span.icon_active1,.sub_menu span.icon_active2,.sub_menu span.icon_active3,.sub_menu span.icon_active4,.sub_menu span.icon_active6").removeClass("active_background");
			$(".menu2,.menu1,.menu4,.menu3,.menu6").css("display","none");
			$(".sub_menu span.icon_active1,.sub_menu span.icon_active2,.sub_menu span.icon_active3,.sub_menu span.icon_active4,.sub_menu span.icon_active6").css("display","none");
			
		}
		else if(index==6){
			$(".menu6").css("display","block");
			$(".sub_menu span.icon_active6").addClass("active_background");
			$(".sub_menu span.icon_active1,.sub_menu span.icon_active2,.sub_menu span.icon_active3,.sub_menu span.icon_active5,.sub_menu span.icon_active4").removeClass("active_background");
			$(".menu2,.menu1,.menu4,.menu5,.menu3").css("display","none");
			$(".sub_menu span.icon_active1,.sub_menu span.icon_active2,.sub_menu span.icon_active3,.sub_menu span.icon_active4,.sub_menu span.icon_active5").css("display","none");
			
		}
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
		
    });
};

/*----------------------/scrollTop--------------------*/


$(document).ready(function() {    
	scrollTop();
	var w_recent = document.documentElement.clientWidth;
	if(w_recent<=733){
		$("html").css("width","100%");
		$("html").css("overflow-x","hidden");
	}
	else if(w_recent<=960){
		$("html").css("width","960px");
		$("html").css("overflow-x","scroll");
	}
	else {
		$("html").css("width","100%");
		$("html").css("overflow-x","hidden");
	}
});

$(window).load(function() {    
	var w_recent = document.documentElement.clientWidth;
	if(w_recent<=733){
		$("html").css("width","100%");
		$("html").css("overflow-x","hidden");
	}
	else if(w_recent<=960){
		$("html").css("width","960px");
		$("html").css("overflow-x","scroll");
	}
	else {
		$("html").css("width","100%");
		$("html").css("overflow-x","hidden");
	}
});

$(window).resize(function(){
	var w_recent = document.documentElement.clientWidth;
		if(w_recent<=733){
		$("html").css("width","100%");
		$("html").css("overflow-x","hidden");
		$("nav .group4").css("display","none");	
		$(".level1").css("display","none");	
	}
	else if(w_recent<=960){
		$("html").css("width","960px");
		$("html").css("overflow-x","scroll");
		$("nav .group4").css("display","block");
		$(".level1").css("display","none");	
	}
	else {
		$("html").css("width","100%");
		$("html").css("overflow-x","hidden");	
		$("nav .group4").css("display","block");	
		$(".level1").css("display","none");	
		
		
	}
	
	$(".menu_toggle").removeClass("open");
	
});

