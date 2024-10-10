document.getElementById('tempForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get input values
    const temperature = parseFloat(document.getElementById('temperature').value);
    const convertTo = document.getElementById('convertTo').value;

    let convertedTemp;
    let explanation;

    // Validate input
    if (isNaN(temperature)) {
        document.getElementById('result').textContent = "Please enter a valid number for temperature.";
        document.getElementById('explanation').textContent = "";
        return;
    }

    // Conversion logic
    if (convertTo === 'celsius') {
        convertedTemp = (temperature - 32) * 5 / 9;
        explanation = `${temperature} Fahrenheit is equal to ${convertedTemp.toFixed(2)} Celsius.`;
    } else {
        convertedTemp = (temperature * 9 / 5) + 32;
        explanation = `${temperature} Celsius is equal to ${convertedTemp.toFixed(2)} Fahrenheit.`;
    }

    // Display result and explanation
    document.getElementById('result').textContent = `Converted Temperature: ${convertedTemp.toFixed(2)}° ${convertTo === 'celsius' ? 'Celsius' : 'Fahrenheit'}`;
    document.getElementById('explanation').textContent = explanation;
});
