const promptId = document.getElementById("prompt_id");
const promptValue = prompt("WHAT'S YOUR NAME : ", "YOU");

let user_score_count = 0;
let computer_score_count = 0;
const user_score = document.getElementById("user-score");
const computer_score = document.getElementById("computer-score");
const result_h1 = document.getElementById("result-h1");
const rock = document.querySelector(".r");
const paper = document.querySelector(".p");
const sccisor = document.querySelector(".s");
const outer_won_div = document.getElementById("outer_won_div");
const main_id = document.getElementById("main_id");
const cancel = document.getElementById("cancel");

// =================  game working start  ==============================
function getComputerChoice() {
  const choice = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber];
}

function convertToWord(letter) {
  if (letter == "r") {
    return "ROCK";
  }
  if (letter == "p") {
    return "PAPER";
  }
  if (letter == "s") {
    return "SCISSOR";
  }
}

function win(user, computer) {
  user_score_count++;
  user_score.innerHTML = user_score_count;
  computer_score.innerHTML = computer_score_count;
  let smallUserWord = "user".fontsize(3).sub();
  let smallComputerWord = "comp".fontsize(3).sub();
  result_h1.innerHTML = ` ${convertToWord(
    user
  )}${smallUserWord}    Beat ${convertToWord(
    computer
  )}${smallComputerWord}  YOU   WIN `;
  if (user_score_count == 5) {
    const wonImage = document.getElementById('won_image');
    outer_won_div.style.display = "flex";
    wonImage.setAttribute('src',"image/you_won.jpg");
    main_id.style.display = "none";
    promptId.innerText = `${promptValue} WIN`;
  }
}

function lose(user, computer) {
  computer_score_count++;
  user_score.innerHTML = user_score_count;
  computer_score.innerHTML = computer_score_count;
  let smallUserWord = "user".fontsize(3).sub();
  let smallComputerWord = "comp".fontsize(3).sub();
  result_h1.innerHTML = ` ${convertToWord(
    user
  )}${smallUserWord} Loses to  ${convertToWord(
    computer
  )}${smallComputerWord}  YOU   LOSE `;

  if (computer_score_count == 5) {
    outer_won_div.style.display = "flex";
    const wonImage = document.getElementById('won_image');
    // wonDiv1.src="image/you_won.jpg";
    wonImage.setAttribute('src',"image/lose.jpg");
    main_id.style.display = "none";
    promptId.innerText = `${promptValue} LOOSE`;
  }
}

function draw(user, computer) {
  // user_score_count++;
  user_score.innerHTML = user_score_count;
  computer_score.innerHTML = computer_score_count;
  let smallUserWord = "user".fontsize(3).sub();
  let smallComputerWord = "comp".fontsize(3).sub();
  result_h1.innerHTML = ` ${convertToWord(
    user
  )}${smallUserWord} draw  ${convertToWord(
    computer
  )}${smallComputerWord}  MATCH DRAW `;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);

      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);

      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);

      break;
  }
}
function main() {
  rock.addEventListener("click", () => {
    game("r");
  });
  paper.addEventListener("click", () => {
    game("p");
  });
  sccisor.addEventListener("click", () => {
    game("s");
  });
}
main();
// ==========================game work end======================
//========================= sound event in buttons strat ================================

const click_btn = document.querySelectorAll(".click_btn");
click_btn[0].addEventListener("click", () => {
  let audio = new Audio("click_msg.mp3");
  audio.play();
});
click_btn[1].addEventListener("click", () => {
  let audio = new Audio("click_msg.mp3");
  audio.play();
});
click_btn[2].addEventListener("click", () => {
  let audio = new Audio("click_msg.mp3");
  audio.play();
});
//========================= sound event in buttons end ================================


//===============================  day night mode code start =================
const modeDiv = document.querySelector(".mode_div");
const dayNightModeBtn = document.querySelector(".day_night_mode_btn");
const headerContent = document.querySelector(".header_content");
const rpsBtn = document.querySelector(".rps_btn");
const mainId = document.querySelector("#main_id");

modeDiv.addEventListener("click", () => {
  const day_night = dayNightModeBtn.innerText;
  if (day_night == "DAY") {
    dayNightModeBtn.innerText = "NIGHT";
    dayNightModeBtn.classList.add("right");
    dayNightModeBtn.classList.remove("left");
    headerContent.classList.add("header_night_color");
    headerContent.classList.remove("header_day_color");
    rpsBtn.classList.add("rps_btn_night_color");
    rpsBtn.classList.remove("rps_btn_day_color");
    mainId.classList.add("main_night_color");
    mainId.classList.remove("main_day_color");
  } else if (day_night == "NIGHT") {
    dayNightModeBtn.innerText = "DAY";
    dayNightModeBtn.classList.add("left");
    dayNightModeBtn.classList.remove("right");
    headerContent.classList.add("header_day_color");
    headerContent.classList.remove("header_night_color");
    rpsBtn.classList.add("rps_btn_day_color");
    rpsBtn.classList.remove("rps_btn_night_color");
    mainId.classList.add("main_day_color");
    mainId.classList.remove("main_night_color");
  }
});

//===============================  day night mode code end =================
