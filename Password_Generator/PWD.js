let capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let smalls = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "!@#$%^&*()_+-={}[]?></";
let pwd_input = document.getElementById("pwd-gen");
let object = {
    capitals_select: false,
    smalls_select: false,
    numbers_select: false,
    symbols_select: false
}



function generate() {
    let pwd = "";
    let pwd_length = 10;
    let caps = document.getElementById("Capitals");
    let smal = document.getElementById("Smalls");
    let numb = document.getElementById("Numbers");
    let symb = document.getElementById("Symbols");
    object = {
        capitals_select: caps.checked,
        smalls_select: smal.checked,
        numbers_select: numb.checked,
        symbols_select: symb.checked
    }
    while (pwd_length > pwd.length) {
        if (object['capitals_select']) {
            pwd += capitals[Math.floor(Math.random() * capitals.length)];
        }
        if (object['smalls_select']) {
            pwd += smalls[Math.floor(Math.random() * smalls.length)];
        }
        if (object['numbers_select']) {
            pwd += numbers[Math.floor(Math.random() * numbers.length)];
        }
        if (object['symbols_select']) {
            pwd += symbols[Math.floor(Math.random() * symbols.length)];
        }
    }
    pwd_input.value = pwd;
}