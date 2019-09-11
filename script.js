function register() {
	var username = document.getElementById("usernameInput").value;
	var email = document.getElementById("emailInput").value;
	
	document.getElementById("message").innerHTML = username + " ,we sent a confirmation to " + email + ".";
}

function addReview() {
	var name = document.getElementById("nameInput").value;
	var review = document.getElementById("reviewText").value;
	
	document.getElementById("showReview").innerHTML = name + " : " + review;
}

