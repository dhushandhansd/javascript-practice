var resultText = document.getElementById('resultText');
function moveCharacter() {
    var speed = 20;
    var userHori = Number(window.prompt('Enter the Horizontal Value'));
    var userVert = Number(window.prompt('Enter the Vertical Value'));
    return userHori + userVert * speed;
}
resultText.innerText = moveCharacter().toString();
var indianGod = {
    name: 'Shree Dhushandhan',
    city: 'Egypt',
    age: 89281,
    type: 'Destroyer'
};
