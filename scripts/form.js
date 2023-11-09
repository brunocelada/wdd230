const email = document.querySelector("#email");
const password = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#cpwd");
const message = document.querySelector("#form-message");
const submitBtn = document.querySelector(".submitBtn");

const wrongDataColor = "#f9e7e7";
const normalBGColor = "#fff";

function checkSame() {
    if (confirmPwd.value !== password.value) {
        message.textContent = "⚠ Both passwords must match";
        message.style.display = "initial";

        password.style.backgroundColor = wrongDataColor;
        confirmPwd.style.backgroundColor = wrongDataColor;
        
        password.value = "";
        confirmPwd.value ="";
        password.focus();

        // confirmMail();
    } else {
        message.style.display = "none";
        password.style.backgroundColor = normalBGColor;
        confirmPwd.style.backgroundColor = normalBGColor;
    }
}

// function confirmMail() {
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
//     if (!emailPattern.test(email.value)) {
//         message.textContent = "⚠ The email must finish with '@byui.edu'.";
//         message.style.display = "initial";

//         email.style.backgroundColor = wrongDataColor;
        
//         email.value = "";
//         email.focus();
//     } else {
//         message.style.display = "none";
//         email.style.backgroundColor = normalBGColor;
//     }
// }

submitBtn.addEventListener("click", checkSame);

// Range Value
const rangevalue = document.querySelector("#rangevalue");
const range = document.querySelector("#rating");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue)

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}