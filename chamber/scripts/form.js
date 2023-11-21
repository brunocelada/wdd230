const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const position = document.getElementById("position");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const bname = document.getElementById("bname");
const description = document.getElementById("description");
const mslevel = document.querySelector("input[name='mslevel']:checked");


// Get the current date and time
window.addEventListener("load", setTimestamp);
function getCurrentDateTime() {
    const now = new Date();
    return now.toString();
}
function setTimestamp() {
    const timestampField = document.querySelector("#timestamp");
    if (timestampField) {
        timestampField.value = getCurrentDateTime();
    }
}
