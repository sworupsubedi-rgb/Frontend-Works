
let a = 0;
let subtract = () =>{
    let b = a-1
    document.getElementById("p").innerHTML = `${b}`
    a = b
}
let add = () =>{
    let b= a+1
    document.getElementById("p").textContent = `${b}`
    a = b
}
let reset = () =>{
    let b = 0 
    a = 0
    document.getElementById("p").textContent = `${b}`
}