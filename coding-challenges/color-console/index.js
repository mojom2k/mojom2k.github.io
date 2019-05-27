/*
create an ES6 class named `ColorConsole` which has a method named `log(text)`.
The constructor of the class should take an argument called color, which will be the color used for printing the text 
passed to the `log` method. The constructor should take only `red`, `green` and `yellow` values.
And then if we call the `log` method, it should print the text in the color we have passed to the constructor while creating the object.
*/
class ColorConsole {
  constructor(color) {
    this.color = color;
  }

  log(input) {
    if (this.color == "red") {
      console.log("\x1b[31m", input);
    }
    if (this.color == "yellow") {
      console.log("\x1b[33m", input);
    }
    if (this.color == "green") {
      console.log("\x1b[32m", input);
    }
  }
}

let myConsole = new ColorConsole("yellow");
myConsole.log("Attain University");
let myConsole = new ColorConsole("green");
myConsole.log("Attain University");
let myConsole = new ColorConsole("red");
myConsole.log("Attain University");