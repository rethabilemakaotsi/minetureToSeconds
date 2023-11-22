function validateInput(minutes) {
    // Validate input and return true if valid, false otherwise
    return !isNaN(minutes) && minutes >= 0;
}

// Function for Seconds
function convertToSeconds(minutes) {
    // Convert minutes to seconds
    return minutes * 60;
}

// Function writes answer to DOM
function displayResult(seconds) {
    // Display the result in the DOM
    document.getElementById('result').textContent = `Result: ${seconds} seconds`;
}

// Main conversion function
function convertMinutesToSeconds() {
    // Get input value
    const minutesInput = document.getElementById('minutesInput').value;

    // Input validation
    if (!validateInput(minutesInput)) {
        alert('Invalid input. Please enter a valid non-negative number.');
        return; // exit function if input is invalid
    }

    // Convert to seconds
    const seconds = convertToSeconds(parseFloat(minutesInput));

    // Output formatted to specific decimal places(2)
    displayResult(seconds.toFixed(2));
}

// Your comments go here
