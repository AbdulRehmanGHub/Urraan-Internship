"use strict";

document.querySelector('button').addEventListener('click', function() {
    const selectedHours = document.getElementById('hours-field').value;

    if (selectedHours === '0' || selectedHours < '1'){
        document.getElementById('result').innerHTML = 'Please enter a valid number';
        return 0;

        // alert('Please enter a valid number');
        // return 0;
    }
    
    const seconds = selectedHours * 3600;
    
    document.getElementById('result').innerHTML = `${selectedHours} hours are equal to ${seconds} seconds`;
    // console.log(seconds);
});