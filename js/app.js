const treasure = {
  city: "Poitiers",
  place: "Parc de Blossac",
  lat: 46.5791,
  lng: 0.3376,
  clues: [
    "Cette ville est l'ancienne capitale du Poitou.",
    "Le trésor se trouve dans un grand espace vert au sud du centre historique.",
    "Le trésor est l'un des parcs les plus connus de la ville."
  ]
};

let map;
let playerMarker = null;
let targetMarker = null;
let playerPosition = null;
let seconds = 0;
let finished = false;

function start() {
  map = L.map("map", {
    zoomControl: true
  }).setView([46.58, 0.34], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  map.on("click", function(e) {
    playerPosition = e.latlng;

    if (playerMarker) {
      playerMarker.setLatLng(e.latlng);
    } else {
      playerMarker = L.marker(e.latlng).addTo(map);
    }

    document.getElementById("try").disabled = false;
  });

  // Important : force Leaflet à recalculer la taille de la carte.
  setTimeout(() => map.invalidateSize(), 100);

  document.getElementById("try").addEventListener("click", tryAnswer);

  updateClue();
  updateTimer();

  setInterval(() => {
    if (finished) return;

    seconds++;
    updateTimer();

    if (seconds === 60) {
      document.getElementById("clue-number").textContent = "2";
      document.getElementById("clue").textContent = treasure.clues[1];
    }

    if (seconds === 120) {
      document.getElementById("clue-number").textContent = "3";
      document.getElementById("clue").textContent = treasure.clues[2];
    }

    if (seconds >= 180) {
      finish(0, null);
    }
  }, 1000);
}

function updateClue() {
  document.getElementById("clue").textContent = treasure.clues[0];
}

function updateTimer() {
  const remaining = Math.max(0, 180 - seconds);
  const min = Math.floor(remaining / 60);
  const sec = remaining % 60;
  document.getElementById("timer").textContent =
    String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
}

function tryAnswer() {
  if (!playerPosition || finished) return;

  const distance = map.distance(
    playerPosition,
    L.latLng(treasure.lat, treasure.lng)
  );

  const km = distance / 1000;
  const remaining = Math.max(0, 180 - seconds);

  // V0 : score simple, volontairement facile à comprendre.
  const score = Math.max(
    0,
    Math.round(10000 * Math.exp(-km / 2.2) + remaining * 5)
  );

  finish(score, km);
}

function finish(score, km) {
  finished = true;

  if (targetMarker) targetMarker.remove();

  targetMarker = L.circleMarker([treasure.lat, treasure.lng], {
    radius: 10,
    weight: 4
  }).addTo(map);

  targetMarker.bindPopup("🎯 " + treasure.place).openPopup();

  document.getElementById("try").disabled = true;

  const result = document.getElementById("result");
  result.classList.remove("hidden");

  if (km === null) {
    result.innerHTML = "<h2>⏱️ Temps écoulé</h2><p>Le trésor était à <strong>" +
      treasure.place + "</strong>, à " + treasure.city + ".</p>";
  } else {
    result.innerHTML = "<h2>🏆 Résultat</h2>" +
      "<div class='score'>" + score.toLocaleString("fr-FR") + " pts</div>" +
      "<p>Distance : <strong>" + formatDistance(km) + "</strong></p>" +
      "<p>📍 " + treasure.place + " — " + treasure.city + "</p>";
  }
}

function formatDistance(km) {
  return km < 1
    ? Math.round(km * 1000) + " m"
    : km.toFixed(2) + " km";
}

window.addEventListener("load", start);
