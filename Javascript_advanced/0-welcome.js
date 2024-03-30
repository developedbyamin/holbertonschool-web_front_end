function welcome(firstName, lastName) {
    // Concatenate first name and last name with a space in between
    let fullName = firstName + ' ' + lastName;

    // Define displayFullName function within welcome function
    function displayFullName() {
        // Display welcome message in an alert
        alert('Welcome ' + fullName + '!');
    }

    // Call displayFullName function
    displayFullName();
}

// Test the welcome function
welcome('Holberton', 'School');

// Attempting to access fullName outside the welcome function will result in a ReferenceError
// alert(fullName); // This line will result in a ReferenceError
