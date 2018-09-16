// the function which handles the input field logic
function getTone() {
    var nameField = document.getElementById('nameField').value;
    var result = document.getElementById('result');
    
 	$("button:#subButton").click(function()){

 		$('#msg').html($('input:textbox').val());
 	}
 	

   
}
// use an eventlistener for the event
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getTone, false);

