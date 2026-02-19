// START CHANGEOVER FUNCTION
function startChangeover()
{

console.log("Start Changeover clicked");

let user = JSON.parse(localStorage.getItem("user"));

if(!user)
{
alert("Please login first");
window.location.href = "login.html";
return;
}

let changeover = {

employeeId: user.id,

role: user.role,

line: document.getElementById("line").value,

fromStyle: document.getElementById("fromStyle").value,

toStyle: document.getElementById("toStyle").value,

target: document.getElementById("target").value,

sam: document.getElementById("sam").value,

T1: new Date().toISOString()

};

localStorage.setItem("currentChangeover", JSON.stringify(changeover));

alert("Changeover started successfully");

window.location.href = "live-changeover.html";

}


// LOAD CHANGEOVER DATA
let changeover = JSON.parse(localStorage.getItem("currentChangeover")) || {};

let activities = [];


// MARK T2
function markT2()
{

changeover.T2 = new Date().toISOString();

localStorage.setItem("currentChangeover", JSON.stringify(changeover));

document.getElementById("T2display").innerText =
"T2 Recorded: " + changeover.T2;

}


// MARK T3
function markT3()
{

changeover.T3 = new Date().toISOString();

localStorage.setItem("currentChangeover", JSON.stringify(changeover));

document.getElementById("T3display").innerText =
"T3 Recorded: " + changeover.T3;

}


// MARK T4
function markT4()
{

changeover.T4 = new Date().toISOString();

localStorage.setItem("currentChangeover", JSON.stringify(changeover));

document.getElementById("T4display").innerText =
"T4 Recorded: " + changeover.T4;

}


// ADD ACTIVITY
function addActivity()
{

let category =
document.getElementById("activityCategory").value;

let description =
document.getElementById("activityDescription").value;

let time =
new Date().toLocaleTimeString();

let activity = {

category: category,

description: description,

time: time

};

activities.push(activity);

localStorage.setItem("activities", JSON.stringify(activities));

displayActivities();

}


// DISPLAY ACTIVITIES
function displayActivities()
{

let table =
document.getElementById("activityTable");

if(!table) return;

table.innerHTML = "";

activities.forEach(act =>
{

let row =
"<tr>" +
"<td>" + act.category + "</td>" +
"<td>" + act.description + "</td>" +
"<td>" + act.time + "</td>" +
"</tr>";

table.innerHTML += row;

});

}


// GO TO RAMPUP
function goToRampup()
{

localStorage.setItem("currentChangeover",
JSON.stringify(changeover));

window.location.href = "rampup.html";

}

