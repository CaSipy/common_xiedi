$(function() {
	
	//轮播
	daohan();
	//搜索框
	sousuo();
	contleft();
});

function daohan() {
	
//	轮播
	var iccLunbo=document.getElementById("cc-lunbo");
	var iol=iccLunbo.getElementsByTagName('ol')[0];
	var oliArr=iol.getElementsByTagName('li');
	var oul=iccLunbo.getElementsByTagName('ul')[0];
	var uliArr=oul.getElementsByTagName('li');
	var oprev=document.getElementById("prev");
	var onext=document.getElementById("next");
	var now=0;
	oul.innerHTML+=oul.innerHTML;
	oul.style.width=oul.offsetWidth+oul.offsetWidth+'px';
	for(var i=0;i<oliArr.length;i++){
		oliArr[i].index=i;
		oliArr[i].onclick=function (){
			now=this.index;
			for(var i=0;i<oliArr.length;i++){
				oliArr[i].className='';
				}
				oliArr[now].className='active';
				
				startmove(oul,{left:-uliArr[0].offsetWidth*this.index});
				//oul.style.left=-oli[0].offsetWidth*this.index+'px';
				//alert(oliArr.length);
				
		}
		function nextmove(){
			for(var i=0;i<oliArr.length;i++){
				oliArr[i].className='';
			}
			now++;
			//oul.style.left=oul.offsetLeft-oli[0].offsetWidth+'px';
			if(now==oliArr.length){
				oul.style.left=-uliArr[now].offsetWidth+'px';
				startmove(oul,{left:0});
				now=0;
			}
			else{
				startmove(oul,{left:-uliArr[now].offsetWidth*now});
			}
			oliArr[now].className='active'; 
		}
		onext.onclick=function (){
			
			nextmove();
			}
		oprev.onclick=function (){
			for(var i=0;i<oliArr.length;i++){
				oliArr[i].className='';
			}
			//now=4;
			now--;
			if(now==-1){
				
				oul.style.left=-uliArr[0].offsetWidth*(oliArr.length)+'px';
			
				startmove(oul,{left:-uliArr[0].offsetWidth*(oliArr.length-1)});
				now=4;
				}
			else{
				startmove(oul,{left:-uliArr[0].offsetWidth*now});
				}
			oliArr[now].className='active';
			//startmove(oul,{left:518*now});
			//oul.style.left=oul.offsetLeft+oli[0].offsetWidth+'px';
			//if(now==-1){
				
				//now=4;
			//}
			
			}
		}
		oprev.onmouseover=function (){
			startmove(prev,{opacity:100});
			}
		oprev.onmouseout=function (){
			startmove(prev,{opacity:30});
			}
		onext.onmouseover=function (){
			startmove(next,{opacity:100});
			}
		onext.onmouseout=function (){
			startmove(next,{opacity:30});
			}
		var itimer=null;		
		itimer=setInterval(nextmove,4000);
		iccLunbo.onmouseover=function (){
			clearInterval(itimer);
			}
		iccLunbo.onmouseout=function (){
			itimer=setInterval(nextmove,4000);
			}

	

//	导航栏二级导航
//	var xlgd_ul=document.getElementById('xlgd_ul');
//	var xlga_a_arr=xlgd_ul.getElementsByTagName('a');
//	var xlgd_li_arr=xlgd_ul.getElementsByTagName('li');
//	var xlgd_div_arr=document.getElementsByName('xl_div');
//	var now5=0;
//	var timer3=null;
//	for(var i=0;i<xlgd_li_arr.length;i++){
//		xlgd_li_arr[i].index=i;
//		clearTimeout(timer3);
//		xlga_a_arr[i].style.color='#808093';
//		xlgd_li_arr[i].onmouseover=function(){
//			clearTimeout(timer3);
//			now5=this.index;
//			for(var i=0;i<xlgd_div_arr.length;i++){
//				startmove(xlgd_div_arr[i],{opacity:0});
//				xlgd_div_arr[i].style.display='none';
//				
//			}
//			xlgd_div_arr[now5].style.display='block';
//			startmove(xlgd_div_arr[now5],{opacity:100});
//			xlga_a_arr[now5-1].style.color='#2577E3';
//		}
//		xlgd_li_arr[i].onmouseout=function(){
//			now5=this.index;
//			timer3=setTimeout(function(){
//				xlgd_div_arr[now5].style.display='none';
//				startmove(xlgd_div_arr[now5],{opacity:0});
//				
//			},800);	
//		
//			xlgd_div_arr[now5].onmouseover=function(){
//				clearTimeout(timer3);
//				startmove(this,{opacity:100});
//				this.style.display='block';
//				xlga_a_arr[now5-1].style.color='#2577E3';
//			}
//			xlgd_div_arr[now5].onmouseout=function(){
//					startmove(this,{opacity:0});
//					this.style.display='none';
//					xlga_a_arr[now5-1].style.color='#808093';
//			}
//			xlga_a_arr[now5-1].style.color='#808093';
//		}
//	}
	
	
	
	
//	alert($(".xl_div").length);
//	$liarr=$('.theader-right ul li');
//	$liarr.each(function(){
//		$(this).mouseover(function(){
//			alert('1');
//		});
//	});

	var gn_ul=document.getElementById('gn_ul');
	var gn_span=gn_ul.getElementsByTagName('span');
	var gn_now=0;
	for(var i=0;i<gn_span.length;i++){
		gn_span[i].index=i;
		gn_span[i].onclick=function(){
			gn_now=this.index;
			for(var i=0;i<gn_span.length;i++){
				gn_span[i].className='ziti';
//				gn_span[i].style.color='#3F526F';
			}
			gn_span[gn_now].className='ziti click';
//			gn_span[gn_now].style.color='#2577E3';
		}
	}
	var fg_ul = document.getElementById('fg_ul');
		var fg_span = fg_ul.getElementsByTagName('span');
		var fg_now = 0;
		for(var i = 0; i < fg_span.length; i++) {
			fg_span[i].index = i;
			fg_span[i].onclick = function() {
				fg_now = this.index;
				for(var i = 0; i < fg_span.length; i++) {
					fg_span[i].className = 'ziti';
					
				}
				fg_span[fg_now].className = 'ziti click';
			}
		}
	var content_left=document.getElementById('content-left');
	var cl_timer=null;
	content_left.onmouseover=function(){
		clearTimeout(cl_timer);
		content_left.style.overflow='visible';
	}
	content_left.onmouseout=function(){
		cl_timer=setTimeout(function(){
			content_left.style.overflow='hidden';	
			},1000);	
	}
	
}
//------------------------------------------//
//function listhot(data) {
//	
//	for(var i = 0; i < data.length; i++) {
//		var str = '<a href="gw.html?product_id=' + data[i].p_id + '">' +
//			'<p class="chxr-img">' +
//			'<img src="' + data[i].p_url + '" />' +
//			'</p>' +
//			'<p class="chxr-title">' + data[i].p_name + '</p>' +
//			'<span>' +
//			'<dfn>￥</dfn>' +
//			'' + data[i].p_price + '' +
//			'<i>起</i>' +
//			'</span>' +
//			'</a>';
//		$("#bao-xie").append(str);
//	}
//}


