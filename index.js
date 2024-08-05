// from node samples
const { RandomColors } = require('random-color-type-generator');
const rcg = new RandomColors();

console.log('RGB', rcg.getRandomRGBColor());
console.log('HSL', rcg.getRandomHSLColor());
console.log('HEX', rcg.getRandomHexColor());

