const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPass = document.getElementById("first-Pass")
let secondPass = document.getElementById("second-Pass")

function passwordGenerator(){
    firstPass.textContent = "";
    secondPass.textContent = "";

    for(let i=0; i<15; i++){
        let j=random();
        let k=random();
        firstPass.textContent += characters[j];
        secondPass.textContent += characters[k];
    }
}

function random(){
    return Math.floor(Math.random()*characters.length)
}