function listdesigner(data) {

	for(var i = 0; i < data.length; i++) {
		str = '<div>' +
			'<img src="' + data[i].u_logo + '"/>' +
			'<span>' + data[i].u_name + '</span>' +
			'</div>';
		$("#csxc-content").append(str);
	}
}

function listsupplier(data) {
	//console.log(data);
	for(var i = 0; i < data.length; i++) {
		if(i < 4) {
			str = '<a href="#"><img src="' + data[i].u_logo + '"/></a>';
			$("#cg-shang").append(str);
		} else {
			str = '<a href="#"><img src="' + data[i].u_logo + '"/></a>';
			$("#cgg-xia").append(str);
		}
	}
}

function callbackMessage(data) {
	if(data == null || data == 0) {
		$("#xiaoxin").html("");
	} else {
		$("#xiaoxin").html(data);
	}
}

//function listlunbo(data) {
//
//	//console.log(data);
//	var str = "";
//	for(var i = 0; i < data.length; i++) {
//		str += '<li><img src="' + data[i].p_url + '"></li>';
//	}
//	$("#lunbotu").append(str);
//	//轮播ol
//	var iccLunbo = document.getElementById("cc-lunbo");
//	var iol = iccLunbo.getElementsByTagName('ol')[0];
//	var oliArr = iol.getElementsByTagName('li');
//	var oul = iccLunbo.getElementsByTagName('ul')[0];
//	var uliArr = oul.getElementsByTagName('li');
//	var oprev = document.getElementById("prev");
//	var onext = document.getElementById("next");
//	var now = 0;
//	oul.innerHTML += oul.innerHTML;
//	oul.style.width = oul.offsetWidth + oul.offsetWidth + 'px';
//	for(var i = 0; i < oliArr.length; i++) {
//		oliArr[i].index = i;
//		oliArr[i].onclick = function() {
//			now = this.index;
//			for(var i = 0; i < oliArr.length; i++) {
//				oliArr[i].className = '';
//			}
//			oliArr[now].className = 'active';
//
//			startmove(oul, {
//				left: -uliArr[0].offsetWidth * this.index
//			});
//			//oul.style.left=-oli[0].offsetWidth*this.index+'px';
//			//alert(oliArr.length);
//
//		}
//
//		function nextmove() {
//
//			for(var i = 0; i < oliArr.length; i++) {
//				oliArr[i].className = '';
//			}
//			now++;
//			//oul.style.left=oul.offsetLeft-oli[0].offsetWidth+'px';
//			if(now == oliArr.length) {
//				oul.style.left = -uliArr[now].offsetWidth + 'px';
//				startmove(oul, {
//					left: 0
//				});
//				now = 0;
//			} else {
//				startmove(oul, {
//					left: -uliArr[now].offsetWidth * now
//				});
//			}
//			oliArr[now].className = 'active';
//		}
//		onext.onclick = function() {
//
//			nextmove();
//		}
//		oprev.onclick = function() {
//			for(var i = 0; i < oliArr.length; i++) {
//				oliArr[i].className = '';
//			}
//			//now=4;
//			now--;
//			if(now == -1) {
//
//				oul.style.left = -uliArr[0].offsetWidth * (oliArr.length) + 'px';
//
//				startmove(oul, {
//					left: -uliArr[0].offsetWidth * (oliArr.length - 1)
//				});
//				now = 4;
//			} else {
//				startmove(oul, {
//					left: -uliArr[0].offsetWidth * now
//				});
//			}
//			oliArr[now].className = 'active';
//			//startmove(oul,{left:518*now});
//			//oul.style.left=oul.offsetLeft+oli[0].offsetWidth+'px';
//			//if(now==-1){
//
//			//now=4;
//			//}
//
//		}
//	}
//	oprev.onmouseover = function() {
//		startmove(prev, {
//			opacity: 100
//		});
//	}
//	oprev.onmouseout = function() {
//		startmove(prev, {
//			opacity: 30
//		});
//	}
//	onext.onmouseover = function() {
//		startmove(next, {
//			opacity: 100
//		});
//	}
//	onext.onmouseout = function() {
//		startmove(next, {
//			opacity: 30
//		});
//	}
//	var itimer = null;
//	itimer = setInterval(nextmove, 4000);
//	iccLunbo.onmouseover = function() {
//		clearInterval(itimer);
//	}
//	iccLunbo.onmouseout = function() {
//		itimer = setInterval(nextmove, 4000);
//	}
//}

