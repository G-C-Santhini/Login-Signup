

const loginForm = document.getElementById("loginForm"); 
if(loginForm){
loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); 
       const email = document.getElementById("email").value.trim();
       if(email!=="sentinix@gmail.com"){
        alert("email couldn't match");
        return;
       }
    const password = document.getElementById("password").value.trim();

  
    if (password.length > 6) {
      alert("Login successful! Redirecting to the welcome page...")
      window.location.href = "forget.html"
      return;
    }
  else{
    alert("passward length must be more than 6");
  }

  });
}
const signupForm =document.getElementById("signupForm");
if(signupForm){
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
   
  if(password.length > 6){
     
     if(password===confirmPassword){
        alert("Signup successful! Redirecting to the Login page...");
         window.location.href = "index.html";
         return;
        }
  else{
    alert("passward couldn't match");
  }
  return;
  }
  else{
     alert(" Passward must be more than 6 digit ");
  }


});
}

const resetpass = document.getElementById("resetpass");
if(resetpass){
  resetpass.addEventListener("submit", function (e) {
    e.preventDefault();
  const pass = document.getElementById("pass").value.trim();

  const confirmpass = document.getElementById("confirmpass").value.trim();
 
  if( pass.length > 6){
    window.location.href = "index.html"
    
 if( pass===confirmpass){
    window.location.href = "index.html"
    return;
  }
  else{
    alert("passward couldn't match");
  }
  return;
}
else{
  alert("password must be more than 6 digit");
}
  });
  
} 

