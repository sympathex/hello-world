function register() {
	var username = getElementById("usernameInput").value;
	var email = getElementById("emailInput").value;
	
	document.getElementById("message").innerHTML = username + " ,we sent a confirmation to " + email;
}

function addReview() {
	var name = document.getElementById("nameInput").value;
	var review = document.getElementById("reviewText").value;
	
	document.getElementById("showReview").innerHTML = name + " : " + review;
}

