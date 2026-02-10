// constants
const TEAM_NAME = "Team A";

// state variables
let runs = 0;
let wickets = 0;
let overs = 0;
let balls = 0;

// elements
const runsInput = document.getElementById("runsInput");
const runBtn = document.getElementById("runBtn");
const wicketBtn = document.getElementById("wicketBtn");
const ballBtn = document.getElementById("ballBtn");
const resetBtn = document.getElementById("resetBtn");
const scoreBoard = document.getElementById("scoreBoard");

// update UI
const updateUI = () => {
    scoreBoard.innerText = `${TEAM_NAME}: ${runs}/${wickets} (${overs}.${balls})`;
};

// events
runBtn.addEventListener("click", () => {
    const value = Number(runsInput.value);
    runs += value;
    runsInput.value = "";
    updateUI();
});

wicketBtn.addEventListener("click", () => {
    wickets++;
    updateUI();
});

ballBtn.addEventListener("click", () => {
    balls++;
    if (balls === 6) {
        overs++;
        balls = 0;
    }
    updateUI();
});

resetBtn.addEventListener("click", () => {
    runs = 0;
    wickets = 0;
    overs = 0;
    balls = 0;
    updateUI();
});
