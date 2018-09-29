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

    $( "#date" ).datepicker(); //for date


    $( "input:radio" ).checkboxradio(); //for radio button

    $( "input:checkbox" ).checkboxradio(); //for checkbox button


    $( "input:submit" ).on('click',function(e){
    	
      e.preventDefault(e); //prevent submit
    	
      var fullname = $("input[name='fullname']").val();
      var email = $("input[name='txtemail']").val();
      var gender = $("input[name='gender']:checked").val();
      var birth = $("input[name='birth']").val();
      var group = $("input[name='group']").val();


      //var degree = $("input[name='degree']:checked").length;

      var degree = "";
      $('input[name="degree"]:checked').each(function () {
         degree = degree + $(this).val() + " ";
        });

      if(fullname.length == 0)
      {
      	$('#fnAlert').html("<strong style='color:red;'> Please fill it </strong>");
      }
      else if(validateEmail(email))
      {
        $('#fnAlert').html("");
        $('#emAlert').html("<strong style='color:red;'> Invalid </strong>");
      }
      else if(birth.length == 0)
      {
        $('#emAlert').html("");
        $('#brAlert').html("<strong style='color:red;'> Please fill it </strong>");
      }
      else if(group.length == 0)
      {
        $('#brAlert').html("");
        $('#blAlert').html("<strong style='color:red;'> Please fill it </strong>");
      }
      else if(degree.length == 0)
      {
        $('#blAlert').html("");
        $('#dgAlert').html("<strong style='color:red;'> Please fill it </strong>");
      }
      else
      {
        $('#fnAlert').html("");
        $('#dgAlert').html("");
        $('#emAlert').html("");
        $('#brAlert').html("");
        $('#blAlert').html("");


        $('#output').html("Fullname : "+fullname+"<br>Email : "+email+"<br>Gender : "+gender+"<br>Date of Birth : "+birth+"<br>Blood Group : "+group+"<br>Degree : "+degree);
      }
      
    })

	
})

function validateEmail(sEmail) {
  var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  
  if (filter.test(sEmail)) 
  {
    return false;
  }
  else 
  {
    return true;
  }
}