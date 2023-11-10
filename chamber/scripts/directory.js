const url = "https://brunocelada.github.io/wdd230/chamber/data/members.json";

const list = document.querySelector("#members");

async function getMembersData(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    // console.table(data.members); // check point
    displayCompany(data.members);
  }
}

getMembersData(url);

const displayCompany = (members) => {
  members.forEach((member) => {
    let section = document.createElement("section");
    section.classList.add("mslevel");

    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phoneNumber = document.createElement("p");
    let web = document.createElement("a");
    let img = document.createElement("img");
    let msLevel = document.createElement("p");
    let dateContract = document.createElement("p");

    name.innerText = member.companyName;
    address.innerText = member.address;
    address.classList.add("price");
    phoneNumber.innerText = member.phoneNumber;

    web.href = member.websiteUrl;
    web.innerText = "Visit site";
    web.classList.add("simple-link");

    img.setAttribute("src", member.imageFilename);
    img.setAttribute("alt", member.companyName);
    img.classList.add("company-img");
    img.setAttribute("loading", "lazy");

    msLevel.innerText = member.membershipLevel;
    msLevel.classList.add("price");
    dateContract.innerText = `Contract date: ${member.dateContract}`;

    section.appendChild(name);
    section.appendChild(address);
    section.appendChild(phoneNumber);
    section.appendChild(img);
    section.appendChild(msLevel);
    section.appendChild(dateContract);
    section.appendChild(web);
    list.appendChild(section);
  });
};

// Buttons
const btnGrid = document.querySelector("#grid-btn");
const btnList = document.querySelector("#list-btn");

btnList.addEventListener("click", () => {
  btnGrid.classList.remove("btn-active");
  btnList.classList.add("btn-active");

  list.classList.add("display-list")
});

btnGrid.addEventListener("click", () => {
  btnList.classList.remove("btn-active");
  btnGrid.classList.add("btn-active");

  list.classList.remove("display-list")
});