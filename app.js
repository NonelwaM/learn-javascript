// Constant temperature in Kelvin
const kelvin = 0;
// Convert temp from Kelvin to Celsius
let celsius = kelvin - 273;
// Calculate fahrenheit from celsius using the standard formula
let fahrenheit = celsius * (9/5) +32;
// round off
fahrenheit = Math.floor(fahrenheit);
// print  the output
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// convert celsius to Newton scale using the standard formula
let newton = celsius * (33/100);
// round off the value
newton = Math.floor(newton);
// print the output
console.log(`The temperature is ${newton} when using the Newton scale.`);