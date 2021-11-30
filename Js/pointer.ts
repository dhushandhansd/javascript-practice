
var resultText = document.getElementById('resultText')

function moveCharacter() {
  var speed:number = 20
  var userHori:number = Number(window.prompt('Enter the Horizontal Value'))
  var userVert:number = Number(window.prompt('Enter the Vertical Value'))
  return userHori + userVert * speed
}

resultText.innerText = moveCharacter().toString()