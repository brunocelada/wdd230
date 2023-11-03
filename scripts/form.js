const userName = document.querySelector("#username");
const password = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#cpwd");
const message = document.querySelector("#form-message");
const submitBtn = document.querySelector(".submitBtn");

const wrongDataColor = "#f9e7e7";
const normalBGColor = "#fff";

function checkSame() {
    if (confirmPwd.value !== userName.value) {
        message.textContent = "⚠ The confirmation of the password must match the Username value";
        message.style.display = "initial";

        userName.style.backgroundColor = wrongDataColor;
        confirmPwd.style.backgroundColor = wrongDataColor;
        
        userName.value = "";
        confirmPwd.value ="";
        userName.focus();
    } else {
        message.style.display = "none";
        userName.style.backgroundColor = normalBGColor;
        confirmPwd.style.backgroundColor = normalBGColor;
    }
}

submitBtn.addEventListener("click", checkSame);

// Range Value
const rangevalue = document.querySelector("#rangevalue");
const range = document.querySelector("#rating");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue)

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}