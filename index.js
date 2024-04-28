var Player1 = Math.floor(Math.random() * 6) + 1;
var Player2 = Math.floor(Math.random() * 6) + 1;

document
  .querySelector(".img1")
  .setAttribute("src", `./images/dice${Player1}.png`);
document
  .querySelector(".img2")
  .setAttribute("src", `./images/dice${Player2}.png`);

if (Player1 > Player2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (Player2 > Player1) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
