const url = "https://brunocelada.github.io/wdd230/chamber/data/members.json";

const spotlights = document.querySelector(".spotlights");

async function getMembersData(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    // console.table(data.members); // check point
    displaySpotlight(data.members);
  }
}

getMembersData(url);

const displaySpotlight = (members) => {
    const randomListItems = [];
    for (let i = 0; i < 3; i++) {
        let randonNumber = Math.floor(Math.random() * members.length);
        let randomMember = members[randonNumber];
        randomListItems.push(randomMember);
        members.splice(randonNumber, 1)
    }

    
    randomListItems.forEach((member) => {
    let div = document.createElement("div");
    div.classList.add("review");

    let img = document.createElement("img");
    img.setAttribute("src", member.imageFilename);
    img.setAttribute("alt", member.companyName);
    img.classList.add("review-img");
    img.setAttribute("loading", "lazy");

    let companyName = document.createElement("p");
    companyName.innerText = member.companyName;
    companyName.classList.add("company-name");

    let comment = document.createElement("p");
    comment.classList.add("comment");
    comment.innerText = member.comment;


    div.appendChild(img);
    div.appendChild(companyName);
    div.appendChild(comment);
    spotlights.appendChild(div);
  });
};

// BUTTONS
const joinBtn = document.querySelector("#join-button");
const infoEvent = document.querySelector(".info-button");

joinBtn.addEventListener("click", () => {
  open("join.html");
});

infoEvent.addEventListener("click", () => {
  open("event.html");
});

