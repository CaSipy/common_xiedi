//首页所用框架最终版本
function getStyle(obj, name) {
	if(obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj, false)[name];
	}
}

function startmove(obj, json, fnEnd) {
	//先把定时器关了 确保每次调用不会重复
	clearInterval(obj.timer);
	//打开一个新的定时器	
	obj.timer = setInterval(function() {
		//定义一个变量 假设所有值都运行了
		var bStop = true;
		//做一个循环 使得每个值都可以同时运行 运行一个的同时可以运行另外的值
		for(var sb in json) {
			//定义cur cur为文本获取的实际值
			var cur = 0;
			//判断传入的参数是否为opacity
			if(sb == 'opacity') {
				cur = Math.round(parseFloat(getStyle(obj, sb)) * 100);
			} else {
				cur = parseInt(getStyle(obj, sb));
			}
			//定义变化的速度speed json[sb]为目标值
			var speed = (json[sb] - cur) / 6;
			//判断speed是往上收还是往下收整
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//倘若实际值还未达到目标值 则把bStop变成false
			if(cur != json[sb])
				bStop = false;
			//判断传入的值是否为opacity
			if(sb == 'opacity') {
				obj.style.filter = 'alpha(opacity:' + (speed + cur) + ')';
				obj.style.opacity = (speed + cur) / 100;
			} else {

				obj.style[sb] = speed + cur + 'px';
			}
		}
		//如果bStop变成true 所有值达到了 就关闭定时器 并执行新的函数
		if(bStop) {
			clearInterval(obj.timer);
			if(fnEnd) fnEnd();
		}
	}, 30);
}

