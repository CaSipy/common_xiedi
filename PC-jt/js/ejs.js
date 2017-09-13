//轮播动画效果
function yunxin() {
	$('.imgbox').each(function() {
		$(this).mouseover(function() {

			$(this).siblings('.smallcontainer').removeClass('hide');
			$(this).parent('.overstyle').addClass('zindex');
		});
		$(this).parent('.overstyle').mouseleave(function(e) {
			$(this).removeClass('zindex');
			$(this).children('.smallcontainer').addClass('hide');

		});
		$(this).siblings('.smallcontainer').find('li').mouseover(function() {
			//	console.log($(this).data('num'));
			//alert($(this).data('num'));
			$(this).parents('.smallcontainer').siblings('.imgbox').children('ul').css({
				'left': '-' + ($(this).data('num') - 1) * 210 + 'px'
			});
		});
		$(this).siblings('.smallcontainer').find('.turnright').click(function() {
			$(this).siblings('.imgsmallbox').children('ul').animate({
				'left': '-150px'
			}, "slow");
			$(this).addClass('opa');
			$(this).siblings('.turnleft').removeClass('opa');
		});
		$(this).siblings('.smallcontainer').find('.turnleft').click(function() {
			$(this).siblings('.imgsmallbox').children('ul').animate({
				'left': '0px'
			}, "slow");
			$(this).addClass('opa');
			$(this).siblings('.turnright').removeClass('opa');
		});

	});
}

var n = 0;
//商品展示块
function list(data) {
	console.log(data);
	for(var i = 0; i < data.length; i++) {
		var str = "";
		str = '<div class="container" >' +
			'	<div class="overstyle">' +
			'		<div class="imgbox" id="imgbox_ul' + n + '">' +
			'			<ul>' +
			'<li data-num="1"><a href="www.baidu.com"><img src="' + data[i].pic_url + '" alt=""></a></li>';
		var arrurl = data[i].p_url.split(",");
		for(var j = 0; j < arrurl.length; j++) {
			str += '<li data-num="' + (j + 2) + '" ><a href="www.baidu.com"><img src="' + arrurl[j] + '" alt=""></a></li>';
		}
		str += '</ul>' +
			'</div>' +
			'<div class="smallcontainer hide">' +
			'<div class="turnleft opa"><img src="img/321.png" alt=""></div>' +
			'<div class="imgsmallbox" id="imgsmallbox_ul' + n + '">' +
			'<ul>' +
			'<li data-num="1"><a href="www.baidu.com"><img src="' + data[i].pic_url + '" alt=""></a></li>';
		for(var s = 0; s < arrurl.length; s++) {

			str += '<li data-num="' + (s + 2) + '" ><a href="www.baidu.com"><img src="' + arrurl[s] + '" alt=""></a></li>';
		}
		str += '</ul>' +
			'</div>' +
			'		<div class="turnright"><img src="img/54.png" alt=""></div>' +
			'		</div>' +
			'						<div class="grid-item-info" style="clear:both">' +
			'					           <div id="iad_table" class="iad_table" name="iad_table">' +
			'									<div id="itb_size" class="itb_size">' + data[i].p_code + '</div>' +
			'									<div id="itb_price" class="itb_price">' + data[i].p_price + '</div>' +
			'									<div id="itb_size" class="itb_size">' + data[i].p_intro + '</div>' +
			'								</div>' +
			'						</div>' +
			'		 </div>' +
			'</div>' +
			'</div>';
		$('#imgbox_ul' + n).children('ul').width(arrurl.length * 210);
		$('#imgsmallbox_ul' + n).children('ul').width(arrurl.length * 210);
		$('#itemlist').append(str);
		n++;
	}
	yunxin();
}
//右侧推荐
function listhot(data) {
	console.log(data);
	for(var i = 0; i < data.length; i++) {
		var str = "";
		str = '<div style="width:100%;height:220px;margin:10px auto;border: 1px solid #E8E8E8;">' +
			'<div id="iad_img" class="iad_img">' +
			'<img src="' + data[i].p_url + '" alt="">' +
			'</div>' +
			'<div style="text-align:left;font-size:20px;padding:5px">' + data[i].p_code + '</div>' +
			'<div style="text-align:right;font-size:15px;">￥<span style="color:red">' + data[i].p_price + '</span>起</div>' +
			'</div>';
		$("#ej_right_itemlist").append(str);
	}
}

