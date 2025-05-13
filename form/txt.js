
let submi = () => {
    let a = document.getElementById("name").value;
    let b = document.getElementById("contact").value;
    if (b!= "" && a!="") {
        alert(`logged in by ${a}`);

    } else {
        document.getElementById("again").innerHTML="plz fill the full information to login"
    }
};