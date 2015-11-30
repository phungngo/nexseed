//change break_crumb banner images

$(document).ready(function() { 
var w_recent = document.documentElement.clientWidth;
if(w_recent<=733){
	$(".banner img.img_banner").attr("src",img_banner_small);  
}
else {
	$(".banner img.img_banner").attr("src",img_banner);  
}
});

$(window).load(function() { 
var w_recent = document.documentElement.clientWidth;
if(w_recent<=733){
	$(".banner img.img_banner").attr("src",img_banner_small);  
}
else {
	$(".banner img.img_banner").attr("src",img_banner);  
}
});

$(window).resize(function() { 
var w_recent = document.documentElement.clientWidth;
if(w_recent<=733){
	$(".banner img.img_banner").attr("src",img_banner_small);  
}
else {
	$(".banner img.img_banner").attr("src",img_banner);  
}
});


