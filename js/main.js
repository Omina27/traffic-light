//Traffic lights

const svetafor = (className) => {
    let svetaforLight = document.body.querySelector(className)
    svetaforLight.classList.toggle('box__off')
}


let intervalIdRed = setInterval(svetafor, 8000, ".box__red")
let intervalIdYellow = setInterval(svetafor, 5000, ".box__yellow")
let intervalIdGreen = setInterval(svetafor, 7000, ".box__green")


//Car move 
let car__go = (className) => {
    let go = document.body.querySelector(className)
    go.classList.toggle("car__go")
}

let addCarMove = setInterval(car__go, 6000, ".car")



//Clear all of them
function allClear () {
    clearInterval(intervalIdRed)
    clearInterval(intervalIdYellow)
    clearInterval(intervalIdGreen)
}

setTimeout(allClear, 14000)

