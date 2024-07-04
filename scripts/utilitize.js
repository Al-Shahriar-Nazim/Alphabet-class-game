function hideElementById(elemtntId) {
  const elemtnt = document.getElementById(elemtntId);
  elemtnt.classList.add("hidden");
}
function showElementById(elemtntId) {
  const elemtnt = document.getElementById(elemtntId);
  elemtnt.classList.remove("hidden");
}
function setBackgroundById(elementId){
  const element = document.getElementById(elementId)
  element.classList.add('bg-orange-400')
}
function removeBagroundColorById(elementId){
const element =document.getElementById(elementId)
element.classList.remove('bg-orange-400')
}
function getARandomAlphabets(){
    // get a alphabet create
const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
const alpahbets = alphabetString.split('')
console.log(alpahbets)
// get a random index between (0-25)
const randomNumber = Math.random( )*25
const index = Math.round(randomNumber)
console.log(index)
const alphabet = alpahbets[index]
console.log(alpahbets,index)
return alphabet
}