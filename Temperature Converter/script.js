function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let convertedTemperature;
    let unitName;

    if (unit === "celsius") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        unitName = "Celsius";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        unitName = "Fahrenheit";
    } else if (unit === "kelvin") {
        convertedTemperature = temperatureInput + 273.15;
        unitName = "Kelvin";
    }

    if (!isNaN(convertedTemperature)) {
        document.getElementById("result").textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unitName}`;
    } else {
        document.getElementById("result").textContent = "Please enter a valid temperature.";
    }
}
