$(function(){var o=window.location.href.split("?")[1];$.ajax({type:"get",url:"http://h6.duchengjiu.top/shop/api_goods.php",data:{goods_id:o},success:function(o){o=o.data[0],console.log(o),$("#goods_show").find("a").eq(1).html(o.goods_name),$(".goods_showLeft").find("img").attr({src:o.goods_thumb}),$(".goods_showRight").find("h3").html(o.goods_name).next().find("span").html(o.price)}}),$(".goods_showRight").find("li").eq(2).hover(function(){$(this).next().fadeToggle(30)})});