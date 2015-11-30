function change_menuLeft(){
	
    var limit_scroll = $(".main_right").height() - 338;

    var h1 = $(".common_contain .main_cotain .main_right").height();

    var h2 = h1 - 528;

    if ($(".main_right").height()>=623&&$(this).scrollTop() < 234) {
        $(".common_contain .main_cotain .main_left").removeClass("change_position_menu1");
        $(".common_contain .main_cotain .main_left").removeClass("change_position_menu2");
        $(".main_left_menu").css("margin-top", "0");
        $(".common_contain .main_cotain .main_left").css("height", "auto");
		$(".common_contain .main_cotain .main_right").css("margin-left","0");
    }

    if ($(".main_right").height()>=623&&$(this).scrollTop() > 235) {
        $(".common_contain .main_cotain .main_left").addClass("change_position_menu1");
        $(".common_contain .main_cotain .main_left").removeClass("change_position_menu2");
        $(".main_left_menu").css("margin-top", "0");
        $(".common_contain .main_cotain .main_left").css("height", "auto");
		$(".common_contain .main_cotain .main_right").css("margin-left","258px");
    }

    if ($(".main_right").height()>=623&&$(this).scrollTop() > limit_scroll) {
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