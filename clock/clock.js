
let updateclock = () =>{
    const now = new Date();

   document.getElementById("times").innerHTML = now.toLocaleDateString();

    document.getElementById("time").innerHTML = now.toLocaleTimeString();
    
}

setInterval(updateclock,1000);
updateclock();


