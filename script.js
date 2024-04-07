//your JS code here. If required.
var btn = document.getElementById('btn');

btn.addEventListener("click",function(event) {
	event.preventDefault();

	var a = document.getElementById('First_name').value;
	var b = document.getElementById('Last_name').value;
	var c = document.getElementById('Phone_number').value;
	var d = document.getElementById('Email_ID').value;
	
	alert("First Name: " + a +' '+ "Last Name: " + b +' ' + "Phone Number: " + c +' ' + "Email ID: " + d);
})

