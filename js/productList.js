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
	
	//获取商品列表
	turnNext(1);
	
	//翻页
	var $pageNum=1;
	$(".turn_page").find("a").click(function(){
		$pageNum=$(this).index()+1;
		turnNext($pageNum);
		
	});
	$(".pageDown").click(function(){
		$pageNum++;
		if($pageNum>=10){
			$pageNum=10;
		};
		turnNext($pageNum);
	});
	$(".pageUp").click(function(){
		$pageNum--;
		if($pageNum<=1){
			$pageNum=1;
		};
		turnNext($pageNum);
	})
	
	
	
	//获取商品列表封装
	function turnNext($page){
		$(".rank_content").empty();
		$.ajax({
			type:"get",
			url:"http://h6.duchengjiu.top/shop/api_goods.php",
			data:{page:$page,pagesize:32},
			success:function(data){
				console.log(data);
				data=data.data;
				for(var i=0;i<data.length;i++){
					var $str="<figure><a href='product.html?"+data[i].goods_id+"'><img src='"+data[i].goods_thumb+"'/></a><figcaption><a href='product.html?"+data[i].goods_id+"'>"+data[i].goods_name+"</a></figcaption><p>"+data[i].price+"</p><div>加入购物车</div></figure>";
					$(".rank_content").append($str);
				}
			}
		});
		$(".turn_page").find("a").eq($page-1).addClass("hhover").siblings().removeClass("hhover")
		
		$(".rank_header").find("span").eq(0).html($page);
		$("body,html").stop().animate({"scrollTop":0},100);	
		
	}
	
	
	
})
