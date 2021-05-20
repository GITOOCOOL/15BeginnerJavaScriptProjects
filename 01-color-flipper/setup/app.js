const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn')
const main = document.querySelector('main')
const color = document.querySelector('.color')
    
    let previousIndex = null

    console.log(main)
    const clicked = function() {
        randomIndex = Math.floor(Math.random() * colors.length)
        while(previousIndex === randomIndex){
            console.log('repeated' + ' :' + colors[randomIndex] )
            randomIndex = Math.floor(Math.random() * colors.length)
            
        }
        main.style.background = colors[randomIndex]
        color.textContent = colors[randomIndex]
        previousIndex = randomIndex
        console.log(colors[randomIndex])
    }

    button.addEventListener('click', clicked)
    

