# DEMO code for Random Color Code Generator package
[https://random-color-code-generator.vercel.app/](Live)

### Random Color Code Generator

Let's you create random color code in RGB, HSL, and HEX.


## Installation

Install random-color-code-generator with npm

```bash
  npm install random-color-code-generator
```

## GET functions


```javascript
  // import RandomColor from package
  import { RandomColors } from 'random-color-code-generator'
  
  // intialize RandomColors and destruct get functions 
  const { getRandomRGBColor, getRandomHSLColor, getRandomHexColor, } = new RandomColors()

```
#### Get Random RGB Color

```javascript 
  const { getRandomRGBColor} = new RandomColors()
```
#### Get Random HSL Color

```javascript 
  const { getRandomHSLColor} = new RandomColors()
```
#### Get Random HEX Color

```javascript 
  const { getRandomHEXColor} = new RandomColors()
```