function startmove1(obj, sb, iTarget) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var cur = 0;
		if(sb == 'opacity') {
			cur = Math.round(parseFloat(getStyle(obj, sb)) * 100);
		} else {
			cur = parseInt(getStyle(obj, sb));
		}
		var speed = (iTarget - cur) / 6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(iTarget == cur) {
			clearInterval(obj.timer);
		} else {
			if(sb == 'opacity') {
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
				obj.style.opacity = (cur + speed) / 100;
			} else {
				obj.style[sb] = (cur + speed) + 'px';
			}
		}
	}, 30);
}
function getByClass(oParent, sClass) {
	var aEle = oParent.getElementsByTagName('*');
	var aResult = [];

	for(var i = 0; i < aEle.length; i++) {
		if(aEle[i].className == sClass) {
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

function stopBubble(e) {
	// 如果传入了事件对象，那么就是非ie浏览器  
	if(e && e.stopPropagation) {
		//因此它支持W3C的stopPropagation()方法  
		e.stopPropagation();
	} else {
		//否则我们使用ie的方法来取消事件冒泡  
		window.event.cancelBubble = true;
	}
}

function sousuo() {
	//搜索框
	var itsCondition = document.getElementById("ts-condition");
	var tsSousuobtn = document.getElementById("ts-sousuo-btn")
	var tsSousuotxt = document.getElementById('ts-sousuo-txt');
	tsSousuotxt.onclick = function() {
			startmove(itsCondition, {opacity: 100});
			
			itsCondition.style.display = 'block';
		}
		//	tsSousuotxt.onblur=function(){
		//		startmove(itsCondition,{opacity:0});
		//		itsCondition.style.display='none';
		//	}

	var tscClose = document.getElementById('tsc-close');
	var select_ul = document.getElementById('select_ul');
		tscClose.onmouseover = function() {
		startmove(tscClose, {
			opacity: 100
		});
	}
	tscClose.onmouseout = function() {
		startmove(tscClose, {
			opacity: 10
		});
	}
	tscClose.onclick = function() {
		startmove(itsCondition, {
			opacity: 0
		});
		select_ul.innerHTML='';
		
		itsCondition.style.display = 'none';
	}
	

	//导航按钮
	var itsSelect = document.getElementById("ts-select");
	var itsArr = itsSelect.getElementsByTagName('a');
	for(var i = 0; i < itsArr.length; i++) {

		itsArr[i].onclick = function() {
			for(var i = 0; i < itsArr.length; i++) {
				itsArr[i].className = '';
			}
			this.className = 'active';
		}
	}

	$("#select1 li").click(function() {
			$(this).addClass("selected").siblings().removeClass("selected");
			var copyThisA = $(this).clone();
			//console.log(copyThisA);
			if($("#selectA").length > 0) {
				$("#selectA a").html($(this).text());
			} else {
				$(".select-result ul").append(copyThisA.attr("id", "selectA"));
			}
		});
		$("#select2 li").click(function() {
			var type = $(this).attr("date-type");
			var copyThisB = $(this).clone();
			if($(this).hasClass("selected")) {
				$(".select-result li[date-type='" + type + "']").remove();
			} else {
				$(".select-result ul").append(copyThisB);
			};
			$(this).toggleClass("selected");

		});
		$("#select3 li").click(function() {
			
			$(this).addClass("selected").siblings().removeClass("selected");
			var copyThisC = $(this).clone();
			if($("#selectC").length > 0) {
				$("#selectC a").html($(this).text());
			} else {
				$(".select-result ul").append(copyThisC.attr("id", "selectC"));
			}
		});
		$("#selectA").on("click", function() {
			$(this).remove();
			$("#select1 li").removeClass("selected");
		});
		$(".select-result ul").delegate("li", "click", function() {
			var type = $(this).attr("date-type");
			var num = $(this).data('num');
			$(this).fadeOut();
			$("#select2 li[date-type='" + type + "']").removeClass("selected");
			if(num == 'select3') {
				$("#select3 li").removeClass("selected");
			} else if(num == 'select1') {
				$("#select1 li").removeClass("selected");
			}

			$(this).remove();
		});
		$("#selectC").on("click", function() {
			$(this).remove();
			$("#select3 li").removeClass("selected");
		});

	
	var select_a = select_ul.getElementsByTagName('a');
	var txt_sousuo = document.getElementById('ts-sousuo-txt');
	var btn_sousuo = document.getElementById('ts-sousuo-btn');
	btn_sousuo.onclick = function() {
		var arr = [];
		for(var i = 0; i < select_a.length; i++) {
			var tx = select_a[i].innerText;
			arr.push(tx);
		}
		var itx = txt_sousuo.value;
		arr.push(itx);
		arr.pop();
		localStorage.setItem('value', arr);
		window.location='erji.html';
	}
//	二维码
	var mo_emw=document.getElementById('mo_ewm');
	var mo=document.getElementById('mo');
	mo.onmouseover=function(){
		mo_emw.style.display='block';
	}
	mo.onmouseout=function(){
		mo_emw.style.display='none';
	}
}
function contleft(){
	//contentleft按钮
	var iclShang=document.getElementById("cl-shang");
	var iclArr=iclShang.getElementsByTagName('a');
	var iclXia=document.getElementById("cl-xia");
	var iclxArr=iclXia.getElementsByTagName('ul');
	var now1=0;
	for(var i=0;i<iclArr.length;i++){
		iclArr[i].index=i;
		iclArr[i].onclick=function(){
			now1=this.index;
			for(var i=0;i<iclArr.length;i++){
				iclArr[i].className='';
				iclxArr[i].className='';
			}
			iclArr[now1].className='active1';
			iclxArr[now1].className='active2';
		}
	}
	
	//左侧分类导航

	var iclXia=document.getElementById('cl-xia');
	var clxUl1=iclXia.getElementsByTagName('ul')[0];
	var clxUl2=iclXia.getElementsByTagName('ul')[1];
	var clxulArr1=clxUl1.getElementsByTagName('li');
	var clxudArr1=clxUl1.getElementsByTagName('div');
	var clxulArr2=clxUl2.getElementsByTagName('li');
	var clxudArr2=clxUl2.getElementsByTagName('div');
	var clxaArr1=clxUl1.getElementsByTagName('a');
	var clxaArr2=clxUl2.getElementsByTagName('a');
	var now3=0;
	var timer3=null;
	var timer2=null;
	var tip="";
	var index_sel='';
	for(var i=0;i<clxulArr1.length;i++){
		clxulArr1[i].index=i;
		clearTimeout(timer2);
		clxulArr1[i].onmouseover=function(){
			clearTimeout(timer2);
			now3=this.index;
			for(var i=0;i<clxudArr1.length;i++){
				startmove(clxudArr1[i],{opacity:0});
				clxudArr1[i].style.display='none';
				
			}
			clxudArr1[now3].style.display='block';
			clxulArr1[now3].style.color="black";
			clxulArr1[now3].style.backgroundColor="white";
			startmove(clxudArr1[now3],{opacity:100});
			clxaArr1[now3].style.color='black';
			var index_p=clxudArr1[now3].getElementsByTagName('p')[0].innerText;
			var Aarr=clxudArr1[now3].getElementsByTagName('a');
			for(var i=0;i<Aarr.length;i++){
				Aarr[i].onclick=function(){
					tip=this.innerText;
					index_sel=index_p+','+tip;
					localStorage.setItem('value',index_sel);
					window.location='erji.html';
				}
			}
		}
		clxulArr1[i].onmouseout=function(){
			now3=this.index;
			
			clxulArr1[now3].style.backgroundColor="#143C6F";
			timer2=setTimeout(function(){
				clxudArr1[now3].style.display='none';
				startmove(clxudArr1[now3],{opacity:0});
				
			},800);	
		
			clxudArr1[now3].onmouseover=function(){
				clearTimeout(timer2);
				startmove(this,{opacity:100});
				this.style.display='block';
				clxaArr1[now3].style.color='black';
				clxulArr1[now3].style.backgroundColor="white";
			}
			clxudArr1[now3].onmouseout=function(){
					startmove(this,{opacity:0});
					this.style.display='none';
					clxaArr1[now3].style.color='white';
					clxulArr1[now3].style.backgroundColor="#143C6F";
			}
			if(clxudArr1[now3].style.display=='block'){
				clxaArr1[now3].style.color='black';
			}
			else if(clxudArr1[now3].style.display=='none'){
				clxaArr1[now3].style.color='white';
			}
			clxaArr1[now3].style.color="white";
			clxulArr1[now3].style.backgroundColor="#143C6F";
		}
	}
	for(var i=0;i<clxulArr2.length;i++){
		clxulArr2[i].index=i;
		clearTimeout(timer3);
		clxulArr2[i].onmouseover=function(){
			clearTimeout(timer3);
			now3=this.index;
			for(var i=0;i<clxudArr2.length;i++){
				startmove(clxudArr2[i],{opacity:0});
				clxudArr2[i].style.display='none';
			}
			clxudArr2[now3].style.display='block';
			clxulArr2[now3].style.color="black";
			clxulArr2[now3].style.backgroundColor="white";
			startmove(clxudArr2[now3],{opacity:100});	
			clxaArr2[now3].style.color='black';
		}
		clxulArr2[i].onmouseout=function(){
			now3=this.index;
			clxaArr2[now3].style.color='white';
			timer3=setTimeout(function(){
				clxudArr1[now3].style.display='none';
				startmove(clxudArr2[now3],{opacity:0});
			},800);	
		
			clxudArr2[now3].onmouseover=function(){
				clearTimeout(timer3);
				startmove(this,{opacity:100});
				this.style.display='block';
				clxaArr2[now3].style.color='black';
				clxulArr2[now3].style.backgroundColor="white";
			}
			clxudArr2[now3].onmouseout=function(){
				startmove(this,{opacity:0});
				this.style.display='none';
				clxaArr2[now3].style.color='white';
				clxulArr2[now3].style.backgroundColor="#143C6F";
			}
			if(clxudArr2[now3].style.display=='block'){
				clxaArr2[now3].style.color='black';
			}
			else if(clxudArr2[now3].style.display=='none'){
				clxaArr2[now3].style.color='white';
			}
			clxaArr2[now3].style.color="white";
			clxulArr2[now3].style.backgroundColor="#143C6F";
		}
	}
	
}
function all_show(){
	var ej_a1=document.getElementById('ej_a1');
	var ej_dh_left=document.getElementById('ej_dh_left');
	ej_a1.onmouseover=function(){
		startmove(ej_dh_left,{height:425});
		ej_dh_left.style.overflow='visible';
		ej_dh_left.style.zIndex='10000';
		ej_dh_left.onmouseover=function(){
			ej_dh_left.style.overflow='visible';
			startmove(ej_dh_left,{height:425});
			ej_dh_left.style.zIndex='10000';
		}
		ej_dh_left.onmouseout=function(){
			startmove(ej_dh_left,{height:0});
			ej_dh_left.style.overflow='hidden';
		}
	}
	ej_a1.onmouseout=function(){
		startmove(ej_dh_left,{height:0});
		ej_dh_left.style.overflow='hidden';
	}
}

