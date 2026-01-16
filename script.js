function registerUser(e){
e.preventDefault();
alert("Registration Successful! Data saved.");
}

function openAdmin(){
document.getElementById("admin").style.display="block";
document.getElementById("admin").scrollIntoView();
}

function checkCertificate(e){
e.preventDefault();
document.getElementById("certMsg").innerText =
"Certificate not found or course not completed yet.";
}
