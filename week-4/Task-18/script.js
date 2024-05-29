function myFunc() {
    let name = document.getElementById("u-name").value;
    let email = document.getElementById("u-email").value;
    let org = document.getElementById("u-org").value;

    let isValid = true;
    
    // Name
    if (name === "") {
        document.getElementById('message-name').innerHTML = "*Name is required";
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById('message-name').innerHTML = "*Name must be at least 3 characters long";
        isValid = false;
    } else if (name.length > 20) {
        document.getElementById('message-name').innerHTML = "*Name must be at most 20 characters long";
        isValid = false;
    } else if (!isNaN(name)) {
        document.getElementById('message-name').innerHTML = "*Name must be a string";
        isValid = false;
    } else {
        document.getElementById('message-name').innerHTML = "Valid";
        document.getElementById('message-name').style.color = "yellow";
    }
    
    // Email
    if (email === "") {
        document.getElementById('message-email').innerHTML = "*Email is required";
        isValid = false;
    } else if (email.length < 3) {
        document.getElementById('message-email').innerHTML = "*Email must be at least 3 characters long";
        isValid = false;
    } else if (email.length > 34) {
        document.getElementById('message-email').innerHTML = "*Email must be at most 20 characters long";
        isValid = false;
    } else if (!isNaN(email)) {
        document.getElementById('message-email').innerHTML = "*Email must be a string";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('message-email').innerHTML = "*Invalid email format";
        isValid = false;
    } else {
        document.getElementById('message-email').innerHTML = "Valid";
        document.getElementById('message-email').style.color = "yellow";
    }

    // Organization
    if (org === "") {
        document.getElementById('message-org').innerHTML = "*Organization is required";
        isValid = false;
    } else if (org.length < 3) {
        document.getElementById('message-org').innerHTML = "*Organization must be at least 3 characters long";
        isValid = false;
    } else if (org.length > 20) {
        document.getElementById('message-org').innerHTML = "*Organization must be at most 20 characters long";
        isValid = false;
    } else if (!isNaN(org)) {
        document.getElementById('message-org').innerHTML = "*Organization must be a string";
        isValid = false;
    } else {
        document.getElementById('message-org').innerHTML = "Valid";
        document.getElementById('message-org').style.color = "yellow";
    }

    // Textareas
    let textareas = document.querySelectorAll('.textarea');
    let messages = document.querySelectorAll('.textarea-message');

    textareas.forEach((textarea, index) => {
        if (textarea.value === "") {
            messages[index].innerHTML = `*Textarea ${index + 1} is required`;
            isValid = false;
        } else {
            messages[index].innerHTML = "Valid";
            messages[index].style.color = "yellow";
    }
});

    return isValid;
}
