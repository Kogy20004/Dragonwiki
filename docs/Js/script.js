const continer = document.getElementById("continer-card");

const getpersonage = async (Initial, end) => {
  const url = `https://dragon-ball-super-api.herokuapp.com/api/characters?offset=${Initial}&limit=${end}`;
  const res = await fetch(url);
  const personage = await res.json();
  console.log(personage);
  crearpersoncard(personage[0]);
};

getpersonage(0, 1);

function crearpersoncard(personage) {
  const card = `<div class="card" id="${personage.id}">
  <div class="figura">
    <img src="${personage.imageUrl}" alt="" />
  </div>
</div>`;
const crear = continer.insertAdjacentHTML("beforeend", card);
  crear;
  
}

for (let i = 0; i <= 129; i++) {
  getpersonage(i, i+1);
  
}

addEventListener("click",)