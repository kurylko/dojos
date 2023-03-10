/*
Create a function `sayHello` which takes a string as parameter and returns: "Hello {first name}", where {first name} is replaced with the argument value, example:
* sayHello("Barbara") -> "Hello Barbara"

If the argument is empty, null or undefined, return "Hello World":
* sayHello(null) -> "Hello World"

*/

function sayHello(name){
    if (name !== null && name !== ""){
        return `Hello ${name}`;
    } else {
        return "Hello World";
    }
};

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof sayHello, "function");
assert.strictEqual(sayHello.length, 1);
assert.strictEqual(sayHello("Barbara"), "Hello Barbara");
assert.strictEqual(sayHello("Jean-Michel"), "Hello Jean-Michel");
assert.strictEqual(sayHello(""), "Hello World");
assert.strictEqual(sayHello(null), "Hello World");
// End of tests
