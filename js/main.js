document.addEventListener("DOMContentLoaded", function(){
	(function(){
		this.ColorTime = function(){
	    
		    this.init = function() {
		    	var hours 		= document.getElementById('hours');
		    	var minutes 	= document.getElementById('minutes');
		    	var seconds 	= document.getElementById('seconds');

		    	setInterval(function(){
			    	var _date 		= new Date();
			    	var _h 			= _date.getHours();
			    	var _m 			= _date.getMinutes();
			    	var _s 			= _date.getSeconds();			 
		    		var total		= "";

		    		hours.innerHTML 	= "# " + (_h < 10 ? "0" + _h : _h);
		    		minutes.innerHTML 	= (_m < 10 ? "0" + _m : _m);
		    		seconds.innerHTML 	= (_s < 10 ? "0" + _s : _s);

		    		total = (_h < 10 ? "0" + _h : _h) + (_m < 10 ? "0" + _m : _m) + (_s < 10 ? "0" + _s : _s);
		    		document.body.style.backgroundColor = "#" + total;
		    		console.log(document.body.style.backgroundColor);
		    	},1000);

		    }
		}			
	})();

	var watch = new ColorTime();
	watch.init();

	modals.init();
});

