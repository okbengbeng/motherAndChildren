//侧边栏
$(function(){
	//弹出用户框
	$("#aside .user").mouseenter(function(){
		$(this).find(".aside_top").fadeIn(10)
		.find(".span_gone").click(function(){
			$(this).parent().css({"display":"none"}).parent().unbind("hover");
		}).end()
		.find("p").children().eq(0).click(function(){
			$(".submitBox").css({"display":"block"})
		})
	}).mouseleave(function(){
		$(this).find(".aside_top").fadeOut(10);
	})
	//划过改变背景
	$("#aside li").mouseenter(function(){
		$(this).find(".asid_pic").css({"background-position-x":-22})
	}).mouseleave(function(){
		$(this).find(".asid_pic").css({"background-position-x":0})
	})
	//划过弹出客服和返回顶部
	
})
