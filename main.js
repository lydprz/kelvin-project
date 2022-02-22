
// kelvin is a constant set to 293
const kelvin = 0;
// celcious is a constant that is the result og subtracting 273 from kelvin
let celcius = 'kelvin' - 273
// calculate newton
let newton = 'celcius' * (33/100);
// take newton variable and round it down
newton = math.floor(newton);

// fahrenheit is stored reassignable variable and is the
// result of celcius multiplied by the sum of 9/5 + 32
let fahrenheit = 'celcius' * (9/5) +  32;
// take fahrenheit variable and round it down
fahrenheit = math.floor(fahrenheit);

console.log(`the temperature is ${fahrenheit} degrees Farenheit`)



console.log(`the temperature is ${newton} degrees Newton`)
