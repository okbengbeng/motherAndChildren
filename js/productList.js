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
				data=data.data;
				for(var i=0;i<data.length;i++){
					var $str="<figure><a href='product.html?"+data[i].goods_id+"'><img src='"+data[i].goods_thumb+"'/></a><figcaption><a href='product.html?"+data[i].goods_id+"'>"+data[i].goods_name+"</a></figcaption><p>"+data[i].price+"</p><div>加入购物车</div></figure>";
					$(".rank_content").append($str);
				};
				//添加购物车 存入cookie
				$(".rank_content").find("div").click(function(){
					console.log($(this));
					alert("已添加至购物车");
					$(".shopping1").find("span").eq(1).html(1+Number($(".shopping1").find("span").eq(1).html()));
					var $good_id=$(this).parent().find("a").eq(0).attr("href").split('?')[1];
					var $shopMssage=[{id:$good_id,num:1}];
					
					addproduct1($shopMssage);	
					function addproduct1($shopMssage){
						if($.cookie("shopMssage")==null){
							$shopMssage=JSON.stringify($shopMssage);
							$.cookie("shopMssage",$shopMssage,{expires:7,path:'/'});
						}else{
							var $cookie=$.cookie("shopMssage");
							$cookie=JSON.parse($cookie);
							for(var i=0;i<$cookie.length;i++){
								if($cookie[i].id==$shopMssage[0].id){
									$cookie[i].num+=$shopMssage[0].num;
									break;
								}
								if(i==$cookie.length-1&&$cookie[i].id!=$shopMssage[0].id){
									$cookie.push($shopMssage[0]);
									break;
								}
							}
							$cookie=JSON.stringify($cookie);
							$.cookie("shopMssage",$cookie,{expires:7,path:'/'});
						}
						
					}
				});
				
			}
		});
		$(".turn_page").find("a").eq($page-1).addClass("hhover").siblings().removeClass("hhover")
		
		$(".rank_header").find("span").eq(0).html($page);
		$("body,html").stop().animate({"scrollTop":0},100);	
		
	}
	//点击购物车跳转页面
	$(".shopping1").click(function(){
		window.location.href="shopCart.html";
	})
	if($.cookie("shopMssage")!=null){
		var $cookie=$.cookie("shopMssage");
		$cookie=JSON.parse($cookie);
		var $lastNum=0;
		for(var i=0;i<$cookie.length;i++){
			$lastNum+=$cookie[i].num;
		}
		$(".shopping1").find("span").eq(1).html($lastNum);
	}
	
	
	
})
