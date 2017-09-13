function com() {
	$('#top').load("all_top.html #top", function() {
		all_show();
		sousuo();
	});
	$('#footer').load("all_footer.html #footer", function() {

	});
	$('#header').load("all_header.html", function() {
	
	});
	$('#cont1').load('all_conside.html #cont1',function(){
		current();
	});
	$('#cont2').load('all_conside.html #cont2',function(){
		current2();
	});
	
}

//当前页的
function current(){
	//获取浏览器的url
	var urlstr = location.href;
	var urlstatus=false;
	
	
	 $("#cont").children('a').each(function () {		
	//判断导航里面的rel和url地址是否相等
	  if ((urlstr + '/').indexOf($(this).attr('href')) >-1 && $(this).attr('href')!='') {
	  		
		   $(this).addClass('conActive'); 
		   urlstatus = true;
		   
	  } else {
	    $(this).removeClass('contActive');
	  }
	 });
 }
function current2(){
	//获取浏览器的url
	var urlstr = location.href;
	var urlstatus=false;
	
	
	 $("#cont_re").children('a').each(function () {		
	//判断导航里面的rel和url地址是否相等
	  if ((urlstr + '/').indexOf($(this).attr('href')) >-1 && $(this).attr('href')!='') {
	  		
		   $(this).addClass('conActive'); 
		   urlstatus = true;
		   
	  } else {
	    $(this).removeClass('contActive');
	  }
	 });
 }

//管理端------------------------------------------
function gl() {
	$('#gl_all_header').load("gl_all.html #gl_header", function() {

	});
	$('#glc_all_left').load("gl_all.html #glc_left", function() {
		gl_cur();
	});
	
	
}
function gl_cur(){
	//获取浏览器的url
	var urlstr = location.href;
	var urlstatus=false;
	$("#gl_icons").children('ul').children('li').children('a').each(function () {	
	//判断导航里面的rel和url地址是否相等
	if ((urlstr + '/').indexOf($(this).attr('href')) >-1 && $(this).attr('href')!='') {
		   $(this).addClass('gl_active'); 
		   urlstatus = true;
	} else {
	    $(this).removeClass('gl_active');
	}
	});
}