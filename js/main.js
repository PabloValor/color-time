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

		    		_h = (_h < 10 ? "0" + _h : _h);
		    		_m = (_m < 10 ? "0" + _m : _m);
		    		_s = (_s < 10 ? "0" + _s : _s);

		    		hours.innerHTML 	= _h
		    		minutes.innerHTML 	= _m
		    		seconds.innerHTML 	= _s

		    		document.body.style.backgroundColor = "#" + _h + _m + _s;
		    	},1000);

		    }
		}			
	})();

	var watch = new ColorTime();
	watch.init();

	modals.init();

	console.log("ready!");
});

