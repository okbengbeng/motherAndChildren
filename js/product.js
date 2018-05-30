$(function(){
	
	var $goods_id=window.location.href.split('?')[1];
	$.ajax({
			type:"get",
			url:"http://h6.duchengjiu.top/shop/api_goods.php",
			data:{"goods_id":$goods_id},
			success:function(data){
					data=data.data[0];
					console.log(data);
					$("#goods_show").find("a").eq(1).html(data.goods_name);
					$(".goods_showLeft").find("img").attr({"src":data.goods_thumb});
					$(".goods_showRight").find("h3").html(data.goods_name)
					.next().find("span").html(data.price);
					
					
					
			}
	})
	
		
	
	
	//客户端下单
	$(".goods_showRight").find("li").eq(2).hover(function(){
		$(this).next().fadeToggle(30);
		
		
		
	})
	
})