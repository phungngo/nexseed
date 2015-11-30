$(document).ready(function() {
    $(window).load(function(){
		$(".main_right .group1 dl.second dt.second").height($(".main_right .group1 dl.second dd.second").height());
		$(".main_right .group1 dl.second dt.seven").height($(".main_right .group1 dl.second dd.seven").height());
	});
});

$(window).resize(function(){
	$(".main_right .group1 dl.second dt.second").height($(".main_right .group1 dl.second dd.second").height());
	$(".main_right .group1 dl.second dt.seven").height($(".main_right .group1 dl.second dd.seven").height());
});
