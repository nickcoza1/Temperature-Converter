function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function describeTemperature(celsius) {
  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}

const userInput = prompt("Enter temperature in Fahrenheit:");

const fahrenheit = parseFloat(userInput);

if (isNaN(fahrenheit)) {
  alert("Please enter a valid number.");
} else {
  const celsius = convertToCelsius(fahrenheit);
  const description = describeTemperature(celsius);

  alert(`${fahrenheit}°F is approximately ${celsius.toFixed(1)}°C — ${description}.`);
}
