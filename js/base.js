//top_nav
$(function(){
	$(".top_left li").eq(2).hover(function(){
		$(this).find("div").fadeIn(30)
		.end().find("span").stop().animate({"background-position-y":-265},300)
		.end().children("a").css({"border":"1px solid orange","background":"#fff","border-bottom-color":"#fff"});
	},function(){
		$(this).find("div").fadeOut(30)
		.end().find("span").stop().animate({"background-position-y":-240},300)
		.end().children("a").css({"border":"none","background":"none"});;
	});
	$(".top_right li").hover(function(){
		$(this).children("div").fadeIn(30)
		.end().find(".triangle").find("b").eq(0).fadeOut(3)
		.end().eq(1).fadeIn(3);
		$(this).find("a").has("div").css({"border":"1px solid orange","background":"#fff","border-bottom-color":"#fff"});	
	},function(){
		$(this).children("div").fadeOut(30)
		.end().find(".triangle").find("b").eq(0).fadeIn(3)
		.end().eq(1).fadeOut(3);
		$(this).find("a").has("div").css({"border":"1px solid #eee","background":"none"});	
	}).find("span").eq(0).click(function(){
		$(".submitBox_wrap").show()
			.find(".span_gone").click(function(){
				$(".submitBox_wrap").hide();
			});
	}).end().eq(1).click(function(){
		window.location.href="html/login.html";
	});
	
	
	
})


//header




//nav
$(function(){
	//弹出全部分类、获取分类信息
	$("nav>ul>li").eq(0).hover(function(){
		$(this).find("a").find("span").fadeToggle(10);
		$(".products").find("ul").fadeToggle(10);
		$.getJSON("http://goods.api.muyingzhijia.com//json/reply/QueryIndexCategorys?callback=?&ParentIds=%5B%7B+%22CategoryId%22%3A+11%7D%2C%7B+%22CategoryId%22%3A+2%7D%2C%7B+%22CategoryId%22%3A+441%7D%2C%7B+%22CategoryId%22%3A+442%7D%2C%7B+%22CategoryId%22%3A+6%7D%2C%7B+%22CategoryId%22%3A+3%7D%2C%7B+%22CategoryId%22%3A+7%7D%2C%7B+%22CategoryId%22%3A+9%7D%2C%7B+%22CategoryId%22%3A+443%7D%5D&_=1527414065696",function(data){
			//弹出右侧详细分类
			$(".products").find("li").hover(function(){
				$(".products_content").empty();
				$(".products_pic").empty();
				$(this).addClass("products_hover").siblings().removeClass("products_hover");
				
				console.log(data.QueryIndexCategorysDtos[$(this).index()]);
				var $product=data.QueryIndexCategorysDtos[$(this).index()];
				for(var j=0;j<$product.GetTwoCategory.length;j++){
					$(".products_content").append("<div><h4>"+$product.GetTwoCategory[j].TwoCatetory.VchCateName+"</h4></div>");
					for(var k=0;k<$product.GetTwoCategory[j].TwoCatetory.ThreeCategory.length;k++){
						$(".products_content").find("div").eq(j).append("<a href=''>"+$product.GetTwoCategory[j].TwoCatetory.ThreeCategory[k].VchCateName+"</a>");
					}	
				};
				for(var i=0;i<$product.GetTwoBrand.length;i++){
					$(".products_pic").append("<img src='"+$product.GetTwoBrand[i].PictureUrl+"' />")
					
					
				}
			});
			$(".products").find("ul").mouseover(function(){
				$(".products_right").show();
			}).mouseout(function(){
				$(".products_right").hide();
			})
		})
	});
	
	
	//直邮弹出框
	$("nav>ul>li").eq(3).hover(function(){
		$(this).children("div").fadeIn(3)
		.end().css({"border":"1px solid orange"});
	},function(){
		$(this).children("div").fadeOut(3)
		.end().css({"border":"1px solid #fff"});
	})
})







