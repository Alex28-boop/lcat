const ROUND_DURATION = 90; // secondes par manche (1min30)
const CLUE_INTERVAL = 30;  // secondes entre chaque indice
const MAX_ATTEMPTS = 2;

// treasureBank est chargé depuis js/treasure-bank-100.js (doit être inclus avant ce script)
const POOL_EASY = treasureBank.filter(t => t.category === "touristique" || t.category === "village");
const POOL_NORMAL = treasureBank.filter(t => t.category === "satellite" || t.category === "historique");
const POOL_HARD = treasureBank.filter(t => t.category === "secondaire");

let GAME_MODE = null;       // "classic" ou "daily"
let TOTAL_ROUNDS = 5;
let currentGameTreasures = [];

let map;
let mapInitialized = false;
let playerMarker = null;
let targetMarker = null;
let playerPosition = null;

let currentRound = 0;
let totalScore = 0;
let roundScores = [];
let attemptsUsed = 0;
let lastAttemptKm = null;
let seconds = 0;
let shownClueIndex = 0;
let finished = false;
let timerInterval = null;

// ===== Outils aléatoires (avec version "seedée" pour le défi du jour) =====

function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashStringToSeed(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function pickRandom(array, rng) {
  const fn = rng || Math.random;
  return array[Math.floor(fn() * array.length)];
}

function shuffle(array, rng) {
  const fn = rng || Math.random;
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(fn() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===== Construction de la partie selon le mode =====

function buildClassicGame() {
  TOTAL_ROUNDS = 5;
  currentGameTreasures = shuffle(treasureBank).slice(0, TOTAL_ROUNDS);
}

function buildDailyGame() {
  TOTAL_ROUNDS = 3;
  const rng = mulberry32(hashStringToSeed("carte-au-tresor-" + todayKey()));
  // Difficulté progressive : facile (touristique/village), normal (satellite/historique), difficile (seconde zone)
  currentGameTreasures = [
    pickRandom(POOL_EASY, rng),
    pickRandom(POOL_NORMAL, rng),
    pickRandom(POOL_HARD, rng)
  ];
}

// ===== Score =====

function scoreFromDistance(km) {
  if (km <= 1) return 10000;
  if (km <= 5) return 9000;
  if (km <= 15) return 7500;
  if (km <= 30) return 6000;
  if (km <= 50) return 4500;
  if (km <= 100) return 3000;
  if (km <= 200) return 1500;
  if (km <= 300) return 1000;
  return 0;
}

function tierEmoji(score) {
  if (score >= 9000) return "🟩";
  if (score >= 6000) return "🟨";
  if (score >= 3000) return "🟧";
  if (score > 0) return "🟥";
  return "⬛";
}

// ===== Démarrage / sélection du mode =====

function initMapOnce() {
  if (mapInitialized) return;
  mapInitialized = true;

  map = L.map("map", { zoomControl: true }).setView([46.6, 2.5], 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  map.on("click", onMapClick);

  document.getElementById("try").addEventListener("click", tryAnswer);
  document.getElementById("next-round").addEventListener("click", nextRound);

  // Important : force Leaflet à recalculer la taille de la carte.
  setTimeout(() => map.invalidateSize(), 100);
}

function startGame(mode) {
  GAME_MODE = mode;
  document.getElementById("mode-select").classList.add("hidden");

  initMapOnce();

  if (mode === "daily") {
    buildDailyGame();
  } else {
    buildClassicGame();
  }

  document.getElementById("total-rounds").textContent = TOTAL_ROUNDS;

  currentRound = 0;
  totalScore = 0;
  roundScores = [];

  startRound();
}

function startRound() {
  finished = false;
  attemptsUsed = 0;
  lastAttemptKm = null;
  seconds = 0;
  shownClueIndex = 0;
  playerPosition = null;

  if (playerMarker) { playerMarker.remove(); playerMarker = null; }
  if (targetMarker) { targetMarker.remove(); targetMarker = null; }

  document.getElementById("result").classList.add("hidden");
  document.getElementById("next-round").classList.add("hidden");
  document.getElementById("attempt-info").textContent = "";
  document.getElementById("round-number").textContent = currentRound + 1;
  document.getElementById("clue-number").textContent = "1";
  document.getElementById("clue").textContent = currentGameTreasures[currentRound].clues[0];
  document.getElementById("clue-timer-bar").classList.remove("hidden");
  document.getElementById("clue-timer-fill").style.width = "0%";

  const tryBtn = document.getElementById("try");
  tryBtn.disabled = true;
  tryBtn.textContent = `📍 JE TENTE (1/${MAX_ATTEMPTS})`;

  map.setView([46.6, 2.5], 6);

  updateTimer();
  clearInterval(timerInterval);
  timerInterval = setInterval(tick, 1000);
}

function tick() {
  if (finished) return;

  seconds++;
  updateTimer();
  updateClueByTime();
  updateClueProgressBar();

  if (seconds >= ROUND_DURATION) {
    // Le temps est écoulé : si le joueur avait déjà fait une tentative,
    // elle compte quand même (au lieu de partir sur 0 pts).
    if (lastAttemptKm !== null) {
      finishRound(scoreFromDistance(lastAttemptKm), lastAttemptKm, true);
    } else {
      finishRound(0, null, true);
    }
  }
}

function updateClueByTime() {
  const treasure = currentGameTreasures[currentRound];
  const nextIndex = Math.min(
    Math.floor(seconds / CLUE_INTERVAL),
    treasure.clues.length - 1
  );

  if (nextIndex > shownClueIndex) {
    shownClueIndex = nextIndex;
    document.getElementById("clue-number").textContent = shownClueIndex + 1;
    document.getElementById("clue").textContent = treasure.clues[shownClueIndex];

    const clueEl = document.getElementById("clue");
    clueEl.classList.remove("flash");
    void clueEl.offsetWidth; // force le redémarrage de l'animation CSS
    clueEl.classList.add("flash");

    playClueBeep();
  }
}

function playClueBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  } catch (e) {
    // Audio non disponible dans ce navigateur : on ignore silencieusement.
  }
}

function updateClueProgressBar() {
  const treasure = currentGameTreasures[currentRound];
  const bar = document.getElementById("clue-timer-bar");
  const fill = document.getElementById("clue-timer-fill");
  const isLastClue = shownClueIndex >= treasure.clues.length - 1;

  if (isLastClue) {
    // Plus aucun indice à venir : on masque la barre.
    bar.classList.add("hidden");
    return;
  }

  const intoInterval = seconds % CLUE_INTERVAL;
  const progress = (intoInterval / CLUE_INTERVAL) * 100;
  fill.style.width = progress + "%";
}

function updateTimer() {
  const remaining = Math.max(0, ROUND_DURATION - seconds);
  const min = Math.floor(remaining / 60);
  const sec = remaining % 60;
  document.getElementById("timer").textContent =
    String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
}

function onMapClick(e) {
  if (finished) return;

  playerPosition = e.latlng;

  if (playerMarker) {
    playerMarker.setLatLng(e.latlng);
    playerMarker.setStyle({ fillColor: "#f4b942", color: "#ffffff" });
  } else {
    playerMarker = L.circleMarker(e.latlng, {
      radius: 9,
      weight: 3,
      color: "#ffffff",
      fillColor: "#f4b942",
      fillOpacity: 0.9
    }).addTo(map);
  }

  document.getElementById("try").disabled = false;
}

function tryAnswer() {
  if (!playerPosition || finished) return;

  const treasure = currentGameTreasures[currentRound];
  const distance = map.distance(playerPosition, L.latLng(treasure.lat, treasure.lng));
  const km = distance / 1000;

  attemptsUsed++;
  lastAttemptKm = km; // mémorisé pour compter la tentative même si le temps s'écoule ensuite

  // Retour visuel immédiat : vert si proche, orange si moyen, rouge si loin.
  const feedbackColor = km < 1 ? "#3ddc73" : km < 5 ? "#f4b942" : "#e5484d";
  if (playerMarker) playerMarker.setStyle({ fillColor: feedbackColor });

  if (attemptsUsed < MAX_ATTEMPTS) {
    // Première tentative ratée : on donne la distance et on laisse retenter.
    document.getElementById("attempt-info").textContent =
      `Tentative ${attemptsUsed}/${MAX_ATTEMPTS} : tu es à ${formatDistance(km)} du trésor. Retente ta chance !`;

    const tryBtn = document.getElementById("try");
    tryBtn.textContent = `📍 JE TENTE (${attemptsUsed + 1}/${MAX_ATTEMPTS})`;
    tryBtn.disabled = true; // attend un nouveau clic sur la carte
  } else {
    // Dernière tentative : elle est définitive et sert au calcul du score.
    const score = scoreFromDistance(km);
    finishRound(score, km, false);
  }
}

function finishRound(score, km, timeout) {
  finished = true;
  totalScore += score;

  const treasure = currentGameTreasures[currentRound];

  roundScores.push({
    round: currentRound + 1,
    city: treasure.city,
    place: treasure.place,
    score: score
  });

  if (targetMarker) targetMarker.remove();
  targetMarker = L.circleMarker([treasure.lat, treasure.lng], {
    radius: 10,
    weight: 4
  }).addTo(map);
  targetMarker.bindPopup("🎯 " + treasure.place).openPopup();

  document.getElementById("try").disabled = true;
  document.getElementById("attempt-info").textContent = "";

  const isLastRound = currentRound === TOTAL_ROUNDS - 1;
  const result = document.getElementById("result");
  const content = document.getElementById("result-content");
  result.classList.remove("hidden");

  let html = "";
  if (timeout && km === null) {
    // Temps écoulé sans aucune tentative placée.
    html += `<h2>⏱️ Temps écoulé</h2><p>Le trésor était à <strong>${treasure.place}</strong>, à ${treasure.city}.</p>`;
  } else if (timeout && km !== null) {
    // Temps écoulé, mais une tentative avait été faite : elle compte.
    html += `<h2>⏱️ Temps écoulé</h2>` +
      `<div class="score">${score.toLocaleString("fr-FR")} pts</div>` +
      `<p>Ta tentative a quand même été prise en compte : <strong>${formatDistance(km)}</strong></p>` +
      `<p>📍 ${treasure.place} — ${treasure.city}</p>`;
  } else {
    html += `<h2>🏆 Manche ${currentRound + 1}/${TOTAL_ROUNDS}</h2>` +
      `<div class="score">${score.toLocaleString("fr-FR")} pts</div>` +
      `<p>Distance finale : <strong>${formatDistance(km)}</strong></p>` +
      `<p>📍 ${treasure.place} — ${treasure.city}</p>`;
  }
  html += `<p class="total-score">Score total : ${totalScore.toLocaleString("fr-FR")} pts</p>`;

  content.innerHTML = html;

  const nextBtn = document.getElementById("next-round");
  nextBtn.textContent = isLastRound ? "🏁 Voir le score final" : "▶ Manche suivante";
  nextBtn.classList.remove("hidden");
}

function nextRound() {
  const isLastRound = currentRound === TOTAL_ROUNDS - 1;

  if (isLastRound) {
    showFinalScreen();
    return;
  }

  currentRound++;
  startRound();
}

function buildShareText() {
  const modeLabel = GAME_MODE === "daily" ? "Défi du jour" : "Partie classique";
  const dateLabel = GAME_MODE === "daily" ? ` · ${todayKey()}` : "";
  const grid = roundScores.map(r => tierEmoji(r.score)).join("");

  return `🗺️ Carte au Trésor — ${modeLabel}${dateLabel}\n` +
    `${grid}\n` +
    `Score : ${totalScore.toLocaleString("fr-FR")} pts sur ${TOTAL_ROUNDS} manches`;
}

function showFinalScreen() {
  clearInterval(timerInterval);

  document.getElementById("next-round").classList.add("hidden");
  const content = document.getElementById("result-content");

  const breakdown = roundScores
    .map(r => `<div class="round-line"><span>${tierEmoji(r.score)} Manche ${r.round} — ${r.city}</span><span>${r.score.toLocaleString("fr-FR")} pts</span></div>`)
    .join("");

  let bestScoreHtml = "";
  try {
    const bestKey = GAME_MODE === "daily" ? "treasureHuntBestScoreDaily" : "treasureHuntBestScore";
    const previousBest = parseInt(localStorage.getItem(bestKey) || "0", 10);
    const isNewBest = totalScore > previousBest;
    const bestScore = isNewBest ? totalScore : previousBest;
    if (isNewBest) localStorage.setItem(bestKey, String(totalScore));
    bestScoreHtml = `<p class="best-score">${isNewBest ? "🎉 Nouveau record" : "Record"} : ${bestScore.toLocaleString("fr-FR")} pts</p>`;
  } catch (e) {
    // localStorage indisponible (navigation privée, etc.) : on ignore silencieusement.
  }

  content.innerHTML =
    `<h2>🎉 Partie terminée !</h2>` +
    `<div class="score">${totalScore.toLocaleString("fr-FR")} pts</div>` +
    bestScoreHtml +
    `<div class="round-breakdown">${breakdown}</div>` +
    `<button id="copy-score" class="restart-btn">📋 Copier mon score</button>` +
    `<button id="restart" class="restart-btn">🔄 Rejouer</button>`;

  document.getElementById("restart").addEventListener("click", () => {
    location.reload();
  });

  document.getElementById("copy-score").addEventListener("click", async () => {
    const btn = document.getElementById("copy-score");
    try {
      await navigator.clipboard.writeText(buildShareText());
      btn.textContent = "✅ Copié !";
    } catch (e) {
      btn.textContent = "❌ Copie impossible";
    }
    setTimeout(() => { btn.textContent = "📋 Copier mon score"; }, 2000);
  });
}

function formatDistance(km) {
  return km < 1
    ? Math.round(km * 1000) + " m"
    : km.toFixed(2) + " km";
}

window.addEventListener("load", () => {
  document.getElementById("mode-classic").addEventListener("click", () => startGame("classic"));
  document.getElementById("mode-daily").addEventListener("click", () => startGame("daily"));
});
