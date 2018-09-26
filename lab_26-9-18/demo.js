"use strict"

$(document).ready(function () {

    var availableTags = [
      "A+",
      "A-",
      "B+",
      "B-",
      "AB+",
      "AB-",
      "O+",
      "O-"
      
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    $( "#date" ).datepicker();

    $( "#fName" ).on('keyup',function(){
    	
    	var len = $('fName').val().length();

    	$('#fnAlert').html('len');
    })
	
})