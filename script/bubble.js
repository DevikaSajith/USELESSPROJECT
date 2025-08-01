const bubbleContainer = document.getElementById('bubbleContainer');
const soundList = [
  'duck.mp3',
  'cricket.mp3',
  'frog.mp3',
  'irie.mp3',
  'minions.mp3',
  'siren.mp3'
];

function randomSound() {
  const sound = new Audio(`../assets/sounds/${soundList[Math.floor(Math.random() * soundList.length)]}`);
  sound.play();
}

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = Math.random() * 90 + "%";
  bubble.style.top = Math.random() * 90 + "%";
  bubble.addEventListener('click', () => {
    randomSound();
    bubble.remove();
  });
  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 8000); // auto-remove after 8 seconds
}

// Create bubbles every 300ms
setInterval(createBubble, 300);
