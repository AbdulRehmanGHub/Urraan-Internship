function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight-field").value);
    let height = parseFloat(document.getElementById("height-field").value);

    // Convert height from centimeters to meters
    height /= 100;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML = "Enter valid values.";
        return;
    }

    let bmi = weight / Math.pow(height, 2);

    document.getElementById("result").innerHTML = "Your BMI is: " + Math.round(bmi * 100) / 100;
}
