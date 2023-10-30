const inputTempElement = document.getElementById("inputTemp");
const inputUnitElement = document.getElementById("inputUnit");
const outputUnitElement = document.getElementById("outputUnit");
const convertButton = document.getElementById("convertButton");
const convertedTempElement = document.getElementById("convertedTemp");


convertButton.addEventListener("click", convertTemperature);

function convertTemperature() {
   
    const temperature = parseFloat(inputTempElement.value);
    const inputUnit = inputUnitElement.value;
    const outputUnit = outputUnitElement.value;

    
    if (isNaN(temperature)) {
        alert("Please enter a valid temperature.");
        return;
    }

    let resultTemperature;

    if (inputUnit === outputUnit) {
        
        resultTemperature = temperature;
    } else if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
        resultTemperature = (temperature * 9/5) + 32;
    } else if (inputUnit === "celsius" && outputUnit === "kelvin") {
        resultTemperature = temperature + 273.15;
    } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
        resultTemperature = (temperature - 32) * (5 / 9);
    } else if (inputUnit === "fahrenheit" && outputUnit === "kelvin") {
        resultTemperature = ((temperature - 32) * (5 / 9)) + 273.15;
    } else if (inputUnit === "kelvin" && outputUnit === "celsius") {
        resultTemperature = temperature - 273.15;
    } else if (inputUnit === "kelvin" && outputUnit === "fahrenheit") {
        resultTemperature = ((temperature - 273.15) * 9/5) + 32;
    }

    
    convertedTempElement.textContent = resultTemperature.toFixed(2) + " " + outputUnit;
}
