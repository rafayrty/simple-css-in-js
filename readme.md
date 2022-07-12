# Simple CSS In JS

A 200 bytes Vanilla JS Library allows you to Write Styles in JS Without any Hassle. Hooks Into The HTMLElement Prototype allows you to edit all HTML Elements inside Your DOM With a Much Cleaner Syntax.

## Why Use Simple CSS In Js?
```javascript

//Write This 
let h1 = document.querySelector('h1');
h1.styles({fontSize:"4rem",color:"red"});

//Instead Of This
let h1 = document.querySelector('h1');
h1.style.fontSize = "4rem";
h1.style.color = "red";

```

## Installation

Use npm to install the package.

```bash
npm i simple-css-in-js
```

## Usage

```javascript
import SimpleCSS from "simple-css-in-js";

// Initialise The Plugin
SimpleCSS();

// Now Write This
let h1 = document.querySelector('h1');
h1.styles({fontSize:"2rem",color:"black"});

```
### Global Styling
```javascript
import SimpleCSS from "simple-css-in-js";

//Add The Style Object Directly Inside The Initialization 
SimpleCSS({
 margin:0,
 padding:0
})
// Works Similar to CSS * Selector


```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/MIT/)