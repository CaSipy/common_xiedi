function getStyle(obj,name){
		if(obj.currentStyle){
			return obj.currentStyle[name];
			}
		else{
			return getComputedStyle(obj,false)[name];
			}
		}
	function startmove(obj,sb,iTarget){
		clearInterval(obj.timer);
		obj.timer=setInterval(function (){
			var cur=0;
			if(sb=='opacity'){
				cur=Math.round(parseFloat(getStyle(obj,sb))*100);
			}
			else{
				cur=parseInt(getStyle(obj,sb));
				}
			var speed=(iTarget-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(iTarget==cur){
				clearInterval(obj.timer);
				}
			else{
				if(sb=='opacity'){
					obj.style.filter='alpha(opacity:'+(cur+speed)+')';
					obj.style.opacity=(cur+speed)/100;
					}
				else{
					obj.style[sb]=(cur+speed)+'px';
					}
				}
			},30);
		}
		function getByClass(oParent,sClass){
			var aEle=oParent.getElementsByTagName('*');
			var aResult=[];
			
			for(var i=0;i<aEle.length;i++){
				if(aEle[i].className==sClass){
					aResult.push(aEle[i]);
					}
				}
				return aResult;
		}
		function list(){
//			var num=0;
			var arr=[];
			for(var i=0;i<document.getElementsByName('itemlist_ad').length;i++){
//				
				arr[i]=getByClass(itemlist,'small_pic')[i];
				var aLiSmall=arr[i].getElementsByTagName('li');	
              	alert('1');
			}
			
		}
	window.onload=function (){
		
		var odiv=document.getElementById("idiv");
//		var oBtnPrev=getByClass(odiv,'prev')[0];
//		var oBtnNext=getByClass(odiv,'next')[0];
//		var oMarkLeft=getByClass(odiv,'mark_left')[0];
//		var oMarkRight=getByClass(odiv,'mark_right')[0];
		
		//大图切换
		var itemlist=document.getElementById("itemlist");
		list();
	}


