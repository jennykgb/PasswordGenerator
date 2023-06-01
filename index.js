let characters =[];
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbol = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let firstPass = document.getElementById("first-Pass")
let secondPass = document.getElementById("second-Pass")


function passwordGenerator(){
    firstPass.textContent = "";
    secondPass.textContent = "";
    let passwordLength = document.getElementById("quantity").value
    let symbols = document.getElementById("symbols").checked;
    let nums = document.getElementById("numbers").checked;
    characters = letters;
    if(symbols==true){
        characters = characters.concat(symbol);
    }

    if(nums==true){
        characters = characters.concat(numbers);
    }

    for(let i=0; i<passwordLength; i++){
        let j=random();
        let k=random();
        firstPass.textContent += characters[j];
        secondPass.textContent += characters[k];
    }
}

function random(){
    return Math.floor(Math.random()*characters.length)
}

function copyText(id){
    let text = document.getElementById(id)
    navigator.clipboard.writeText(text.textContent);
}