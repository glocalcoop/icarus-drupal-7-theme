//JQUERY FUNCTIONS 

//responsive navigation

jQuery(document).ready(function($) {

	 $(".resButton").click(function () {

	    if($("#navigation").css('display') === "none")
	     {
	        $("#navigation").css('display','block');
	     }
	     else
	     {
	        $("#navigation").css('display','none');
	     }
    });


//  Drop down navigation:

	
	$('#navigation li').hover(function () {
			
			    $(this).children('.menu').show();//hover on
			
			}, function () {
			
			    $(this).children('.menu').hide();//hover off
			
	});

	  	
// TRIGGER 

	if ($('.JBOX').width() >= 768 ){


		$('ul.menu').show();

	}

});


