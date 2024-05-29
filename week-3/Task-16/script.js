const firstNumberInput = document.getElementById('f-number-field');
const secondNumberInput = document.getElementById('s-number-field');
const resultField = document.getElementById('result-field');

// Function to update the result field
function updateResult() {
    const firstNumber = parseFloat(firstNumberInput.value);
    const secondNumber = parseFloat(secondNumberInput.value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        resultField.value = '';
        resultField.placeholder = 'NaN';
    } else {
        resultField.value = firstNumber + secondNumber;
        resultField.placeholder = '';
    }
}

// Event listeners for input changes
firstNumberInput.addEventListener('input', updateResult);
secondNumberInput.addEventListener('input', updateResult);