//Enter password & username function

function enter_credentials() {

username = document.getElementById('input1').value;
password = document.getElementById('input2').value;

if (username === "" || password === "") {
    document.getElementById('output').innerHTML = ("Please fill in the blanks.");
}
else if (username === "Aiva Suson" || password === "12345") {
    document.getElementById('output').innerHTML = ("You are now logged in");
 }
else {
    document.getElementById('output').innerHTML = ("Incorrect credentials.");
}


}