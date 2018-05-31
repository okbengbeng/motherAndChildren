//侧边栏
$(function(){
	//弹出用户框、客服、回到顶部、划过改变背景
	$("#aside li").mouseenter(function(){
		$(this).find(".asid_pic").css({"background-position-x":-22})
		.end().find(".commonAside").fadeIn(10)
		.find(".span_gone").click(function(){
			$(this).parent().css({"display":"none"}).parent().unbind("hover");
		})
		.end().find("p").children().eq(1).click(function(){
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
	
	//弹出购物框
	$(".shopping").hover(function(e){
		var evt=e||event;
		evt.cancelBubble=true;
		console.log("bb");
		$(".shopping").children("div").children().eq(0).empty();
		$(this).children("div").fadeToggle();
		if($.cookie("shopMssage")!=null){
			var $cookie=$.cookie("shopMssage");
			$cookie=JSON.parse($cookie);
			var $str="";
			var $lastNum=0;
			var $lastPrice=0;
			for(var i=0;i<$cookie.length;i++){
				(function(n){
					$.ajax({
						type:"get",
						url:"http://h6.duchengjiu.top/shop/api_goods.php",
						async: false,
						data:{goods_id:$cookie[n].id},
						success:function(data){							
							data=data.data[0];
							$str="<ul><li><img src='"+data.goods_thumb+"'/></li><li><a>"+data.goods_name+"</a></li><li><span>"+data.price+"x"+$cookie[n].num+"</span><span class='del1'>[ 删除 ]</span></li></ul>";
							$(".shopping").children("div").children().eq(0).append($str);
							$lastNum+=$cookie[n].num;
							$lastPrice+=data.price*$cookie[n].num;
							$(".shopping").children("div").children().eq(1).find("span").eq(0).html($lastNum).next().html($lastPrice);
							
						}
					});	
				})(i);
			}
		}	
		
		
	})
	
	//删除物品
	$('.shopping').unbind('click');
	$(".shopping").children("div").on("click",".del1",function(){
//		$(this).parent().parent().remove();
		console.log("aabb");
	})
	
	
})
