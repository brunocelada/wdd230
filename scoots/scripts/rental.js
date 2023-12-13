const url = "https://brunocelada.github.io/wdd230/scoots/data/rental.json";
const pricing = document.querySelector("#pricing");

async function apiFetch(url, funcion) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      funcion(data);
    }
  } catch (error) {
    console.log(error);
  }
};

apiFetch(url, displayRental);
apiFetch(url, displayPricing);

function displayRental (data) {
  let type = "schooter";
  data.rentals.forEach(vehicle => {
      let card = document.createElement("div");
      card.classList.add("rental-card");

      let newType = vehicle.type;
      if (newType !== type) {
        type = newType;
        let br = document.createElement("br");
        rentals.appendChild(br);
      }

      let img = document.createElement("img");
      img.src = vehicle.img;
      img.alt = vehicle.name;
      img.classList.add("rental-vehicle");

      let name = document.createElement("p");
      name.innerHTML = `${vehicle.name} - ${vehicle.details}`;
  
      card.appendChild(name);
      card.appendChild(img);
    
    rentals.appendChild(card);
  });
};

// Pricing
const tableBody = document.querySelector("tbody");
function displayPricing (data) {
data.rentals.forEach(vehicle => {
  let tr = document.createElement("tr");

  let rentalType = document.createElement("td");
  rentalType.innerHTML = `${vehicle.name} (${vehicle.type})`;
  
  let maxPerson = document.createElement("td");
  maxPerson.innerHTML = vehicle.maxPersons;

  let hDayRes = document.createElement("td");
  hDayRes.innerHTML = `$${vehicle.reservation[0]}`;
    
  let fDayRes = document.createElement("td");
  fDayRes.innerHTML = `$${vehicle.reservation[1]}`;
    
  let hDayWI = document.createElement("td");
  hDayWI.innerHTML = `$${vehicle.walkIn[0]}`;
    
  let fDayWI = document.createElement("td");
  fDayWI.innerHTML = `$${vehicle.walkIn[1]}`;

  tr.appendChild(rentalType);
  tr.appendChild(maxPerson);
  tr.appendChild(hDayRes);
  tr.appendChild(fDayRes);
  tr.appendChild(hDayWI);
  tr.appendChild(fDayWI);
  tableBody.appendChild(tr);
});
};
