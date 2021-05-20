const btns = document.querySelectorAll('.btn')
const value = document.getElementById('value')
console.log(btns)
let number = parseInt(value.innerText)

btns[0].addEventListener('click', () => {
    number--
    console.log(number)
    value.innerText = number
    if(number < 0 ){
        value.style.color = 'red'
    }
    if(number === 0 ){
        value.style.color = 'black'
    }
})
btns[1].addEventListener('click', () => {
    number = 0
    console.log(number)
    value.innerText = number
    value.style.color = 'black'
})
btns[2].addEventListener('click', () => {
    number++
    console.log(number)
    value.innerText = number
    if(number === 0 ){
        value.style.color = 'black'
    }
    if(number >  0){
        value.style.color = 'green'
    }

})