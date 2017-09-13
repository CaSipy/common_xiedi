  window.onload = function() {
	  getRelationSaleInfoById();
	  getUserInfoById();
	  
	  function getRelationSaleInfoById(){
		  var uid="123";
		  _UserBOPC_js.getRelationSaleInfoById(uid,function(data){
			  
			  console.log(data);
		  });
	  }
	  function getUserInfoById(){
		  var uid="123";
		  _UserBOPC_js.getUserInfoById(uid,function(data){
			  console.log(data);
		  });
			  
		  
	  }
	  
  }