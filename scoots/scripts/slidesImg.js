const container = document.querySelector(".container");
const dotContainer = document.querySelector(".dot-container");
const url = "https://brunocelada.github.io/wdd230/scoots/data/slidesImg.json";

async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      displaySlidesImg(data);
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch(url);

let slides = [];
let slideIndex = 1;

function displaySlidesImg(data) {
  let index = 1;
  let totalImg = Object.keys(data.images).length;

  data.images.forEach((image) => {
    let div = document.createElement("div");
    div.classList.add("slides");

    let number = document.createElement("div");
    number.classList.add("numbertext");
    number.innerHTML = `${index} / ${totalImg}`;

    let text = document.createElement("div");
    text.classList.add("text");
    text.innerHTML = image.alt;

    let img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.style.loading = "lazy";

    div.appendChild(number);
    div.appendChild(img);
    div.appendChild(text);
    container.appendChild(div);

    slides.push(div);

    // Dots circles
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("onclick", `currentSlide(${index})`);

    dotContainer.appendChild(dot);

    index++;

    showSlides(slideIndex);
  });
}

// Next/Prev controls
function plusSlides(i) {
  showSlides((slideIndex += i));
}

// Dots controls
function currentSlide(i) {
  showSlides((slideIndex = i));
}

function showSlides(n) {
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
