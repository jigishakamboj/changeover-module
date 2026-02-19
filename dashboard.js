function startChangeover()
{
window.location.href = "new-changeover.html";
}

function viewChangeovers()
{
window.location.href = "past-changeovers.html";
}

function viewAnalytics()
{
window.location.href = "analytics.html";
}

function logout()
{
localStorage.clear();
window.location.href = "login.html";
}

// Check login
window.onload = function()
{
let user = localStorage.getItem("user");

if(!user)
{
window.location.href = "login.html";
}
};
