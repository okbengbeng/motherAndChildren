$(function(){
	//结算模块定位
	paying();
	window.onresize=window.onscroll=function(){
		paying();	
	}
	function paying(){
		var $scrollTop=$("body,html").scrollTop()+$(window).height()-56;
		if($scrollTop>$(".cartmain_center").offset().top+$(".cartmain_center").outerHeight()+2){
			$scrollTop=$(".cartmain_center").offset().top+$(".cartmain_center").outerHeight()+2;
		}

		$(".paying").css({"top":$scrollTop});
	}
	
	
	
	
	
	
	
})
