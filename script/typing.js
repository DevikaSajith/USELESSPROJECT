const typingArea = document.getElementById("typingArea");
const roastText = document.getElementById("roastText");
const scoreText = document.getElementById("scoreText");

const roasts = [
  "Are you typing with your feet?",
  "This isn't a catwalk, it's a keyboard.",
  "My grandma types faster than this.",
  "Spellcheck gave up on you.",
  "Even autocorrect ran away.",
  "Keep going, maybe a miracle will happen.",
  "Your keyboard is crying..."
];

const badWords = {
  "deadline": "duckline",
  "meeting": "meating",
  "urgent": "un-gent",
  "code": "crash",
  "project": "problem",
  "team": "screams",
  "hello": "hellno"
};

typingArea.addEventListener("input", () => {
  let value = typingArea.value;
  // Replace "serious" words with embarrassing ones
  Object.keys(badWords).forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    value = value.replace(regex, badWords[word]);
  });

  typingArea.value = value;

  // Random roast every few keystrokes
  if (value.length % 15 === 0) {
    roastText.innerText = roasts[Math.floor(Math.random() * roasts.length)];
  }

  // Show dumb emoji score when typing is long enough
  if (value.length > 100) {
    const scores = ["💩", "🦥", "🙈", "🧽", "🫠"];
    scoreText.innerText = "Your typing score: " + scores[Math.floor(Math.random() * scores.length)];
  } else {
    scoreText.innerText = "";
  }
});
