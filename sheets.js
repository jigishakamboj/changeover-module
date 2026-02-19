function uploadToSheets(data)
{

fetch(CONFIG.SCRIPT_URL, {

method: "POST",

body: JSON.stringify(data),

headers: {

"Content-Type": "application/json"

}

})
.then(res => console.log("Uploaded"))
.catch(err => console.error(err));

}
