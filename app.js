
const monologues = [
  "Encore un chiffre... Quelle importance ?",
  "Même quand je réussis, je me sens vide.",
  "Remplir cette grille ne comblera jamais le vide intérieur.",
  "Chaque 9 est un rappel que je ne serai jamais parfait.",
  "Pourquoi les règles comptent encore ?",
  "Il n’y a pas de solution, juste une illusion d’ordre.",
  "Un autre jour, un autre Sudoku, une autre perte de temps."
];

function createBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';
  for (let i = 0; i < 81; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 1;
    input.pattern = "[1-9]";
    board.appendChild(input);
  }
}

function showRandomMonologue() {
  const m = monologues[Math.floor(Math.random() * monologues.length)];
  document.getElementById('monologue').textContent = m;
}

window.onload = () => {
  createBoard();
  showRandomMonologue();
};
