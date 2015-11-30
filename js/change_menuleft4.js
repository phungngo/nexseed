function change_menuLeft(){
	
    var limit_scroll = $(".main_right").height() - 658;

    var h1 = $(".common_contain .main_cotain .main_right").height();
	
	if($(".main_right").height()>=865){
		var h2 = h1 - 720;
	}
	
	if($(".main_right").height()>=950){
		var h2 = h1 - 650;
	}
	
	if($(".main_right").height()>=980){
		var h2 = h1 - 630;
	}
	
	if($(".main_right").height()>=1000){
		var h2 = h1 - 680;
	}
	
	if($(".main_right").height()>=1719){
		var h2 = h1 - 880;
	}
	

    if ($(".main_right").height()>=852&&$(this).scrollTop() < 234) {
        $(".common_contain .main_cotain .main_left").removeClass("change_position_menu1");
        $(".common_contain .main_cotain .main_left").removeClass("change_position_menu2");
        $(".main_left_menu").css("margin-top", "0");
        $(".common_contain .main_cotain .main_left").css("height", "auto");
		$(".common_contain .main_cotain .main_right").css("margin-left","0");
    }

    if ($(".main_right").height()>=852&&$(this).scrollTop() > 235) {
        $(".common_contain .main_cotain .main_left").addClass("change_position_menu1");
        $(".common_contain .main_cotain .main_left").removeClass("change_position_menu2");
        $(".main_left_menu").css("margin-top", "0");
        $(".common_contain .main_cotain .main_left").css("height", "auto");
		$(".common_contain .main_cotain .main_right").css("margin-left","258px");
    }

    if ($(".main_right").height()>=852&&$(this).scrollTop() > limit_scroll) {
        $(".common_contain .main_cotain .main_left").removeClass("change_position_menu1");
        $(".common_contain .main_cotain .main_left").addClass("change_position_menu2");
        $(".common_contain .main_cotain .main_left").height(h1);
        $(".main_left_menu").css("margin-top", h2);
		$(".common_contain .main_cotain .main_right").css("margin-left","0");
	}			
}

$(document).ready(function() {
	$(window).scroll(function() {
    	change_menuLeft();    
    });
});

$(window).load(function() {
	$(window).scroll(function() {
    	change_menuLeft();    
    });
});


$(window).resize(function(){
	change_menuLeft();    
});