//top_nav
$(function(){
	$(".top_left li").eq(2).hover(function(){
		$(this).find("div").fadeIn(30)
		.end().find("span").stop().animate({"background-position-y":-265})
		.end().children("a").css({"border":"1px solid orange","background":"#fff","border-bottom-color":"#fff"});
	},function(){
		$(this).find("div").fadeOut(30)
		.end().find("span").stop().animate({"background-position-y":-240})
		.end().children("a").css({"border":"none","background":"none"});;
	});
	$(".top_right li").hover(function(){
		$(this).children("div").fadeToggle(30)
		.end().find("a").has("div").css({"border":"1px solid orange","background":"#fff","border-bottom-color":"#fff"})
		.end().find(".triangle").find("b").fadeToggle(3);
		console.log($(this).find("a").has("div"));
	})
})







