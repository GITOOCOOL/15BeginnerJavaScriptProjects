// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const button = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
button.addEventListener('click', function(){
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
        console.log('1')
    }
    else{
        links.classList.add('show-links')
        console.log('2')
    }
})
