const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
// Lesson 07: localStorage
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value == "") {
    input.setAttribute("placeholder", "Please, write a valid input");
    input.focus();
  } else {
    displayList(input.value);

    chaptersArray.push(input.value);

    setChapterList();

    input.value = "";
    input.setAttribute("placeholder", "");
    input.focus();
  }
});

// Check if exist the #remove element, and if the list is empty. If not, create a "Remove list" button.
// When the remove button is clicked, remove all the li elements in the ul list.
// Then, remove the "remove list" button.
function emptyCheck() {
  if (document.querySelector("#remove") == null && list.children.length !== 0) {
    const remove = document.createElement("button");
    remove.textContent = "Remove List";
    remove.arialLabel = "Remove the entire list";
    remove.id = "remove";

    document.querySelector("main").append(remove);

    remove.addEventListener("click", () => {
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
      remove.remove();
      chaptersArray = [];
      setChapterList();
    });
  }
}

function displayList(item) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  li.textContent = item;
  deleteButton.textContent = "X";
  deleteButton.classList.add('delete');
  deleteButton.ariaLabel = "Remove chapter"; //aria-label attribute added

  li.append(deleteButton);
  list.appendChild(li);

  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
  if (list.children.length == 0) {
    remove.remove();
  }
    deleteChapter(li.textContent);
    input.focus();
  });
  // New feature
  emptyCheck();
}

function setChapterList(){
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray))
}

function getChapterList(){
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}