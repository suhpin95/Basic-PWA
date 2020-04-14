const container = document.querySelector(".container")
const musicalInstruments = [
  { name: "Rudra Venna", image: "images/venna.jpeg"},
  { name: "Violin", image: "images/violin.jpg"},
  { name: "Tabla", image: "images/tabla.jpg"},
  { name: "Mandolin", image: "images/mandolin.jpg"},
  { name: "Piano", image: "images/piano.jpg"},
  { name: "Guitar", image: "images/Electric-Guitar.png"},
]

const showInstruments = () => {
  let output = "" ;
  musicalInstruments.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card-avatar" src=${image} />
                <h2 class="card-title">${name}</h2>
                <a class="card-link" href="#">Listen</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showInstruments);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}