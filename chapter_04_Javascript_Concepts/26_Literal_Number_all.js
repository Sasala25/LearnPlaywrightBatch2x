// =====================================================
// 26_Literal_Number_all.js
// All number types and literal formats in JavaScript
// =====================================================

// JavaScript has a single Number data type: 64-bit floating-point (IEEE 754).
// It does NOT have separate types for integers and floats.

// -----------------------------------------------------
// 1. DECIMAL (Base-10) INTEGER
// -----------------------------------------------------
let count = 25;
let temperature = -10;
console.log("Decimal integer:", count, temperature); // 25 -10

// -----------------------------------------------------
// 2. DECIMAL FLOATING-POINT
// -----------------------------------------------------
let price = 19.99;
let fraction = 0.5;
let negativeFloat = -3.14;
console.log("Floating-point:", price, fraction, negativeFloat); // 19.99 0.5 -3.14

// -----------------------------------------------------
// 3. EXPONENTIAL (Scientific) NOTATION
// -----------------------------------------------------
let large = 1e5;   // 1 * 10^5  -> 100000
let small = 1e-5;  // 1 * 10^-5 -> 0.00001
let mass = 5.2e8;  // 5.2 * 10^8 -> 520000000
console.log("Exponential notation:", large, small, mass); // 100000 0.00001 520000000

// -----------------------------------------------------
// 4. BINARY (Base-2) - Prefix 0b or 0B
// -----------------------------------------------------
let bin = 0b1010; // 10 in decimal
let binAlt = 0B1111; // 15 in decimal
console.log("Binary 0b1010:", bin);  // 10
console.log("Binary 0B1111:", binAlt); // 15

// -----------------------------------------------------
// 5. OCTAL (Base-8) - Prefix 0o or 0O
// -----------------------------------------------------
let oct = 0o17;  // 15 in decimal
let octAlt = 0O10; // 8 in decimal
console.log("Octal 0o17:", oct);   // 15
console.log("Octal 0O10:", octAlt); // 8

// -----------------------------------------------------
// 6. HEXADECIMAL (Base-16) - Prefix 0x or 0X
// -----------------------------------------------------
let hex = 0x1A;  // 26 in decimal
let hexColor = 0xFF; // 255 in decimal
let hexAlt = 0Xabc; // 2748 in decimal
console.log("Hex 0x1A:", hex);       // 26
console.log("Hex 0xFF:", hexColor);  // 255
console.log("Hex 0Xabc:", hexAlt);   // 2748

// -----------------------------------------------------
// 7. BIG INT - Arbitrary precision integers
// -----------------------------------------------------
// Used for very large integers beyond the safe integer limit.
// Suffixed with 'n'. Cannot mix BigInt and Number in math directly.
let big = 9007199254740991n;
let huge = 123456789012345678901234567890n;
let bigFromHex = 0xFFFFFFFFFFFFFFFFn;
console.log("BigInt:", big);
console.log("Huge BigInt:", huge);
console.log("BigInt from hex:", bigFromHex);

// -----------------------------------------------------
// 8. SPECIAL NUMERIC VALUES
// -----------------------------------------------------
// Infinity
let posInf = Infinity;
let negInf = -Infinity;
let divByZero = 1 / 0;
let negDivByZero = -1 / 0;
console.log("Infinity:", posInf, negInf); // Infinity -Infinity
console.log("1 / 0:", divByZero);         // Infinity
console.log("-1 / 0:", negDivByZero);     // -Infinity

// NaN - Not a Number
let notANum = NaN;
let invalidMath = 0 / 0;
let badParse = parseInt("hello");
console.log("NaN:", notANum);             // NaN
console.log("0 / 0:", invalidMath);      // NaN
console.log("parseInt('hello'):", badParse); // NaN

// -----------------------------------------------------
// 9. NUMBER OBJECT WRAPPER (Rarely used directly)
// -----------------------------------------------------
let numObj = new Number(42);
let numPrimitive = Number(42); // coercion/conversion, not object
console.log("Number object:", numObj);           // [Number: 42]
console.log("typeof numObj:", typeof numObj);    // object
console.log("typeof numPrimitive:", typeof numPrimitive); // number

// -----------------------------------------------------
// 10. USEFUL NUMBER PROPERTIES
// -----------------------------------------------------
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Number.NaN:", Number.NaN);
console.log("Number.EPSILON:", Number.EPSILON);
