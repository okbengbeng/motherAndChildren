$(function(){$("#aside li").mouseenter(function(){$(this).find(".asid_pic").css({"background-position-x":-22}).end().find(".commonAside").fadeIn(10).find(".span_gone").click(function(){$(this).parent().css({display:"none"}).parent().unbind("hover")}).end().find("p").children().eq(1).click(function(){$(".submitBox_wrap").show().find(".span_gone").click(function(){$(".submitBox_wrap").hide()})})}).mouseleave(function(){$(this).find(".commonAside").fadeOut(10).end().find(".asid_pic").css({"background-position-x":0})}).eq(5).click(function(){$("body,html").stop().animate({scrollTop:0})}),$("#aside").height($(window).height()),$(window).resize(function(){$("#aside").height($(window).height())}),$(window).scroll(function(){100<$(window).scrollTop()?$("#leftAside").show():$("#leftAside").hide()}),$(".leftAside_top").children().eq(0).click(function(){var i=$("#main_center").offset().top;$("body,html").stop().animate({scrollTop:i})}),$(".leftAside_top").children().eq(1).click(function(){var i=$("#main_center2").offset().top;$("body,html").stop().animate({scrollTop:i})}),$(".shopping").hover(function(){if(console.log("bb"),$(".shopping").children("div").children().eq(0).empty(),$(this).children("div").fadeToggle(30),null!=$.cookie("shopMssage")){var o=$.cookie("shopMssage");o=JSON.parse(o);for(var e="",s=0,c=0,i=0;i<o.length;i++)!function(n){$.ajax({type:"get",url:"http://h6.duchengjiu.top/shop/api_goods.php",async:!1,data:{goods_id:o[n].id},success:function(i){i=i.data[0],e="<ul><li><img src='"+i.goods_thumb+"'/></li><li><a>"+i.goods_name+"</a></li><li><span>"+i.price+"x"+o[n].num+"</span><span class='del1'>[ 删除 ]</span></li></ul>",$(".shopping").children("div").children().eq(0).append(e),s+=o[n].num,c+=i.price*o[n].num,$(".shopping").children("div").children().eq(1).find("span").eq(0).html(s).next().html(c)}})}(i)}}),$(".shopping").children("div").on("click",".del1",function(){console.log($(this).parent().parent().html()),console.log("aabb")})});