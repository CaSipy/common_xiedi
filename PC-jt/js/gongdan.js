
function hot_kuai(data){
	var str="";
	for(var i=0;i<data.length;i++){
		str+='<div class="gdl_kuai">'
			+'<img src="'+data.img_url+'" alt="" />'
			+'<span>'+data.m+'</span></div>';
	
	}
	if(str!=''){
		('#hotshow').append(str);
	}
	
}



var uid="sasuejs";
var q_id="sasuejs";
function submit_sendImg(){
	
	var file = dwr.util.getValue("sendImg");
	
	
//alert(file.value);//不同浏览器在此处得到的值,不一定相同....IE9得到的是含全路径的文件名, firefox12得到的是文件名	
_WdBODwr_js.doSendImg(file,file.value, uid,q_id,function(data) {
	//显示图片
	$('.js_logoBox').attr('src','/youdi_pc'+data);
	//
	$('#img_url').val('/youdi_pc'+data);
	alert('图片上传成功');
	});
}
function text(){
	var str=$('#form').val();
	var url=$('#img_url').val();
	if(str==''){
		alert('请输入详细说明信息');
		
	}
	else{
		_WdBODwr_js.doCreatOrder(url,uid,str,function(data) {
			if(data){
				alert('工单提交成功');
				$('#form').val('');
			}
			else{
			alert('工单提交失败');
			}
			});
	}
}
/* $(".js_upFile").uploadView({
uploadBox: '.js_uploadBox', //设置上传框容器
showBox: '.js_showBox', //设置显示预览图片的容器
width: 480, //预览图片的宽度，单位px
height: 360, //预览图片的高度，单位px
allowType: ["gif", "jpeg", "jpg", "bmp", "png"], //允许上传图片的类型
maxSize: 2, //允许上传图片的最大尺寸，单位M
success: function(e) {
	$(".js_uploadText").text('更改');
	alert('图片上传成功');
}
}); */
//---------------------------------------
//	业务员客户身份切换
$("#gdr_top").children('ul').children('li').click(function(){
$(this).children('a').addClass('gd_select').parent('li').siblings().children('a').removeClass('gd_select');
var ren = $(this).data('ren');
$('#'+ren).removeClass('gd_hide').siblings().addClass('gd_hide ');
});

