$(document).ready(function(){  
	$('input').click(function(){
		$('#no_id').css('display','none');
		$('#wrongPass').css('display','none');
	});
});
//第一个确定
function registCheckcode(){
	var phone=$("#phone").val();
	var code=$("#code").val();
	_UserBO_js.registCheckcode(phone,code,function(data){
		alert(data);
		if(data==2){
			
		}else if(data==1){
			
		}else if(data==3){
			
		}else{
			
		}		
	});
}
//第二个确认
function savePassword(){
	var password="";
	var phone=$("#phone").val();
	alert(phone);
	var pass1=$("#pass1").val();
	var pass2=$("#pass2").val();
	if(pass1==""||pass1==null){
		
	}else if(pass2==""||pass2==null){
		
	}else if(pass1!=pass2){
		
	}else{
	_UserBO_js.doSaveRegistInfo(phone,password,function(){
		
	});
	}
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