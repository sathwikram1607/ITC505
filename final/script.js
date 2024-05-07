
const board = document.getElementById('gameBoard');

function initializeBoard() {
    for (let i = 0; i < 25; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('click', () => toggleLights(i));
        board.appendChild(square);
    }
}

function toggleLights(index, isShuffling = false) {
    const row = Math.floor(index / 5);
    const indicesToToggle = [index, index - 1, index + 1, index - 5, index + 5];

    for (let idx of indicesToToggle) {
        if (Math.floor(idx / 5) === row || Math.floor(idx / 5) === row - 1 || Math.floor(idx / 5) === row + 1) {
            const square = board.children[idx];
            if (square) {
                square.classList.toggle('is-off');
            }
        }
    }

    if (!isShuffling) {
        checkForWin();
    }
}

function shuffleBoard() {
    for (let i = 0; i < 25; i++) {
        if (Math.random() < 0.5) {
            toggleLights(i, true);
        }
    }
}

function checkForWin() {
    const isWin = [...board.children].every(square => square.classList.contains('is-off'));
    console.log("Check for win called, isWin:", isWin); // Debugging line

    if (isWin) {
        alert('Congratulations! You have won the game!'); // Make sure this line is executed
        document.getElementById('winModal').style.display = 'block';
    }
}

// Close modal functionality
const modal = document.getElementById('winModal');
const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('playAgain').addEventListener('click', function() {
    board.innerHTML = ''; // Clear the current board
    initializeBoard();    // Initialize a new board
    shuffleBoard();       // Shuffle the new board
    modal.style.display = "none"; // Hide the win modal
});

initializeBoard();
shuffleBoard();