function hot() {
	var url = "";
	var data;
	var str = '';
	for(var i = 0; i < data.length; i++) {
		str += '<a href="#">'
		+ '<p class="chxr-img">' 
		+ '<img src="' + data.url + '" />' 
		+ '</p>' 
		+ '<p class="chxr-title">' + data.title + '</p>' 
		+ '<span>' 
		+ '<dfn>'+data.price+' </dfn>' 
		+ data.name 
		+ '<i>起</i>' 
		+ '</span>'
		+ '</a>';
		$('#chxr-xia').apend(str);
	}
}