$(document).ready(function() {
	
	
	//Json Script Code starts here - Fetch Json data to render html page.
	$.getJSON('static/json/guide.json', function(data) {
		result = data.steps;
		$.each(result,function(id,item){
			var getData = "id : "+result[id].id+",																			content:"+result[id].content+",																				selector:"+result[id].selector+" ,																				Next: "+result[id].next+"";
			
			$(result[id].selector).attr( 'tooltip',getData);	
	  });
	  
	}); // End Json Script 
	
	//Event to trigger next div to show 
	$('div').on('click',function(){
		
		$(this).next().show(); //Current div action
	});
	
	//Reset or Close child div
	$('#reset').on('click',function(e){
		e.preventDefault();
		$('div').hide(); 
		$('.myClass1').show();
	});
	
	//Tooltip Display Info Function - Code starts here
	var a = $('div'),
    tip, text,
    base = document.createElement('tooltip'); //Defining all objects

	for (var x=0;x < a.length;x++) { //using "for" loop to get all "div" elements with attribute "tooltip".
	
		a[x].onmouseover = function () { // Mouse hover code to display tooltip
        
			text = this.getAttribute('tooltip');
			tip = document.createTextNode(text);
        
			if (text != null) {// Checking if tooltip is empty or not.
		 
				base.innerHTML = '';
				base.appendChild(tip);
				if (document.getElementsByTagName('tooltip')[0]){// Checking for any "tooltip" element
                   document.getElementsByTagName('tooltip')[0].remove();// Removing old tooltip
				}
				base.style.top = (event.pageY + 20) + 'px';
				base.style.left = (event.pageX + 20) + 'px';
				base.style.backgroundColor = '#DC143C';
				base.style.color = 'white';
				base.style.height = '20%';
				base.style.width = '20%';
				document.body.appendChild(base);
			}

		};
		//Tooltip Remove on Mouseout Function
		a[x].onmouseout = function () {
         document.getElementsByTagName('tooltip')[0].remove();// Remove last tooltip
		};
	}  // End For Loop function

}); // End Script