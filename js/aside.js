//侧边栏
$(function(){
	//弹出用户框、客服、回到顶部、划过改变背景
	$("#aside li").mouseenter(function(){
		$(this).find(".asid_pic").css({"background-position-x":-22})
		.end().find(".commonAside").fadeIn(10)
		.find(".span_gone").click(function(){
			$(this).parent().css({"display":"none"}).parent().unbind("hover");
		})
		.end().find("p").children().eq(0).click(function(){
			$(".submitBox_wrap").show()
			.find(".span_gone").click(function(){
				$(".submitBox_wrap").hide();
			});
		})	
	}).mouseleave(function(){
		$(this).find(".commonAside").fadeOut(10).end()
		.find(".asid_pic").css({"background-position-x":0})
	}).eq(5).click(function(){
		$("body,html").stop().animate({"scrollTop":0});
		
		
	});
	//aside高度自动变化
	$("#aside").height($(window).height());
	$(window).resize(function(){
		$("#aside").height($(window).height());
	});
	//弹出左侧边栏
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$("#leftAside").show();
		}else{
			$("#leftAside").hide();
		}
	})
	//点击到达指定楼层
	$(".leftAside_top").children().eq(0).click(function(){
		var $scrollTop=$("#main_center").offset().top
		$("body,html").stop().animate({"scrollTop":$scrollTop});
	})
	$(".leftAside_top").children().eq(1).click(function(){
		var $scrollTop=$("#main_center2").offset().top
		$("body,html").stop().animate({"scrollTop":$scrollTop});
	})
	
	
	
})
