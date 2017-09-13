$(document).ready(function(){  
	$("#loginimg").click(function(){  
	  	$("#login").css('display','none');
	  	$("#erm").css('display','block');
	  });  
	  
	   $("#ermimg").click(function(){  
	  	$("#login").css('display','block');
	  	$("#erm").css('display','none');
	  });
	   $('#loginName').click(function(){
			$('#no_id').css('display','none');
			$('#wrongPass').css('display','none');
		});
		$('#password').click(function(){
			$('#no_id').css('display','none');
			$('#wrongPass').css('display','none');
		});
});
function login(){
	var loginName=$("#loginName").val();
	var password=$("#password").val();
	if(loginName==null||loginName==""){
		$('#no_id p').html("登录名为空");
		$('#no_id').css('display','block');
		return;
	}else if(password==null|password==""){
		$('#wrongPass p').html("密码为空");
		$('#wrongPass').css('display','block');
		return;
	}else{
		_UserBO_js.checkLogin(loginName,password,function(data){
			
			if(data==1){
				$('#no_id p').html("用户不存在");
				$('#no_id').css('display','block');
				return;
			}else if(data==2){
				$('#wrongPass p').html("密码错误");
				$('#wrongPass').css('display','block');
				return;
			}else if(data==0){
				$('#no_id').css('display','none');
				$('#wrongPass').css('display','none');
				window.location.href="pc_index.html";
			}else{
				$('#no_id p').html("系统错误");
				$('#no_id').css('display','block');
			}
		});
	}
};
function regist(){
	var phone=$("#phone").val();
	var code=$("#code").val();
	_UserBO_js.regist(phone,code,function(data){
		alert(data);
		if(data==2){
			
		}else if(data==1){
			
		}else if(data==3){
			
		}else{
			
		}		
	});
}
function getPassword(){
	var phone=$("#phone").val();
	var code=$("#code").val();
	_UserBO_js.getPassword(phone,code,function(data){
		alert(data);
		if(data==2){
			
		}else if(data==1){
			
		}else if(data==3){
			
		}else{
			
		}		
	});
	
}