$(function(){
	//手机号
	var $flag=0;
	var $flag1=false;
	var $flag2=false;
	var $flag3=false;
	var $flag4=false;
	$(".login_left1 label").eq(0).find("input").change(function(){
		$(".reg_default").hide();
		var $reg =/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
		if(!$reg.test($(this).val())){
			$(".login_left1 label").eq(0).find(".warming").show();
			$flag1=false;
		}else{
			$(".login_left1 label").eq(0).find(".warming").hide();
			$flag1=true;
		}
	});
	//设置密码
	$(".login_left1 label").eq(1).find("input").change(function(){
		var $reg =/^[0-9a-zA-Z_]{6,20}$/;
		if(!$reg.test($(this).val())){
			$(".login_left1 label").eq(1).find(".warming").show();
			$flag2=false;
		}else{
			$(".login_left1 label").eq(1).find(".warming").hide();
			$flag2=true;
		}
	});
	//确认密码
	$(".login_left1 label").eq(2).find("input").change(function(){
		var $reg =$(".login_left1 label").eq(1).find("input").val();
		if($(this).val()!=$reg){
			$(".login_left1 label").eq(2).find(".warming").show();
			$flag3=false;
		}else{
			$(".login_left1 label").eq(2).find(".warming").hide();
			$flag3=true;
		}
	});
	//提交注册
	$("#btnl").click(function(){
		if($(".login_left1 label").eq(5).find("input").prop("checked")==false){
			$(".login_left1 label").eq(5).find(".warming").show();
			$flag4=false;
		}else{
			$flag4=true;
			$(".login_left1 label").eq(5).find(".warming").hide();
		};
		$flag=$flag1+$flag2+$flag3+$flag4
		if($flag==4){
			var $username=$(".login_left1 label").eq(0).find("input").val();
			var $password=$(".login_left1 label").eq(1).find("input").val();
			$.ajax({
				type:"post",
				url:"http://h6.duchengjiu.top/shop/api_user.php",
				data:"status=register&username="+$username+"&password="+$password,
				success: function(data){
							if(data.code==0){
								$(".login_left1").empty();
								$(".reg_sucess").show();
								$(".reg_default").hide();
								$(".top_right li").eq(0).find("p").html($username+"　,")
								.end().find("span").hide().end().find("a").eq(0).hide()
								.end().eq(1).show();
								
								//把用户名和密码写入cookie
								$.cookie('m_username',$username, {expires:7,path:'/'});
 								$.cookie('m_password',$password, {expires:7,path:'/'});

								
							}else if(data.code==2001){
								$(".reg_default").show();
								$(".login_left1 label").eq(0).find("input").val("");
								$(".login_left1 label").eq(1).find("input").val("");
								$(".login_left1 label").eq(2).find("input").val("");
							}
						}
				
			});
			
			
			
			
			
			
			
			
			
		}
		
		
		
	})
	//登录
	$(".login_top").find("div").eq(1).click(function(){
		console.log("aa");
		$(".submitBox_wrap").show()
		.find(".span_gone").click(function(){
			$(".submitBox_wrap").hide();
		});	
	})
	
})


