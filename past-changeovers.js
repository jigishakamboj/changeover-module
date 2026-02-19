function loadChangeovers()
{

let table =
document.getElementById("changeoverTable");

let data =
JSON.parse(localStorage.getItem("currentChangeover"));

if(!data) return;

let row = `
<tr>
<td>${data.employeeId || ""}</td>
<td>${data.line || ""}</td>
<td>${data.fromStyle || ""}</td>
<td>${data.toStyle || ""}</td>
<td>${data.target || ""}</td>
<td>${data.sam || ""}</td>
<td>${data.bucketLoss || ""}</td>
<td>${data.closedTime || ""}</td>
</tr>
`;

table.innerHTML = row;

}

function goBack()
{
window.location.href = "dashboard.html";
}

window.onload = loadChangeovers;
