// add class on iphone

var isiPhone = (navigator.userAgent.match(/iPhone/i) != null);

if(isiPhone){
	$("html").addClass("iPhone"); 
}
