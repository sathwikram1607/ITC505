
function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const tempType = document.getElementById('tempType').value;
    let convertedTemp;

    if (tempType === 'celsius') {
        convertedTemp = (tempInput * 9/5) + 32; // Convert to Fahrenheit
    } else {
        convertedTemp = (tempInput - 32) * 5/9; // Convert to Celsius
    }

    document.getElementById('convertedTemp').innerText = `Converted Temperature: ${convertedTemp.toFixed(2)}`;
}
