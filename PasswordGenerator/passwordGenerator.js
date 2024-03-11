async function generatePassword(length){

    const minCeiled = Math.ceil(33);
    const maxFloored = Math.floor(126);
    
    let array = [];

    for(let i = 0 ; i<length ; i++){
        array.push(Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled));
    }

    return String.fromCharCode(...array);

}

export default generatePassword;