$(function(){
	//手机号
	$(".login_left1 label").eq(0).find("input").change(function(){
		var $reg =/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
		if(!$reg.test($(this).val())){
			$(".login_left1 label").eq(0).find(".warming").show();
		}else{
			$(".login_left1 label").eq(0).find(".warming").hide();
		}
	});
	//设置密码
	$(".login_left1 label").eq(1).find("input").change(function(){
		var $reg =/^[\x21-\x7E]{6,20}$/;
		if(!$reg.test($(this).val())){
			$(".login_left1 label").eq(1).find(".warming").show();
		}else{
			$(".login_left1 label").eq(1).find(".warming").hide();
		}
	});
	//确认密码
	$(".login_left1 label").eq(2).find("input").change(function(){
		var $reg =$(".login_left1 label").eq(1).find("input").val();
		if($(this).val()!=$reg){
			$(".login_left1 label").eq(2).find(".warming").show();
		}else{
			$(".login_left1 label").eq(2).find(".warming").hide();
		}
	});
	//提交注册
	$("#btnl").click(function(){
		var $flag=$(".login_left1 label").eq(5).find("input").prop("checked");
		if($flag==false){
			$(".login_left1 label").eq(5).find(".warming").show();
		}else{
			$(".login_left1 label").eq(5).find(".warming").hide();
		}
	})
	//登录
	$(".login_top").find("span").eq(1).click(function(){
		$(".submitBox_wrap").show()
		.find(".span_gone").click(function(){
			$(".submitBox_wrap").hide();
		});
		
	})
	
})
