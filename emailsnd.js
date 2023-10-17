

function emailsnd(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "joelpshaju17@gmail.com",
    Password : "35A407BBC119C32B97F13B27777C89BEEFA0",
    To : "joelpshaju@gmail.com",
    From : "joelpshaju17@gmail.com",
    Subject : "This is the subject",
    Body : messageBody})
.then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
 }
);
}

