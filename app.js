const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')

}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#playTo');

// let p1Score = 0;
// let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function updateScores(player, oponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            oponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            oponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}



p1.button.addEventListener('click', function () {
    // alert("Clicked!")
    // if (!isGameOver) {
    //     p1Score += 1;
    //     if (p1Score === winningScore) {
    //         isGameOver = true;
    //         p1Display.classList.add('has-text-success');
    //         p2Display.classList.add('has-text-danger');
    //         p1Button.disabled = true;
    //         p2Button.disabled = true;
    //     }
    //     p1Display.textContent = p1Score;
    // }
    updateScores(p1,p2)
})

p2.button.addEventListener('click', function () {
    // alert("Clicked!")
    // if (!isGameOver) {
    //     p2Score += 1;
    //     if (p2Score === winningScore) {
    //         isGameOver = true;
    //         p2Display.classList.add('has-text-success');
    //         p1Display.classList.add('has-text-danger');
    //         p1Button.disabled = true;
    //         p2Button.disabled = true;
    //     }
    //     p2Display.textContent = p2Score;
    // }
    updateScores(p2,p1)
})

winningScoreSelect.addEventListener('change', function() {
    // alert('change!');
    // alert(this.value);
    winningScore = parseInt(this.value);
    reset();

})

// resetButton.addEventListener('click', function () {
//     isGameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     p1Display.textContent = 0;
//     p2Display.textContent = 0;
// })

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1,p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    // p1.score = 0;
    // p2.score = 0;
    // p1.isplay.textContent = 0;
    // p2.display.textContent = 0;
    // p2.display.classList.remove('has-text-success', 'has-text-danger');
    // p1.display.classList.remove('has-text-success', 'has-text-danger');
    // p1Button.disabled = false;
    // p2Button.disabled = false;

}