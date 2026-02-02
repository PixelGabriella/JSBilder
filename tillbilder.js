var flagga = 0;
function changeHeading(){
    var rubrik = document.getElementById('rubrik');
    if (flagga == 0) {
        rubrik.innerHTML = 'Välkommen hos oss!';
        flagga = 1;
    }
    else{
        rubrik.innerHTML = 'Våra favoriter!';
        flagga = 0;
    }
}

function changeBg() {
    document.body.classList.remove("greenbg");
    document.body.classList.add("nybg");
}

function changeBgAgain() {
    document.body.classList.remove("nybg");
    document.body.classList.add("greenbg");
}
