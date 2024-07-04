// function play(){
//     const homeScreen  = document.getElementById('some-secreen')
//     homeScreen.classList.add('hidden')

//     const playGroundSection = document.getElementById('playGround-section')
//     playGroundSection.classList.remove('hidden')
// }

function continueGame() {
  const alphabet = getARandomAlphabets();
  console.log("Your random alphabets :",alphabet)
  // set randomly generated alphabet to the screen showIt
  const currentAlphabets = document.getElementById('currents-alphabets')
  currentAlphabets.innerText=alphabet
  // set background color
  setBackgroundById(alphabet)

}
function play() {
  hideElementById("Home-secreen");
  showElementById("playGround-section");
  continueGame();
  
}
