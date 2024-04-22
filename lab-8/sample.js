//Function To Validate Form.
function validateForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var errorMessage = "";
  // var submitBtn = document.getElementById("submitBtn").value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    firstName == "" ||
    lastName == "" ||
    email == "" ||
    password == "" ||
    confirmPassword == ""
  ) {
    errorMessage += "All fields are required.";
  } else if (!email.match(emailPattern)) {
    errorMessage += "Invalid email format.<br>";
  } else if (password != confirmPassword) {
    errorMessage += "Passwords do not match.<br>";
  }

  if (errorMessage != "") {
    document.getElementById("errorText").innerHTML = errorMessage;
    document.getElementById("errorMessage").style.display = "block";
    return false;
  } else {
    alert("You Have Registered Successfully!");
    return false;
  }

  return true;
}

function closeErrorMessage() {
  document.getElementById("errorMessage").style.display = "none";
}

// These are Function which prevent from XSS/SQLi attacks.
function avoidFromHtmlInputs(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function resultQuery(username) {
  const safeUsername = escapeSQL(username);
}

function preventSqlInput(input) {
  return input.replace(/'/g, "''").replace(/\\/g, "\\\\");
}
