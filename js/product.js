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
					$(".goods_showLeft").children().eq(2).css({"background-image":"url("+data.goods_thumb+")"});
	
			}
	})
	//放大镜
	$(".goods_showLeft").children().eq(0).mousemove(function(e){
		
		$(this).find("div").show();
		$(".goods_showLeft").children().eq(2).show();
		var $evt=e||event;
		
		var $left=$evt.pageX-$(this).offset().left-$(this).find("div").outerWidth()/2;
		var $top=$evt.pageY-$(this).offset().top-$(this).find("div").outerHeight()/2;
		if($left<=0){
			$left=0;
		}
		if($left>=175){
			$left=175;
		}
		if($top<=0){
			$top=0;
		}
		if($top>=175){
			$top=175;
		}
		$(this).find("div").css({"left":$left,"top":$top});
		$(".goods_showLeft").children().eq(2).css({"background-position-x":-$left*3,"background-position-y":-$top*3});
	}).mouseout(function(){
		$(this).find("div").hide();
		$(".goods_showLeft").children().eq(2).hide();
	})
	
	//购买数量
	var $products_num=1;
	$(".goods_showRight").find("span").eq(1).click(function(){
		$products_num++;
		$(this).prev().val($products_num);
	}).next().click(function(){
		$products_num--;
		if($products_num<=1){
			$products_num=1;
		}
		$(this).prev().prev().val($products_num);
	})
	
		
	
	
	
	
	
	//客户端扫码下单
	$(".goods_showRight").find("li").eq(2).hover(function(){
		$(this).next().fadeToggle(30);
		
		
	})
	
})