import generatePassword from "./passwordGenerator.js";

let passwordLength = document.getElementById("lengthInput").value;
let showPassword = document.getElementById("password");

document.getElementById("lengthInput").addEventListener("change",()=>{
    passwordLength = document.getElementById("lengthInput").value;
})

document.getElementById("buttonPassword").addEventListener("click" , ()=>{
    generatePassword(passwordLength)
    .then( password=>showPassword.value = password);
})