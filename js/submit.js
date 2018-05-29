$(function(){
	//输入手机号
	var $flag=false;
	var $flag1=false;
	var $flag2=false;
	$(".submitBox_center label").eq(0).find("input").change(function(){
		$(".sub_default1").hide();
		var $reg =/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
		if(!$reg.test($(this).val())){
			$(".submitBox_center label").eq(0).find("span").show();
			$flag1=false;
		}else{
			$(".submitBox_center label").eq(0).find("span").hide();
			$flag1=true;
		}
	});
	//输入密码
	$(".submitBox_center label").eq(1).find("input").change(function(){
		$(".sub_default2").hide();
		var $reg =/^[0-9a-zA-Z_]{6,20}$/;
		if(!$reg.test($(this).val())){
			$(".submitBox_center label").eq(1).find("span").show();
			$flag2=false;
		}else{
			$(".submitBox_center label").eq(1).find("span").hide();
			$flag2=true;
		}
	});
	//登录
	$("#btn1").click(function(){
		$flag=$flag1+$flag2;
		if($flag==2){
			var $username=$(".submitBox_center label").eq(0).find("input").val();
			var $password=$(".submitBox_center label").eq(1).find("input").val();
			$.ajax({
				type:"post",
				url:"http://h6.duchengjiu.top/shop/api_user.php",
				data:"status=login&username="+$username+"&password="+$password,
				success:function(data){
							if(data.code==0){
								$(".top_right li").eq(0).find("p").html($username+"　,")
								.end().find("span").hide().end().find("a").eq(0).hide()
								.end().eq(1).show();
								$(".submitBox_wrap").hide();
								$("#aside .user").eq(0).find("p").find("span").eq(0).html($username+",欢迎来到母婴之家！").next().hide().next().hide().next().show();
								$("#aside .user").eq(1).find("p").find("span").eq(0).html($username+",欢迎来到母婴之家！").next().hide().next().hide().next().show();
								//把用户名和密码写入cookie
								if($("#freeSub").prop("checked")==true){
									$.cookie('m_username',$username, {expires:7,path:'/'});
									$.cookie('m_password',$password, {expires:7,path:'/'});
								}else{								
									$.cookie('m_username',null);
									$.cookie('m_password',null);
								}
							}else if(data.code==1001){
								$(".sub_default2").show();
							}else if(data.code==2002){
								$(".sub_default1").show();
							}
						}
			})
		};
	})
	
	
	
	
	
	
	
	//退出清理cookie
	$(".logout").click(function(){
//		$.cookie('m_username',null);
//		$.cookie('m_password',null);
		var oDate = new Date();
		oDate.setDate(oDate.getDate()-1);
		document.cookie = "m_username=aaaaa;expires="+oDate+";path=/";
		document.cookie = "m_password=aaaaa;expires="+oDate+";path=/";
	})
	//免登陆
	var $m_username=$.cookie("m_username");
	var $m_password=$.cookie("m_password");
	if($m_username!=null&&$m_password!=null){
		$.ajax({
			type:"post",
			url:"http://h6.duchengjiu.top/shop/api_user.php",
			data:"status=login&username="+$m_username+"&password="+$m_password,
			success:function(data){
				if(data.code==0){
								$(".top_right li").eq(0).find("p").html($m_username+"　,")
								.end().find("span").hide().end().find("a").eq(0).hide()
								.end().eq(1).show();
								$(".submitBox_wrap").hide();
								$("#aside .user").eq(0).find("p").find("span").eq(0).html($m_username+",欢迎来到母婴之家！").next().hide().next().hide().next().show();
								$("#aside .user").eq(1).find("p").find("span").eq(0).html($m_username+",欢迎来到母婴之家！").next().hide().next().hide().next().show();					
				}
			}
		});
	}
	
	
})
