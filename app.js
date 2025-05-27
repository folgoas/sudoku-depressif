
const monologues = [
  "Encore un chiffre... Quelle importance ?",
  "Même quand je réussis, je me sens vide.",
  "Remplir cette grille ne comblera jamais le vide intérieur.",
  "Chaque 9 est un rappel que je ne serai jamais parfait.",
  "Pourquoi les règles comptent encore ?",
  "Il n’y a pas de solution, juste une illusion d’ordre.",
  "Un autre jour, un autre Sudoku, une autre perte de temps."
];

function generateBoard() {
  const board = document.getElementById('board');
  for (let i = 0; i < 81; i++) {
    const cell = document.createElement('input');
    cell.type = 'text';
    cell.maxLength = 1;
    board.appendChild(cell);
  }
  displayMonologue();
}

function displayMonologue() {
  const text = monologues[Math.floor(Math.random() * monologues.length)];
  document.getElementById('monologue').innerText = text;
}

window.onload = generateBoard;
