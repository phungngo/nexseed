// banner hegiht

function resize_height(){
	var w_recent = document.documentElement.clientWidth;
	if(w_recent<=240){
		var height_banner = $(".banner img.img_banner").height()*6.5-178;
		$(".banner").height(height_banner);
	}
	else if(w_recent<=280){
		var height_banner = $(".banner img.img_banner").height()*6.5-228;
		$(".banner").height(height_banner);
	}
	else if(w_recent<=320){
		var height_banner = $(".banner img.img_banner").height()*5.5-198;
		$(".banner").height(height_banner);
	}
	else if(w_recent<=360){
		var height_banner = $(".banner img.img_banner").height()*5.5-208;
		$(".banner").height(height_banner);
	}
	else if(w_recent<=384){
		var height_banner = $(".banner img.img_banner").height()*6-230;
		$(".banner").height(height_banner);
	}
	else if(w_recent<=414){
		var height_banner = $(".banner img.img_banner").height()*6-280;
		$(".banner").height(height_banner);
	}
	else if(w_recent<=480){
		var height_banner = $(".banner img.img_banner").height()*6-340;
		$(".banner").height(height_banner);
	}
	else if(w_recent<=568){
		var height_banner = $(".banner img.img_banner").height()*6-438;
		$(".banner").height(height_banner);
	}
	
	else if(w_recent<=600){
		var height_banner = $(".banner img.img_banner").height()*6-430;
		$(".banner").height(height_banner);
	}
	
	else if(w_recent<=617){
		var height_banner = $(".banner img.img_banner").height()*4-138;
		$(".banner").height(height_banner);
	}
	
	else if(w_recent<=640){
		var height_banner = $(".banner img.img_banner").height()*3-108;
		$(".banner").height(height_banner);
	}
	
	else if(w_recent<=680){
		var height_banner = $(".banner img.img_banner").height()*3-108;
		$(".banner").height(height_banner);
	}
	
	else if(w_recent<=750){
		var height_banner = $(".banner img.img_banner").height()*2.5-39;
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