$(function(){$("#aside li").mouseenter(function(){$(this).find(".asid_pic").css({"background-position-x":-22}).end().find(".commonAside").fadeIn(10).find(".span_gone").click(function(){$(this).parent().css({display:"none"}).parent().unbind("hover")}).end().find("p").children().eq(1).click(function(){$(".submitBox_wrap").show().find(".span_gone").click(function(){$(".submitBox_wrap").hide()})})}).mouseleave(function(){$(this).find(".commonAside").fadeOut(10).end().find(".asid_pic").css({"background-position-x":0})}).eq(5).click(function(){$("body,html").stop().animate({scrollTop:0})}),$("#aside").height($(window).height()),$(window).resize(function(){$("#aside").height($(window).height())}),$(window).scroll(function(){100<$(window).scrollTop()?$("#leftAside").show():$("#leftAside").hide()}),$(".leftAside_top").children().eq(0).click(function(){var i=$("#main_center").offset().top;$("body,html").stop().animate({scrollTop:i})}),$(".leftAside_top").children().eq(1).click(function(){var i=$("#main_center2").offset().top;$("body,html").stop().animate({scrollTop:i})})});