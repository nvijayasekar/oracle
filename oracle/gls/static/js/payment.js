$(document).ready(function() {
	
	$.getJSON('static/json/guide.json', function(jd) {
		result = jd.steps;
		$.each(result,function(id,item){
			var getData = "id : "+result[id].id+",content:"+result[id].content+"\n ,selector:"+result[id].selector+" ,Next: "+result[id].next+""
			$(result[id].selector).attr( 'tooltip',getData);	
	  });
	  
	});

	




	
	
	
 });