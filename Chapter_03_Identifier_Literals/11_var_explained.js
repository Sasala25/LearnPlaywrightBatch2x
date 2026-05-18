var a = 10;

console.log(a); // Output: 10

function printHello() {
    console.log("Hello, World!");
    var a = 20;
    console.log(a); // Output: 20 (local variable 'a' shadows the global variable 'a')
}

printHello();