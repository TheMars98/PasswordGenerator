const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password="";
let newPassOneEl=document.getElementById("new_password1");
let newPassTwoEl=document.getElementById("new_password2");

function givePasswords() {
    newPassOneEl.textContent=""
    newPassTwoEl.textContent=""
    generatePasswordOne()
    generatePasswordTwo()
}

function generatePasswordOne() {
    for (let i = 0; i < 15; i++) {
        newPassOneEl.textContent+=characters[Math.floor(Math.random()*characters.length)]
    }
}

function generatePasswordTwo() {
    for (let i = 0; i < 15; i++) {
        newPassTwoEl.textContent+=characters[Math.floor(Math.random()*characters.length)]
    }
}