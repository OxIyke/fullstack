diceImg1 = document.querySelector(".dice .img1");
diceImg2 = document.querySelector(".dice .img2");
myh1 = document.querySelector("h1");


function roll() {
    diceRoll1 = Math.floor((Math.random() * 6) + 1);
    diceRoll2 = Math.floor((Math.random() * 6) + 1);

    diceImg1.setAttribute("src", `./images/dice${diceRoll1}.png`);
    diceImg2.setAttribute("src", `./images/dice${diceRoll2}.png`);

    if (diceRoll1 === diceRoll2) {
        myh1.textContent = "Its a tie";
    } else if (diceRoll1 > diceRoll2) {
        myh1.textContent = "PLayer one wins";
    } else {
        myh1.textContent = "PLayer two wins";
    }
}
roll();
