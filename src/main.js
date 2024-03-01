const cons = document.getElementById("console")
const fixed = document.getElementById("fixedtext")
const consbox = document.getElementById("consolebox")
const prefix = document.getElementById("prefix")
const header = document.getElementById("header");
const ENTER = 13;
const UP = 38;
const DOWN = 40;


async function slowText(str){
    const mod = 4;
    let cnt = 0;
    for(c of str){
        if(cnt == mod - 1){
            await new Promise(r => setTimeout(r, 1));
        }
        if(c == "=") append("<br>");
        else append(c);
        cnt = (cnt + 1) % mod;
    }
}

function append(str){ // append string to console
    fixed.innerHTML = fixed.innerHTML + str;
    consbox.scrollTop = consbox.scrollHeight;
}

async function startup() {
    append("<span class='yellow'> Starting up... <\span><br><br>");
    await new Promise(r => setTimeout(r, 800));
    fancy_name_string = 
    "░░░░▒█░█▀▀░█▀▀▄░█▀▀▄░█░░█░░░▒█▀▀▀█░█░░░░█▀▀▄░█▀▀▄░█▀▀▀=" +
    "░░░░▒█░█▀▀░█░▒█░█░▒█░█▄▄█░░░░▄▄▄▀▀░█▀▀█░█▄▄█░█░▒█░█░▀▄="+
    "░▒█▄▄█░▀▀▀░▀░░▀░▀░░▀░▄▄▄▀░░░▒█▄▄▄█░▀░░▀░▀░░▀░▀░░▀░▀▀▀▀=";
    
    slowText(fancy_name_string);

    await new Promise(r => setTimeout(r, 600));
    append("<span class='yellow'><br>Type 'help' to see a list of commands<br><br>");
    await new Promise(r => setTimeout(r, 500));
}

startup()