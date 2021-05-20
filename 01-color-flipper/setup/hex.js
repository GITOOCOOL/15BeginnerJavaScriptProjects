const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const main = document.querySelector('main')
const button = document.getElementById('btn')
const color = document.querySelector('.color')

const clicked = function(){
    let randomColorValues = []
    for(i=0; i< 6; i++){
        let randomIndex = Math.floor(Math.random() * hex.length)
        randomColorValues.push(hex[randomIndex])
    }
    let colorHexValue = '#' + randomColorValues.join('')
    console.log(colorHexValue)
    main.style.background = colorHexValue
    color.textContent = colorHexValue
}
button.addEventListener('click', clicked)