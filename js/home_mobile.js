// banner hegiht
//var w_recent = document.documentElement.clientWidth;
//alert(w_recent);
function resize_height(){
	var w_recent = document.documentElement.clientWidth;
	//alert(w_recent);
	if(w_recent<=240){
		var height_banner = $(".banner img.img_banner").height()*6.5-174;
		$(".banner").height(height_banner);
	}
	else if(w_recent<=297){
		var height_banner = $(".banner img.img_banner").height()*6.5-234;
		$(".banner").height(height_banner);
	}
	else if(w_recent<=320){
		var height_banner = $(".banner img.img_banner").height()*5.5-188;
		$(".banner").height(height_banner);
	}
	else if(w_recent<=360){
		var height_banner = $(".banner img.img_banner").height()*5.5-220;
		$(".banner").height(height_banner);
	}
	else if(w_recent<=384){
		var height_banner = $(".banner img.img_banner").height()*6-240;
		$(".banner").height(height_banner);
	}
	else if(w_recent<=414){
		var height_banner = $(".banner img.img_banner").height()*6-280;
		$(".banner").height(height_banner);
	}
	else if(w_recent<=480){
		var height_banner = $(".banner img.img_banner").height()*6-360;
		$(".banner").height(height_banner);
	}
	else if(w_recent<=568){
		var height_banner = $(".banner img.img_banner").height()*6-488;
		$(".banner").height(height_banner);
	}
	
	else if(w_recent<=600){
		var height_banner = $(".banner img.img_banner").height()*6-488;
		$(".banner").height(height_banner);
	}
	
	else if(w_recent<=617){
		var height_banner = $(".banner img.img_banner").height()*4-148;
		$(".banner").height(height_banner);
	}
	
	else if(w_recent<=640){
		var height_banner = $(".banner img.img_banner").height()*3-118;
		$(".banner").height(height_banner);
	}
	
	else if(w_recent<=680){
		var height_banner = $(".banner img.img_banner").height()*3-108;
		$(".banner").height(height_banner);
	}
	
	else if(w_recent<=736){
		var height_banner = $(".banner img.img_banner").height()*2.5-39;
		$(".banner").height(height_banner);
	}	
	
	else if(w_recent<=768){
		var height_banner = $(".banner img.img_banner").height()*2.5-49;
		$(".banner").height(height_banner);
	}
	
	else if(w_recent<=800){
		var height_banner = $(".banner img.img_banner").height()*2.5-49;
		$(".banner").height(height_banner);
	}
	
	else if(w_recent<=960){
		var height_banner = $(".banner img.img_banner").height()*2.5-109;
		$(".banner").height(height_banner);
	}
	else{
		var height_banner = $(".banner img.img_banner").height();
		$(".banner").height($(".banner img.img_banner").height());
	}		
}

$(document).ready(function() {
	//resize_height();	
});

$(window).load(function() {
    resize_height();
});

$(window).resize(function() {
    resize_height();
});