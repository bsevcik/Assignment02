var coinFlip = Math.random();
// added .toUpperCase so that it user capitolization doesn't matter
var choice = window.prompt("Heads or Tails?").toUpperCase();
//var choice = choice.toUpperCase;
if (coinFlip * 10 >= 5) {
    coinFlip = "HEADS";
} else {
    coinFlip = "TAILS";
}

if (choice === "HEADS" && coinFlip === "HEADS") {
    document.write("You chose Heads and it was Heads! You Win!");
} else if (choice === "HEADS" && coinFlip === "TAILS") {
    document.write("You chose Heads and it was Tails! You Lose!");
} else if (choice === "TAILS" && coinFlip === "HEADS") {
    document.write("You chose Tails and it was Heads! You Lose!");
} else if (choice === "TAILS" && coinFlip === "TAILS") {
    document.write("You chose Tails and it was Tails! You Win!");
} else if (choice != "HEADS" && choice != "TAILS") {
    document.write("You didn't type Heads nor Tails... You Lose!");
} else {
    document.write("Something went wrong");
}