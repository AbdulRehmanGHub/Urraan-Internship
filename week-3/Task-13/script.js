function capitalizeFirstLetter(){
    const name = document.getElementById("name-field").value;

   if(name === "" || name === null || name === undefined || !/^[a-zA-Z\s]+$/.test(name)) {
    // alert("Please enter a valid name.");
    document.getElementById("result").innerHTML = "Please enter a valid name.";
    return;
}

    const words = name.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    const result = capitalizedWords.join(' ');

    document.getElementById("result").innerHTML = `${result}`;
};


// Only First letter capitalize
// const result = name.charAt(0).toUpperCase() + name.slice(1);