//	业务员抢单
$("#gd_yqd").click(function(){
window.location='wechat_xxnr.html';
});
//	客户导航切换
$('#mes_dh').children('ul').children('li').click(function() {

$(this).removeClass('mes_active').siblings().addClass('mes_active ');
var base = $(this).data('base');

$('#'+base).removeClass('gd_hide').siblings().addClass('gd_hide ');
});
//业务员导航切换
$('#mes_ydh').children('ul').children('li').click(function() {

$(this).removeClass('mes_active').siblings().addClass('mes_active ');
var ybase = $(this).data('ybase');

$('#'+ybase).removeClass('gd_hide').siblings().addClass('gd_hide ');
});
$(function(){
com();
gdt_ygk();
//_UserBO_js.listDesigner(hot_kuai);
//客户
//概况
 $("#gdt_gk").click(function(){
 
	_WdBODwr_js.doGetOrder(uid,function(data){
		var str='';
		for(var i=0;i<data.length;i++){
		str+='<tr>'
				+'<td>'+data[i].core+'</td>'
				+'<td>'+data[i].username+'</td>'
				+'<td>'+data[i].pic+'</td>'
				+'<td>'
				+'	'+data[i].message+'</p>'
				+'</td>'
				+'<td>'+data[i].add_time+'</td>'
				+'<td>'+data[i].state+'</td>'
				+'</tr>';
		}
		$("#gdt_con").html(str);
	});
	
}); 
//未处理
$("#gdt_wcl").click(function(){
	_WdBODwr_js.doGetUntreatedOrder(uid,function(data){
		var str='';
		for(var i=0;i<data.length;i++){
		str+='<tr>'
				+'<td>'+data[i].core+'</td>'
				+'<td>'+data[i].username+'</td>'
				+'<td>'+data[i].pic+'</td>'
				+'<td>'
				+'	'+data[i].message+'</p>'
				+'</td>'
				+'<td>'+data[i].add_time+'</td>'
				+'<td>'+data[i].state+'</td>'
				+'</tr>';
		}
		$("#gdt_con").html(str);
	});
	
});
//处理中
$("#gdt_clz").click(function(){
	_WdBODwr_js.doGetDealingOrder(uid,function(data){
		var str='';
		for(var i=0;i<data.length;i++){
		str+='<tr>'
				+'<td>'+data[i].core+'</td>'
				+'<td>'+data[i].username+'</td>'
				+'<td>'+data[i].pic+'</td>'
				+'<td>'
				+'	'+data[i].message+'</p>'
				+'</td>'
				+'<td>'+data[i].add_time+'</td>'
				+'<td>'+data[i].state+'</td>'
				+'</tr>';
		}
		$("#gdt_con").html(str);
	});
	
});
//已处理
$("#gdt_ycl").click(function(){
	_WdBODwr_js.doGetDealOrder(uid,function(data){
		var str='';
		for(var i=0;i<data.length;i++){
		str+='<tr>'
				+'<td>'+data[i].core+'</td>'
				+'<td>'+data[i].username+'</td>'
				+'<td>'+data[i].pic+'</td>'
				+'<td>'
				+'	'+data[i].message+'</p>'
				+'</td>'
				+'<td>'+data[i].add_time+'</td>'
				+'<td>'+data[i].state+'</td>'
				+'</tr>';
		}
		$("#gdt_con").html(str);
	});
	
});
//已关闭
$("#gdt_ygb").click(function(){
	_WdBODwr_js.doGetShutOrder(uid,function(data){
		var str='';
		for(var i=0;i<data.length;i++){
		str+='<tr>'
				+'<td>'+data[i].core+'</td>'
				+'<td>'+data[i].username+'</td>'
				+'<td>'+data[i].pic+'</td>'
				+'<td>'
				+'	'+data[i].message+'</p>'
				+'</td>'
				+'<td>'+data[i].add_time+'</td>'
				+'<td>'+data[i].state+'</td>'
				+'</tr>';
		}
		$("#gdt_con").html(str);
	});
	
});

//业务员
//概况
function gdt_ygk(){
	_WdBODwr_js.doGetOrder(uid,function(data){
		var str='';
		for(var i=0;i<data.length;i++){
		str+='<tr>'
				+'<td>'+data[i].core+'</td>'
				+'<td>'+data[i].username+'</td>'
				+'<td>'+data[i].pic+'</td>'
				+'<td>'
				+'	'+data[i].message+'</p>'
				+'</td>'
				+'<td>'+data[i].add_time+'</td>'
				+'<td>'+data[i].state+'</td>'
				+'</tr>';
		}
		$("#gdt_ycon").html(str);
	});
	
}

//未处理
$("#gdt_ywcl").click(function(){
	_WdBODwr_js.doGetUntreatedOrder(uid,function(data){
		var str='';
		for(var i=0;i<data.length;i++){
		str+='<tr>'
				+'<td>'+data[i].core+'</td>'
				+'<td>'+data[i].username+'</td>'
				+'<td>'+data[i].pic+'</td>'
				+'<td>'
				+'	'+data[i].message+'</p>'
				+'</td>'
				+'<td>'+data[i].add_time+'</td>'
				+'<td>'+data[i].state+'</td>'
				+'</tr>';
		}
		$("#gdt_ycon").html(str);
	});
	
});
//处理中
$("#gdt_yclz").click(function(){
	_WdBODwr_js.doGetDealingOrder(uid,function(data){
		var str='';
		for(var i=0;i<data.length;i++){
		str+='<tr>'
				+'<td>'+data[i].core+'</td>'
				+'<td>'+data[i].username+'</td>'
				+'<td>'+data[i].pic+'</td>'
				+'<td>'
				+'	'+data[i].message+'</p>'
				+'</td>'
				+'<td>'+data[i].add_time+'</td>'
				+'<td>'+data[i].state+'</td>'
				+'</tr>';
		}
		$("#gdt_ycon").html(str);
	});
	
});
//已处理
$("#gdt_yycl").click(function(){
	_WdBODwr_js.doGetDealOrder(uid,function(data){
		var str='';
		for(var i=0;i<data.length;i++){
		str+='<tr>'
				+'<td>'+data[i].core+'</td>'
				+'<td>'+data[i].username+'</td>'
				+'<td>'+data[i].pic+'</td>'
				+'<td>'
				+'	'+data[i].message+'</p>'
				+'</td>'
				+'<td>'+data[i].add_time+'</td>'
				+'<td>'+data[i].state+'</td>'
				+'</tr>';
		}
		$("#gdt_ycon").html(str);
	});
	
});
//已关闭
$("#gdt_yygb").click(function(){
	_WdBODwr_js.doGetShutOrder(uid,function(data){
		var str='';
		for(var i=0;i<data.length;i++){
		str+='<tr>'
				+'<td>'+data[i].core+'</td>'
				+'<td>'+data[i].username+'</td>'
				+'<td>'+data[i].pic+'</td>'
				+'<td>'
				+'	'+data[i].message+'</p>'
				+'</td>'
				+'<td>'+data[i].add_time+'</td>'
				+'<td>'+data[i].state+'</td>'
				+'</tr>';
		}
		$("#gdt_ycon").html(str);
	});
});
});