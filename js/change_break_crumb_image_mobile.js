//change break_crumb banner images

$(document).ready(function() { 
var w_recent = document.documentElement.clientWidth;
if(w_recent<=960){
	$(".break_crumb_img img").attr("src",img_bc_small);  
	$("a.link_left1 img").attr("src",img_menu_left_small); 
}
else {
	$(".break_crumb_img img").attr("src",img_bc);  
	$("a.link_left1 img").attr("src",img_menu_left); 
}
});

$(window).load(function() { 
var w_recent = document.documentElement.clientWidth;
if(w_recent<=960){
	$(".break_crumb_img img").attr("src",img_bc_small);  
	$("a.link_left1 img").attr("src",img_menu_left_small); 
}
else {
	$(".break_crumb_img img").attr("src",img_bc);  
	$("a.link_left1 img").attr("src",img_menu_left); 
}
});

$(window).resize(function() { 
var w_recent = document.documentElement.clientWidth;
if(w_recent<=960){
	$(".break_crumb_img img").attr("src",img_bc_small);  
	$("a.link_left1 img").attr("src",img_menu_left_small); 
}
else {
	$(".break_crumb_img img").attr("src",img_bc);  
	$("a.link_left1 img").attr("src",img_menu_left); 
}
});


