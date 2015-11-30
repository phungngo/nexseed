// get height dt, dd
$(document).ready(function() {
	$(window).load(function() {
	var Height1 = $("dd.Height1").height();

	if(Height1>=24){
		$("dt.Height1, dd.Height1").css("padding-bottom","16px"); 
	}
	if(Height1>=47){
		$("dt div.paddingTop2").css("padding-top","12px"); 
	}
	if(Height1>=72){
		$("dt div.paddingTop2").css("padding-top","24px"); 
	}
	$("dt.Height1").height($("dd.Height1").height());
	
	var dd_Height2_text = $("dd.Height2").text();
		
	if(dd_Height2_text==""){
		$("dd.Height2").height($("dt.Height2").height(198));
	}
	else {
		$("dt.Height2").height($("dd.Height2").height());
	}
	
	});
});

$(window).resize(function(){
	var Height1 = $("dd.Height1").height();

	if(Height1>=24){
		$("dt.Height1, dd.Height1").css("padding-bottom","16px"); 
	}
	if(Height1>=47){
		$("dt div.paddingTop2").css("padding-top","12px"); 
	}
	if(Height1>=72){
		$("dt div.paddingTop2").css("padding-top","24px"); 
	}
	$("dt.Height1").height($("dd.Height1").height());
	
	var dd_Height2_text = $("dd.Height2").text();
		
	if(dd_Height2_text==""){
		$("dd.Height2").height($("dt.Height2").height(198));
	}
	else {
		$("dt.Height2").height($("dd.Height2").height());
	}
})


