const USERS = [

{ id: "IE001", password: "123", role: "IE" },

{ id: "SUP001", password: "123", role: "Supervisor" },

{ id: "ADMIN001", password: "admin", role: "Admin" }

];

function login()
{

let enteredId = document.getElementById("employeeId").value;

let enteredPassword = document.getElementById("password").value;

let found = USERS.find(user =>
user.id === enteredId &&
user.password === enteredPassword
);

if(found)
{

localStorage.setItem("user", JSON.stringify(found));

window.location.href = "dashboard.html";

}
else
{

alert("Invalid ID or Password");

}

}