function getXiediMenu() {
	//分组
	_ProductBO_js.listProductTagGroups(function(data) {
		
		var str = "";
		var arr = "";
		var err = "";
		var frr = "";
		for(var i = 0; i < data.length; i++) {
			dwr.engine.setAsync(false);
			str += '<li><a>' + data[i].group_name + '</a></li>';
			arr += '<div id="fl_ejfl1" class="fl_ejfl"><p class="fld_title">' + data[i].group_name + '</p>';
			_ProductBO_js.listProductTagsById(data[i].group_id, function(data1) {
				//console.log(data1);
				
				for(var j = 0; j < data1.length; j++) {
					if(data[i].group_name == "风格") {
						if(j == 0) {
							err += '<li class="fg_li"><span id="' + data1[j].tag_id + '" onclick="getMRList(\'1\',\'' + data1[j].tag_id + '\')" class="ziti click">' + data1[j].tag_name + '</span></li>';
							getMRList('1', data1[j].tag_id);
						} else {
							err += '<li class="fg_li"><span  id="' + data1[j].tag_id + '" onclick="getMRList(\'1\',\'' + data1[j].tag_id + '\')">' + data1[j].tag_name + '</span></li>';
						}
					}
					if(data[i].group_name == "功能") {
						if(j == 0) {
							
							frr += '<li class="fg_li"><span id="' + data1[j].tag_id + '" onclick="getMRList(\'2\',\'' + data1[j].tag_id + '\')" class="ziti click">' + data1[j].tag_name + '</span></li>';
							getMRList('2', data1[j].tag_id);
						} else {
							
							frr += '<li class="fg_li"><span id="' + data1[j].tag_id + '" onclick="getMRList(\'2\',\'' + data1[j].tag_id + '\')">' + data1[j].tag_name + '</span></li>';
						}
					}
					arr += '<span><a href="#">' + data1[j].tag_name + '</a></span>';
				}
			});
			arr += '</div>';
			dwr.engine.setAsync(true);
			//$('#divId').find('p').eq(1).after(insertHtml);
		}

		$("#xiedifenzu").append(str);
		$("#xiedifenzu").append(arr);
		$("#fg_ul").append(err);
		$("#gn_ul").append(frr);
		contleft();
		getXieyangMenu();

	});
}

