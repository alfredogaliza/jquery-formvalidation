(function($){
	
	$.validationSettings =  {
		css: {color: "red",	fontSize: "x-small"	},
		selector: ".validator",
		onblur: true
	};
	
	$.fn.validators = function(options){
		var settings = $.extend($.validationSettings, options);
		var id = $(this).attr("id");
		$(settings.selector+"[data-element="+id+"]");
		return $(settings.selector+"[data-element="+id+"]");
	};
	
	$.fn.formValidation = function(options){		
		
		var settings = $.extend($.validationSettings, options);
		var validators = $(settings.selector, this);
		
		validators.css(settings.css).hide();
		
		if (settings.onblur){
			$("input,textarea,select", this).blur(function(){
				$(this).validators().each(function(){
					$(this).verify();
				});
			});
		}
		
		$(this).submit(function(){
			var success = true;
			validators.each(function(){
				success = $(this).verify() && success;
			});
			return success;
		});
		
		return this;
	};
	
	$.fn.verify = function(){
		
		var type = $(this).attr("data-type");
		var element = $(this).attr("data-element");		
		var max = parseFloat($(this).attr("data-max"));
		var min = parseFloat($(this).attr("data-min"));
		var ref = $(this).attr("data-ref");
		
		var sValue = $("#"+element).val();
		var iValue = parseInt(sValue);			
		
		var validated = false;
		 
		switch(type){
			case "required":
				validated = (sValue != "" && sValue != null && sValue != undefined)? true : false;
				break;
			case "checked":
				value = $("#"+element+":checked").val();
				validated = (value != "" && value != null && value != undefined)? true : false;
				break;
			case "equals":
				validated = (sValue == ref);
				break;
			case "different":
				validated = (sValue != ref);
				break;
			case "range-value":
				validated = (iValue >= min && iValue <= max)? true: false;
				break;
			case "max-value":
				validated = (iValue <= max)? true: false;
				break;
			case "min-value":
				validated = (iValue >= min)? true: false;
				break;
			case "range-length":
				validated = (sValue.length >= min && sValue.length <= max)? true: false;
				break;
			case "max-length":
				validated = (sValue.length <= max)? true: false;
				break;
			case "min-length":
				validated = (sValue.length >= min)? true: false;
				break;
		}
				
		if (validated) {
			$(this).hide();			
		} else {
			$(this).show();
		}
		
		return validated;
		
	};		
	
})(jQuery);