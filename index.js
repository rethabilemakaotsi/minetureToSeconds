function validateInput(minutes) {
    
    return !isNaN(minutes) && minutes >= 0;
}


function convertToSeconds(minutes) {
    
    return minutes * 60;
}


function displayResult(seconds) {
    
    document.getElementById('result').textContent = `Result: ${seconds} seconds`;
}


function convertMinutesToSeconds() {

    const minutesInput = document.getElementById('minutesInput').value;


    if (!validateInput(minutesInput)) {
        alert('Invalid input. Please enter a valid non-negative number.');
        return; 
    }

    
    const seconds = convertToSeconds(parseFloat(minutesInput));

    
    displayResult(seconds.toFixed(2));
}

