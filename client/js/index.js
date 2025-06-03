var loginForm = document.getElementById('loginForm');
var email = document.getElementById('email');
var password = document.getElementById('password');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var loginData = {
        email: email.value,
        password: password.value
    };
    console.log('Login data:', loginData);
    //  fetch : used to contact with api ewe tell it the url and the method and header if needed 
    fetch("http://127.0.0.1:5002/api/users/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
       
    }).then(res=>res.json()).then(data=>{
        console.log(data)
        try {
            if(data.user.role === "admin"){
                alert("Welcome Admin");
                window.location.href = "admin.html";
            }
            else if (data.user.role === "user"){
                alert("Welcome User");
                window.location.href = "user.html";
            }
        } catch (error) {
            console.log("invalid email or password")
            var errorMessage = document.getElementsByClassName('error-message')[0];
            errorMessage.style.display = 'block';
            
        }
       
        
    })
})