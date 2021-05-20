const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

    button = document.getElementById('btn')
    main = document.querySelector('main')
    
    let previousIndex = null

    console.log(main)
    const clicked = function() {
        randomIndex = Math.floor(Math.random() * colors.length)
        while(previousIndex === randomIndex){
            console.log('repeated' + ' :' + colors[randomIndex] )
            randomIndex = Math.floor(Math.random() * colors.length)
            
        }
        main.style.background = colors[randomIndex]
        previousIndex = randomIndex
        console.log(colors[randomIndex])
    }

    button.addEventListener('click', clicked)
    

