// Dates
document.querySelector("#current-year").innerHTML = new Date().getFullYear();

document.querySelector("#lastModified").innerHTML = "Last modified: " + new Date(
  document.lastModified
);

// Click Menu event listender (hamburger button)
document.querySelector("#menu").addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("show");
  document.querySelector("#menu").classList.toggle("show");
});

// Slider (dark mode)
const modeButton = document.querySelector(".switch");

modeButton.addEventListener("change", () => {
  document.body.classList.toggle("darkmode");

  const companies = document.querySelectorAll(".company");
  companies.forEach(company => {
    company.classList.toggle("darkmode");
  });

  const demographics = document.querySelectorAll(".demographic");
  demographics.forEach(data => {
    data.classList.toggle("darkmode");
  });

  const prices = document.querySelectorAll(".price");
  prices.forEach(price => {
    price.classList.toggle("darkmode");
  });

  const mslevels = document.querySelectorAll(".mslevel");
  mslevels.forEach(mslevel => {
    mslevel.classList.toggle("darkmode");
  });

  const fieldsets = document.querySelectorAll("fieldset");
  fieldsets.forEach(fieldset => {
    fieldset.classList.toggle("darkmode");
  });

  const labels = document.querySelectorAll(".top input");
  labels.forEach(label => {
    label.classList.toggle("darkmode");
  });

  const textareas = document.querySelectorAll(".description");
  textareas.forEach(textarea => {
    textarea.classList.toggle("darkmode");
  });

  const simpleLinks = document.querySelectorAll(".simple-link");
  simpleLinks.forEach(link => {
    link.classList.toggle("darkmode");
  });

  const weatherFigures = document.querySelectorAll("figure");
  weatherFigures.forEach(figure => {
    figure.classList.toggle("darkmode");
  });

  document.querySelector("#banner").classList.toggle("darkmode");
});