$(function(){
	//三级菜单
	$(".aside_up").find("p").click(function(){
		$(this).next().slideToggle(30);
	})
	
	//热销排行
	$(".rank_list").eq(0).find(".rank_right").children("a").hide().next().show();
	$(".rank_list").mouseenter(function(){
		$(this).find(".rank_right").children("a").hide().next().show();
		$(this).siblings().find(".rank_right").children("a").show().next().hide();
	})
	
//	$.ajax({
//		type:"post",
//		url:"http://h6.duchengjiu.top/shop/api_goods.php",
//		data:"search_text=连衣裙&page=1&pagesize=10",
//		success:function(data){
//			console.log(data);
//		}
//	});
	$.getJSON("http://buy.api.muyingzhijia.com/json/reply/QueryPromPriceByProdId?a=0.2230388270219119&callback=?&ProductIdList=634198%2C634197%2C634174%2C634201%2C634200%2C634175%2C634173%2C634199%2C634202%2C640038%2C200462%2C629636%2C614084%2C614085%2C103764%2C155507%2C90595%2C155509%2C564639%2C564640%2C564642%2C564638%2C155510%2C155508%2C155511&UserId=0&Guid=string&DisplayLabel=1&SourceTypeSysNo=1&AreaSysNo=100&ChannelID=102&Ckid=21&ExtensionSysNo=&_=1527587419878&__=0.6771638931484314",function(data){
		console.log(data)
	})
	
	
	
	
})
