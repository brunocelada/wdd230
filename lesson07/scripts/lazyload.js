// Dates
document.querySelector("#current-year").innerHTML = new Date().getFullYear();

document.querySelector("#lastModified").innerHTML = "Last modified: " + new Date(
    document.lastModified
);