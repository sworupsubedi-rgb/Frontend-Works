let password = () => {
let cha= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-><:;?"
let passwo=""



for (let i = 0; i < 10; i++) {
    let reasult= Math.floor(Math.random()*cha.length);
    passwo = passwo + cha.charAt(reasult);
    
}
document.getElementById("pass").value = passwo;
 


}

let copy = () => {
  pass =  document.getElementById("pass").value ;
    if (pass = "") {
        document.getElementById("copyer").innerHTML = " plz create a password"
    } else {
        document.exeCommand("copy");
        document.getElementById("copyer").textContent="copied"

    }
}