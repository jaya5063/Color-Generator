
let body = document.body
let name = document.getElementById("colorName")

function hexColor(){
    let color = `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
    console.log(color)
    body.style.backgroundColor = `${color}`;
    name.innerText = `${color}`
}

// setInterval(hexColor,1000);