// Dates
document.querySelector("#current-year").innerHTML = new Date().getFullYear();

document.querySelector("#lastModified").innerHTML = new Date(
  document.lastModified
);

// Click Menu event listender (hamburger button)
document.querySelector("#menu").addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("show");
  document.querySelector("#menu").classList.toggle("show");
});
