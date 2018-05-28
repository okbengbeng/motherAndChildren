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
	
	$("#aside").height($(window).height());
	$(window).resize(function(){
		$("#aside").height($(window).height());
	});
//	$(window).scroll(function(){
//		console.log($(window).scrollTop())
//		if($(window).scrollTop()>200){
//			$("#aside").show();
//		}else{
//			$("#aside").hide();
//		}
//	})
	
	
})
