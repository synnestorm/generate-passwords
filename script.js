
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4",
     "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
     "=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let firstPassword = document.getElementById("password-one")
let secondPassword = document.getElementById("password-two")

function generatePassword() {
    let randomCharacterOne = Math.floor( Math.random() * characters.length );
    let randomCharacterTwo = Math.floor( Math.random() * characters.length );
    let randomCharacterThree = Math.floor( Math.random() * characters.length );
    let randomCharacterFour = Math.floor( Math.random() * characters.length );
    let randomCharacterFive = Math.floor( Math.random() * characters.length );
    let randomCharacterSix = Math.floor( Math.random() * characters.length );
    let randomCharacterSeven = Math.floor( Math.random() * characters.length );
    let randomCharacterEight = Math.floor( Math.random() * characters.length );
    let randomCharacterNine = Math.floor( Math.random() * characters.length );
    let randomCharacterTen = Math.floor( Math.random() * characters.length );
    let randomCharacterEleven = Math.floor( Math.random() * characters.length );
    let randomCharacterTwelve = Math.floor( Math.random() * characters.length );
    firstPassword.textContent = characters[randomCharacterOne] + characters[randomCharacterTwo] + 
    characters[randomCharacterThree] + characters[randomCharacterFour] + characters[randomCharacterFive]
    + characters[randomCharacterSeven] + characters[randomCharacterEight] + characters[randomCharacterNine]
    + characters[randomCharacterTen] + characters[randomCharacterEleven] + characters[randomCharacterTwelve];
    secondPassword.textContent = characters[randomCharacterEleven] + characters[randomCharacterEight] +
    characters[randomCharacterFour] + characters[randomCharacterOne] + characters[randomCharacterTen] +
    characters[randomCharacterSeven] + characters[randomCharacterThree] + characters[randomCharacterNine] +
    characters[randomCharacterTwelve] + characters[randomCharacterFive] + characters[randomCharacterTwo];
}
