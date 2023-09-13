document.querySelector("#current-year").innerHTML = new Date().getFullYear();

document.querySelector("#lastModified").innerHTML = new Date(
  document.lastModified
);
