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
	})
})


//header




//nav
$(function(){
	//全部分类
	$("nav>ul>li").eq(0).hover(function(){
		$(this).find("span").fadeToggle(10);
		$(".products").find("ul").fadeToggle(10);
		
	})
	$(".products").find("li").hover(function(){
		$(this).addClass("products_hover").siblings().removeClass("products_hover");
	})
	
	
	
	
	
	
	//直邮弹出框
	$("nav>ul>li").eq(3).hover(function(){
		$(this).children("div").fadeIn(3)
		.end().css({"border":"1px solid orange"});
	},function(){
		$(this).children("div").fadeOut(3)
		.end().css({"border":"1px solid #fff"});
	})
})







