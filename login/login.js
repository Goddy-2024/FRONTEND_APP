function loginvalidation(){
    var Username = document.getElementById('Username').value;
    var Password = document.getElementById('password').value;
    var err = document.getElementById('error');

    if(Username === "Godswill Omondi" && Password === "AGOAGO@f4" || Username === "Goddy" && Password === "####****"){
        window.location.href = "loader.html";
    }
       
    
    else{
        err.innerText = "Invalid Username or password!";
    }
}
