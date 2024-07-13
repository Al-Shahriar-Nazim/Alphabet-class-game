// function play(){
//     const homeScreen  = document.getElementById('some-secreen')
//     homeScreen.classList.add('hidden')

//     const playGroundSection = document.getElementById('playGround-section')
//     playGroundSection.classList.remove('hidden')
// }

function handleKeyBoardKeyPressed(event) {
  const playerPressed = event.key;
  // console.log(playerPressed);

  // get the expected to pressed
  const currentAlphabetsElements =
    document.getElementById("currents-alphabets");
  const currentAlphabet = currentAlphabetsElements.innerText;
  const expectedAlphabets = currentAlphabet.toLowerCase();
  // console.log(playerPressed, expectedAlphabets);

  //checked match or not
  if (playerPressed === expectedAlphabets) {
    console.log("You have got a point");
    // update score

    const currentScore = getElementValueById("current-score");
    console.log(currentScore);
    const updateScore = currentScore + 1;
    setTextElementValueById("current-score", updateScore);

    // 1.get the current score
    // const currentScoreElements = document.getElementById('current-score')
    // const currentScoreText = currentScoreElements.innerText;
    // const currentScore = parseInt(currentScoreText)
    //     // 2.Incress the score by one
    //     const newScore = currentScore + 1

    //     // 3.show the updated score
    //     currentScoreElements.innerText = newScore

    // start a new round
    removeBagroundColorById(expectedAlphabets);
    continueGame();
  } else {
    console.log("You have loss a point.");

    const currentLife = getElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }

    // ----------------------------------------------------
    // step - 1 : get the current life number
    // const currentLifeElements = document.getElementById('current-life')
    // const currentLifeText = currentLifeElements.innerText;
    // const currentLife = parseInt(currentLifeText)

    // // step - 2 : reduce the life count
    // const newLife = currentLife-1;
    // // step - 3 : Display the updated life count
    // currentLifeElements.innerText = newLife
  }
}
document.addEventListener("keyup", handleKeyBoardKeyPressed);

function continueGame() {
  const alphabet = getARandomAlphabets();
  // console.log("Your random alphabets :", alphabet);
  // set randomly generated alphabet to the screen showIt
  const currentAlphabets = document.getElementById("currents-alphabets");
  currentAlphabets.innerText = alphabet;
  // set background color
  setBackgroundById(alphabet);
}
function play() {
  // hide everything show only the playground
  hideElementById("Home-secreen");

  showElementById("playGround-section");
  hideElementById("finnal-score");

  // reset score and life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  continueGame();
}

function gameOver() {
  hideElementById("playGround-section");
  showElementById("finnal-score");
  // update finnal score
  const lastScore = getElementValueById("current-score");
  console.log(lastScore)
  setTextElementValueById('game-last-score',lastScore)
  const currentAlphabets = getElementTextById('currents-alphabets')
  removeBagroundColorById(currentAlphabets)
}
