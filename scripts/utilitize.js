function hideElementById(elemtntId){
    const elemtnt = document.getElementById(elemtntId)
    elemtnt.classList.add('hidden')
}
function showElementById(elemtntId){
    const elemtnt = document.getElementById(elemtntId)
    elemtnt.classList.remove('hidden')
}