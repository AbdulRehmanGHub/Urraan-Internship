function findNextNumber(){
    let number = parseInt(document.getElementById('number-field').value);
    let nextNumber = number + 1;

    document.getElementById('result').innerHTML = `Next number for ${number} is ${nextNumber}`;
}

// console.log(findNextNumber());