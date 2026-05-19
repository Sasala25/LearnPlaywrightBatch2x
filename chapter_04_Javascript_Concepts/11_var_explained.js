var a = 10;

console.log(a); // Output: 10

function printHello() {
    console.log("Hello, World!");
    var a = 20;
    console.log(a); // Output: 20 (local variable 'a' shadows the global variable 'a')
    if (true) {
        var a = 30; // 'var' is function-scoped, so this 'a' is the same as the one in the function scope
    }
}
printHello();