let changeover =
JSON.parse(localStorage.getItem("currentChangeover"));

function calculateLoss()
{

let target =
parseFloat(changeover.target);

let h1 =
parseFloat(document.getElementById("hour1").value) || 0;

let h2 =
parseFloat(document.getElementById("hour2").value) || 0;

let h3 =
parseFloat(document.getElementById("hour3").value) || 0;

let planned =
target * 3;

let actual =
h1 + h2 + h3;

let loss =
planned - actual;

changeover.plannedProduction = planned;

changeover.actualProduction = actual;

changeover.bucketLoss = loss;

document.getElementById("planned").innerText =
"Planned: " + planned;

document.getElementById("actual").innerText =
"Actual: " + actual;

document.getElementById("loss").innerText =
"Bucket Loss: " + loss;

}


function closeChangeover()
{

changeover.closedTime =
new Date().toISOString();

localStorage.setItem("currentChangeover",
JSON.stringify(changeover));

uploadToSheets(changeover);

alert("Changeover saved to Google Sheets");

window.location.href = "summary.html";

}
