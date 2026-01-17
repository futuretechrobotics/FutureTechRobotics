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
function submitCourse(e){
  e.preventDefault();

  alert(
    "Enrollment submitted successfully!\n\n" +
    "Your payment receipt will be verified by admin.\n" +
    "Certificate will be enabled after course completion."
  );

  document.getElementById("courseForm").reset();
}
function approveStudent(){
  alert("Student approved! Certificate access enabled.");
}