function getXieyangMenu() {
	//分组
	_ProductBO_js.listShoeTagGroups(function(data) {
		var str = "";
		var arr = "";
		for(var i = 0; i < data.length; i++) {
			dwr.engine.setAsync(false);
			str += '<li><a>' + data[i].group_name + '</a></li>';
			arr += '<div id="fl_ejfl1" class="fl_ejfl"><p class="fld_title">' + data[i].group_name + '</p>';
			_ProductBO_js.listShoeTagsById(data[i].group_id, function(data1) {
				//console.log(data1);					
				for(var j = 0; j < data1.length; j++) {
					arr += '<span><a href="#">' + data1[j].tag_name + '</a></span>';
				}
			});
			arr += '</div>';
			dwr.engine.setAsync(true);
			//$('#divId').find('p').eq(1).after(insertHtml);				
		}
		$("#xieyangfenzu").append(str);
		$("#xieyangfenzu").append(arr);
		contleft();
	});
}

function getMRList(type, tag_id) {
	
	_ProductBO_js.getProductInfoByID(tag_id, function(data) {
		console.log(data);
		var str = "";
		var str1 = "";
		/*判断是否为空数据*/
		if(data.length==0){
				for(var i = 0; i < 5; i++) {
					
					str += '<a href="gw.html" class="fg_a">'
						+'		<p class="chxr-img">'
						+'		<img src="../img/5J211(1).png" />'
						+'	</p>'
						+'	<p class="chxr-title">滑板鞋1</p>'
						+'	<span>'
						+'		<dfn>￥</dfn>'
						+'		"XXX"'
						+'		<i>起</i>'
						+'	</span>'
						+'</a>';
					$("#style-xie").html(str);
				}

				var fg_ul = document.getElementById('fg_ul');
				var fg_span = fg_ul.getElementsByTagName('span');
				for(var i = 0; i < fg_span.length; i++) {
					fg_span[i].className = 'ziti';
					//					gn_span[i].style.color='#3F526F';
				}
				$("#" + tag_id).attr("class", "ziti click");
				//				gn_span[gn_now].style.color='#2577E3';

			
				
				for(var i = 0; i < 5; i++) {
					str1 += '<a href="gw.html" class="fg_a">'
						+'		<p class="chxr-img">'
						+'		<img src="../img/5J230(1).png" />'
						+'	</p>'
						+'	<p class="chxr-title">滑板鞋1</p>'
						+'	<span>'
						+'		<dfn>￥</dfn>'
						+'		"XXX"'
						+'		<i>起</i>'
						+'	</span>'
						+'</a>';
					
					$("#effect-xie").html(str1);
					
				}
				var gn_ul = document.getElementById('gn_ul');
				var gn_span = gn_ul.getElementsByTagName('span');
				for(var i = 0; i < gn_span.length; i++) {
					gn_span[i].className = 'ziti';
				}
				$("#" + tag_id).attr("class", "ziti click");
			
		}
		else{
		if(type == 1) {
			
			for(var i = 0; i < data.length; i++) {
				
				str += '<a href="#">' +
					'<p class="chxr-img">' +
					'<img src="' + data[i].p_url + '" />' +
					'</p>' +
					'<p class="chxr-title">' + data[i].p_name + '</p>' +
					'<span>' +
					'<dfn>￥</dfn>' +
					'' + data[i].p_price + '' +
					'<i>起</i>' +
					'</span>' +
					'</a>';
				$("#style-xie").html(str);
			}

			var fg_ul = document.getElementById('fg_ul');
			var fg_span = fg_ul.getElementsByTagName('span');
			for(var i = 0; i < fg_span.length; i++) {
				fg_span[i].className = 'ziti';
				//					gn_span[i].style.color='#3F526F';
			}
			$("#" + tag_id).attr("class", "ziti click");
			//				gn_span[gn_now].style.color='#2577E3';

		} else if(type == 2) {
			for(var i = 0; i < data.length; i++) {
				str += '<a href="#">' +
					'<p class="chxr-img">' +
					'<img src="' + data[i].p_url + '" />' +
					'</p>' +
					'<p class="chxr-title">' + data[i].p_name + '</p>' +
					'<span>' +
					'<dfn>￥</dfn>' +
					'' + data[i].p_price + '' +
					'<i>起</i>' +
					'</span>' +
					'</a>';
				
				$("#effect-xie").html(str);
				
			}
			var gn_ul = document.getElementById('gn_ul');
			var gn_span = gn_ul.getElementsByTagName('span');
			for(var i = 0; i < gn_span.length; i++) {
				gn_span[i].className = 'ziti';
			}
			$("#" + tag_id).attr("class", "ziti click");
		}
		}
	});
}
//轮播交互
function LunBo(){
	
	_ProductBO_js.getLunBo(function(data){
		
		var path=request.getContextPath();
		var str=0;
//		console.log(data);
		for(var i=0;i<data.length;i++){
			str+='<li><a href="gysjs.html"><img src="'+data[i].p_url+'"></a></li>'
			+'	<li><a href="gysjs.html"><img src="'+data[i].p_url+'"></a></li>'
			+'	<li><a href="gysjs.html"><img src="'+data[i].p_url+'"></a></li>'
			+'	<li><a href="gysjs.html"><img src="'+data[i].p_url+'"></a></li>'
			+'	<li><a href="gysjs.html"><img src="'+data[i].p_url+'"></a></li>';
		}
		$('#cc-lunbo ul').html(str);
		
	});
	
}
//爆款推荐
function LHot(){
	_ProductBO_js.listHot(function(data){
		var str='';
		console.log(data);
		for(var i=0;i<data.length;i++){
			
			str+='<a href="gw.html">'
				+'<p class="chxr-img">'
				+'<img src="'+data[i].p_url+'" />'
				+'</p>'
				+'<p class="chxr-title">'+data[i].p_code+'</p>'
				+'<span>'
				+'<dfn>￥</dfn>'
				+''+data[i].p_price+''
				+'<i>起</i>'
				+'</span>'
				+'</a>';
			
			
		}
		$("#bao-xie").html(str);
	});
}
//新款推荐
function listnew(){
	_ProductBO_js.listNew(function(data){
	var str='';
	for(var i=0;i<data.length;i++){
		str+='<a href="#">'
			+'<p class="chxr-img">'
			+'<img src="'+data[i].p_url+'" />'
			+'</p>'
			+'<p class="chxr-title">'+data[i].p_code+'</p>'
			+'<span>'
			+'<dfn>￥</dfn>'
			+data[i].p_price
			+'<i>起</i>'
			+'</span>'
			+'</a>';
		
		}	
		$("#xin-xie").html(str);
	});
}
//风格专区
function liststyle(){
	_ProductBO_js.listStyleTag(function(data){
	for(var i=0;i<data.length;i++){
	str+='<a href="#">'
		+'<p class="chxr-img">'
		+'<img src="'+data[i].p_url+'" />'
		+'</p>'
		+'<p class="chxr-title">'+data[i].p_code+'</p>'
		+'<span>'
		+'<dfn>￥</dfn>'
		+''+data[i].p_price+''
		+'<i>起</i>'
		+'</span>'
		+'</a>';
	$("#style-xie").html(str);
	}	
	});
}
//功能专区
function listeffect(){		
	_ProductBO_js.listEffect(function(data){
	for(var i=0;i<data.length;i++){
	str+='<a href="#">'
		+'<p class="chxr-img">'
		+'<img src="'+data[i].p_url+'" />'
		+'</p>'
		+'<p class="chxr-title">'+data[i].p_code+'</p>'
		+'<span>'
		+'<dfn>￥</dfn>'
		+''+data[i].p_price+''
		+'<i>起</i>'
		+'</span>'
		+'</a>';
	$("#effect-xie").html(str);
	}	
	});
}