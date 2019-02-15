/*eslint-env browser*/

var x = parseInt(window.prompt("Type First Integer"));
var y = parseInt(window.prompt("Type Second Integer"));

if (isNaN(x) || isNaN(y)) {
    document.write("You gotta put in integers silly!");
} else if (x > y ) {
    document.write(x + " is greater than " + y);
} else if (y > x) {
    document.write(y + " is greater than " + x);
} else if (x == y) {
    document.write(x + " is equal to " + y);
} else {
    document.write("I'm confused? Did you enter an Integer in each prompt?");
}