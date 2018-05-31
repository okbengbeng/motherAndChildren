$(function(){
	
	//数量修改
	$(".cartmain_center").on("click",".reAdd",function(){
		var $num=Number($(this).prev().val())+1;
		$(this).prev().val($num);
		$(this).parent().next().html("￥"+$num*($(this).parent().prev().html().slice(1)));
		var $lastNum=Number($(".paying").find("span").eq(0).html())+1;
		var $lastPrice=Number($(".paying").find("span").eq(1).html())+Number($(this).parent().prev().html().slice(1));
		$(".paying").find("span").eq(0).html($lastNum)
		.end().eq(1).html($lastPrice);
	})
	$(".cartmain_center").on("click",".reduce",function(){
		var $num=Number($(this).next().val())-1;
		if($num==0){
			$num=1;
		};
		$(this).next().val($num);
		$(this).parent().next().html("￥"+$num*($(this).parent().prev().html().slice(1)));
		var $lastNum=Number($(".paying").find("span").eq(0).html())-1;
		var $lastPrice=Number($(".paying").find("span").eq(1).html())-Number($(this).parent().next().html().slice(1));
		$(".paying").find("span").eq(0).html($lastNum)
		.end().eq(1).html($lastPrice);
	})
	
	//删除
	$(".cartmain_center").on("click",".del",function(){
		console.log($(this));
		$(this).parent().parent().remove();
		var $lastNum=Number($(".paying").find("span").eq(0).html())-$(this).parent().prev().prev().find("input").val();
		var $lastPrice=Number($(".paying").find("span").eq(1).html())-Number($(this).parent().prev().html().slice(1));
		$(".paying").find("span").eq(0).html($lastNum)
		.end().eq(1).html($lastPrice);
	})
	
	
	
	
	//获取cookie信息

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
					data:{goods_id:$cookie[n].id},
					success:function(data){							
						data=data.data[0];
						$str="<ul><li><div><a href=''><img src='"+data.goods_thumb+"'/></a></div><p>"+data.goods_name+"</p></li><li>￥"+data.price+"</li><li><span class='reduce'>-</span><input type='text' value='"+$cookie[n].num+"' /><span class='reAdd'>+</span></li><li>￥"+$cookie[n].num*data.price+"</li><li><a class='del'>删除</a></li></ul>";
						$(".cartmain_center").append($str);
						$lastNum+=$cookie[n].num;
						$lastPrice+=$cookie[n].num*data.price;
						$(".paying").find("span").eq(0).html($lastNum)
						.end().eq(1).html($lastPrice);
					}
				});	
				
			})(i);
		}
	}	
	
	//清空购物车
	$(".paying").children("a").eq(0).click(function(){
		window.location.reload();
		console.log("aa")
		var oDate = new Date();
		oDate.setDate(oDate.getDate()-1);
		document.cookie = "shopMssage=aaaaa;expires="+oDate+";path=/";
		document.cookie = "shopMssage=aaaaa;expires="+oDate+";path=/";
	})
	
	
	
	
})
