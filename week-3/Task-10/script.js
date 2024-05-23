const calculateAge = () => {
    const date = parseInt(document.getElementById('date-field').value);
    const month = document.getElementById('month-field').value;
    const year = parseInt(document.getElementById('year-field').value);

    if (!date || !month || !year || date < 1 || date > 31 || year < 1900 || year > 2025) {
        console.log('The Provided Date of Birth is Invalid.');
        return;
    }

    const dateOfBirth = new Date(`${month} ${date} ${year}`);
    const today = new Date();

    // Entered date of birth is incorrect
    // if (dateOfBirth > today) {
    //     alert('The date of birth cannot be in the future');
    //     return;
    // }

    const difference = today - dateOfBirth.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById('result').textContent = `YOU ARE ${days} DAYS OLD...`;
};