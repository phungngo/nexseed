// get height dt, dd
$(document).ready(function() {
	$(window).load(function(){
	
	$("dt.Height1").height($("dd.Height1").height());
		
	var dd_Height4_text = $("dd.Height4").text();
		
	if(dd_Height4_text==""){
		$("dd.Height4").height($("dt.Height4").height(198));
	}
	else {
		$("dt.Height4").height($("dd.Height4").height());
	}
	});
});

$(window).resize(function(){
	$("dt.Height1").height($("dd.Height1").height());
		
	var dd_Height4_text = $("dd.Height4").text();
		
	if(dd_Height4_text==""){
		$("dd.Height4").height($("dt.Height4").height(198));
	}
	else {
		$("dt.Height4").height($("dd.Height4").height());
	}
})










