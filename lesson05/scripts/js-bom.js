const input = document.querySelector("#favchap");
const button = document.querySelector("#submit-button");
const list = document.querySelector("#list");

button.addEventListener("click", () =>
{
    if (input.value == "")
    {
        input.setAttribute("placeholder", "Please, write a valid input");
        input.focus();
    }
    else
    {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        li.textContent = input.value;
        deleteButton.textContent = "❌";

        li.append(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener("click", () => 
        {
            list.removeChild(li);
        });
        input.focus();
        input.value = "";
        
    }
});