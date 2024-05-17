
function validate() {
  var email = document.getElementById("floatingInput").value;
  var password = document.getElementById("floatingPassword").value;
  if (password == "123" && email == "admin@admin.com") {
    alert("Login successful");
  } else {
    alert("Wrong password");
  }
}