function listmenu(data) {
	console.log(data);
}
//标签组
function listgroup(data){
	console.log(data);		
	var str='<div class="ej_fl_sycj"><div id="ej_fl_pp" class="ej_fl_pp">'
		+'<div class="pp_top"><span>'+data[0].taggroupname+'</span></div>'
		+'<div class="pp_body">';
	for(var i=0;i<data.length;i++){				
		str+='<a id="'+data[i].tag_id+'" name="'+data[i].content+'" href=javascript:;>'+data[i].content+'</a>';
	}
		str+='</div></div></div>';
	$("#ej_fl_content").html(str);
	
}


$(function() {
	
	$('#top').load("all_top.html #top", function() {
		all_show();
		sousuo();
	
	
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
	var astr=localStorage.getItem('value');
	var strs= new Array(); 
	var pp_body=document.getElementById('pp_body');
	var anum=null;
	console.log(astr);
	strs=astr.split(',');
	pp_body.innerHTML='';
	for(var i=0;i<strs.length;i++){
		anum="<a href='#' style='height:33px !important'>"+strs[i]+"</a>";
		pp_body.innerHTML+=anum;
	}
	});
	$('#footer').load("all_footer.html #footer", function() {
		
	});
	
	//筛选收起或者显示
	
	var ej_fl_content = document.getElementById('ej_fl_content');
	var ej_select_sq = document.getElementById('ej_select_sq');
	var ej_select_xs = document.getElementById('ej_select_xs');
	for(var i = 0; i < 2; i++) {
		ej_select_xs.style.display = 'none';
		ej_select_sq.onclick = function() {
			ej_fl_content.style.display = 'none';
			this.style.display = 'none';
			ej_select_xs.style.display = 'block';
		}
		ej_select_xs.onclick = function() {
			ej_fl_content.style.display = 'block';
			this.style.display = 'none';
			ej_select_sq.style.display = 'block';
		}
	}
	//选择
	function select(){
		
		$('#ej_fl_content a').each(function(){
			$(this).click(function(){
				$('#ej_fl_content a').each(function(){
					$(this).siblings().removeClass('XzeA');
				});
				var CopyThisA = $(this).clone();
				$(this).addClass('XzeA');
				if($("#XzeA").length > 0) {
					$("#XzeA").html($(this).text());
				} else {
					$("#pp_body").append(CopyThisA.attr("id", "XzeA"));
					Remove();
				}
			});
		});
//		点击取消
		
	}
	function Remove(){
		$('#pp_body a').each(function(){
			
			$(this).click(function(){
				$(this).remove();
				$('#ej_fl_content a').each(function(){
					$(this).siblings().removeClass('XzeA');
					$(this).siblings().removeClass('selected');
				});
				$('#ej_search_sorts li').each(function(){
					$(this).siblings().removeClass('selected');
				});
			});
		});
	}
	//排序
	function paixu(){
		var ppg='';
		$('#ej_search_sorts li').each(function(){
			
			$(this).click(function(){
				
				if($(this).data('power')=='1'){
					$(this).data('power','2');
					$(this).children('img').attr("src","../img/peoDown.png");
					var CopyThisB=$(this).children('a').clone();
					if($(this).hasClass("selected")) {
						$("#XzeB").html($(this).text());
						$(this).removeClass("selected");
					} else {
						$("#pp_body").append(CopyThisB);
						Remove();
					}
					$(this).addClass("selected");
					ppg=1;
				}else{
					$(this).data('power','1');
					$(this).children('img').attr("src","../img/peoUp.png");
					ppg=2;
				}
				
			});
			
		});
	
	}
	var key = "sssa";
//	_ProductBO_js.doSearchXieDi(key, list);
//	_ProductBO_js.listHot(listhot);
//	_ProductBO_js.listProductChracter(listgroup);
//	_ProductBO_js.listProductSex(listgroup);
//	_ProductBO_js.listProductStyle(listgroup);
//	_ProductBO_js.listProductHeadForms(listgroup);
//	_ProductBO_js.listProductHellForms(listgroup);
	select();
	paixu();
});


