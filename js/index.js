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
			$(".submitBox").css({"display":"block"})
			.find(".span_gone").click(function(){
				$(".submitBox").css({"display":"none"});
			});
		})	
	}).mouseleave(function(){
		$(this).find(".commonAside").fadeOut(10).end()
		.find(".asid_pic").css({"background-position-x":0})
	})
	
	
	
	
})
