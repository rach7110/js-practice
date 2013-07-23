exercise 41
  $(':submit').click(function() {
  	$('div#error_message').empty();
  	$('div#success_message').empty();
  	var charFind = document.getElementById("email").value
  	event.preventDefault();
  	if (document.getElementById("email").value == "") {
    	$('div#error_message').append("- Enter your email address.<br>");
	   } 
	  if (document.getElementById("password").value == "") {
    	$('div#error_message').append("- Enter your password.<br>");
	   } 
	  if (document.getElementById("email").value.length < 8) {
    	$('div#error_message').append("- Your email should be at least 8 characters.<br>");
	   } 
	  if (document.getElementById("password").value.length < 8) {
    	$('div#error_message').append("- Your password should be at least 8 characters.<br>");
	   } 
	  if (charFind.indexOf("@") == -1) {
    	$('div#error_message').append("- Your email should contain an '@' symbol.<br>");
	   }  
	  if (charFind.indexOf(".") == -1) {
    	$('div#error_message').append("- Your email should contain an '.' symbol.<br>");
	   }
     if ($('div#error_message').html() == "") {
        $('#success_message').append("- Your login is complete.")
     }
  }); 