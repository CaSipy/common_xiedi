

window.onload = function() {
	var odiv = document.getElementById("idiv");
	var oBtnPrev = getByClass(odiv, 'prev')[0];
	var oBtnNext = getByClass(odiv, 'next')[0];
	var oMarkLeft = getByClass(odiv, 'mark_left')[0];
	var oMarkRight = getByClass(odiv, 'mark_right')[0];
	//左右按钮
	
		//大图切换

	var odivSmall = getByClass(odiv, 'small_pic')[0];
	var oUlSmall = odivSmall.getElementsByTagName('ul')[0];
	var aLiSmall = odivSmall.getElementsByTagName('li');

	var oUlBig = getByClass(odiv, 'big_pic')[0];
	var aLiBig = oUlBig.getElementsByTagName('li');

	var nowZIndex = 2;
	var now = 0;

	odivSmall.style.height = aLiSmall.length * aLiSmall[0].offsetHeight + 50 + 'px';

	for(var i = 0; i < aLiSmall.length; i++) {
		aLiSmall[i].index = i;
		aLiSmall[i].onclick = function() {
			if(this.index == now) return;
			now = this.index;
			tab();
		}

		aLiSmall[i].onmouseover = function() {
			startmove1(this, 'opacity', 100);
		}
		aLiSmall[i].onmouseout = function() {
			if(this.index != now) {
				startmove1(this, 'opacity', 60);
			}
		};
	}
	//把图片展示封装起来
	function tab() {
		aLiBig[now].style.zIndex = nowZIndex++;
		
		//使小图所有变成透明
		for(var i = 0; i < aLiSmall.length; i++) {
			startmove1(aLiSmall[i], 'opacity', 60);
			aLiSmall[i].style.border = '0px';
		}
		//使当前的变为不透明
		startmove1(aLiSmall[now], 'opacity', 100);
		aLiSmall[now].style.border = '2px solid #FF9913';
		aLiBig[now].style.height = 0;
		startmove1(aLiBig[now], 'height', 520);

		if(now == 0) {

			startmove1(oUlSmall, 'left', 0);
		}
		//					else if(now==aLiSmall.length-1){
		//						
		//						startmove1(oUlSmall,'left',-(now-2)*aLiSmall[0].offsetWidth);
		//						}
		//					else{
		//						
		//					startmove(oUlSmall,'left',-(now-1)*aLiSmall[0].offsetWidth);
		//						}
	}
	oBtnPrev.onclick = function() {
		now--;
		if(now == -1) {
			now = aLiSmall.length - 1;
		}
		tab();
	}
	oBtnNext.onclick = function() {
		now++;
		if(now == aLiSmall.length) {
			now = 0;
		}
		tab();
	};
	var timer = setInterval(oBtnNext.onclick, 3000);
	odiv.onmouseover = function() {
		clearInterval(timer);
	};
	odiv.onmouseout = function() {
		timer = setInterval(oBtnNext.onclick, 3000);
	};
	//		鞋子颜色
	var gw_p = document.getElementById('gw_p');
	var gwp_arr = gw_p.getElementsByTagName('i');
	var gw_now = 0;
	var gw_p_span=document.getElementById('gw_p_span');
	var gw_arr=['黑/大学红/土灰','白/大学红/黑','白/大学蓝/土灰','黑/军绿/土灰','米白/大学红/土灰','暗黄/大学红/土灰'];
	for(var i = 0; i < gwp_arr.length; i++) {
		gwp_arr[i].index = i;
		gwp_arr[i].onclick = function() {
			gw_now = this.index;
			for(var i=0;i<gwp_arr.length;i++){
				gwp_arr[i].style.borderColor = '#E8E8E8';
				gw_p_span.innerText='';
			}
			gwp_arr[gw_now].style.border = '2px solid #FF9913';
			gw_p_span.innerText=gw_arr[gw_now];
		}
	}
//鞋码-------------------------------------------------------
//	var t_number = document.getElementById('t-number');
//	var t_number_arr = t_number.getElementsByTagName('i');
//	var t_number_now = 0;
//	for(var i = 0; i < t_number_arr.length; i++) {
//		t_number_arr[i].index = i;
//		t_number_arr[i].onclick = function() {
//			t_number_now = this.index;
//			for(var i=0;i<t_number_arr.length;i++){
//				t_number_arr[i].style.borderColor = '#E8E8E8';
//			}
//			t_number_arr[t_number_now].style.border = '2px solid #FF9913';
//		}
//	}
	//下单按钮
//	var itsSelect=document.getElementById("ts-select");
//	var itsArr=itsSelect.getElementsByTagName('a');
//	for(var i=0;i<itsArr.length;i++){
//		
//		itsArr[i].onclick=function (){
//			for(var i=0;i<itsArr.length;i++){
//				itsArr[i].className='';		
//			}
//			this.className='active';
//		}	
//	}
	
	
}