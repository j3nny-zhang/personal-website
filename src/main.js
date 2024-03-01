const cons = document.getElementById("console")
const fixed = document.getElementById("fixedtext")
const consbox = document.getElementById("consolebox")
const prefix = document.getElementById("prefix")
const header = document.getElementById("header");
const ENTER = 13;
const UP = 38;
const DOWN = 40;


function append(str){ // append string to console
    fixed.innerHTML = fixed.innerHTML + str;
    consbox.scrollTop = consbox.scrollHeight;
}

async function startup() {
    append("hello world");
}

startup()