var users = [
    {
        username: "k", 
        password: "k", 
        full_name: "k", 
        email: "k@gmail.com", 
        birthdate: "1/1/1970"
    }
];

// register user to game
function addUser()
{
    var user = document.querySelector("#reg_username").value;
    var pass = document.querySelector("#reg_password").value;
    var first_name = document.querySelector("#first_name").value;
    var last_name = document.querySelector("#last_name").value;
    var email = document.querySelector("#email").value;
    var birthdate = document.querySelector("#date").value;
    fullName = first_name.concat(" ", last_name);
    var user = {
        username: user, 
        password: pass, 
        full_name: fullName, 
        email: email, 
        birthdate: birthdate,
    };
    users.push(user);
    alert("User added to game");
}