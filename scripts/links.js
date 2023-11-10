const baseURL = "https://brunocelada.github.io/wdd230/";
const linksURL = "https://brunocelada.github.io/wdd230/data/links.json";

const list = document.querySelector("#linklist");

async function getLessonsData(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    // console.table(data.lessons); // check point
    displayLinks(data.lessons);
  }
}

getLessonsData(linksURL);

const displayLinks = (weeks) => {
  weeks.forEach((links) => {
    let li = document.createElement("li");
    li.textContent = `Week ${links.lesson}: `;

    links.links.forEach((link, index) => {
      let a = document.createElement("a");

      a.setAttribute("href", link.url);
      a.textContent = link.title;

      li.appendChild(a);

      const separator = document.createTextNode(" | ");
      li.appendChild(separator);
    });
    li.innerHTML = li.innerHTML.slice(0, -3);
    list.appendChild(li);
  });
};
