$(function(){
	var $pageNum=0;
	$(".banner_page div").eq(0).addClass("hover");
	//自选轮播
	$(".banner_page div").mouseover(function(){
		$pageNum=$(this).index();
		turnPage($pageNum);
	});
	//自动轮播
	var timer=setInterval(function(){
		$pageNum++;
		turnPage($pageNum);
	},2000);
	//鼠标滑入时停止自动轮播、划出时开启轮播
	$("#banner").mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		timer=setInterval(function(){
			$pageNum++;
			turnPage($pageNum);
		},2000)
	})
	
	//轮播函数
	function  turnPage($Num){
		if($Num==6){
			$(".banner_page div").eq(0).addClass("hover")
			.siblings().removeClass("hover");;
		};
		if($Num>6){
			$Num=1;
			$pageNum=1;
			$(".banner_list").css({"left":0});
		};
		$(".banner_list").stop().animate({"left":-1090*$Num});
		$(".banner_page div").eq($Num)
		.addClass("hover").siblings().removeClass("hover");
	};
	
	
})
