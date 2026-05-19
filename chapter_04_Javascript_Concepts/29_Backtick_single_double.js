// =====================================================
// 29_Backtick_single_double.js
// Difference between backtick, single, and double strings
// =====================================================

// 1. SINGLE & DOUBLE QUOTES: Both are plain strings.
//    - No difference in behavior.
//    - Cannot embed variables or multi-line text easily.

let single = 'Hello, World!';
let double = "Hello, World!";

console.log("Single:", single);
console.log("Double:", double);

// 2. BACKTICKS (Template Literals):
//    - Allow multi-line strings.
//    - Allow variable interpolation with ${...}.

let name = "Alice";
let greeting = `Hello, ${name}!`;
let multiLine = `Line 1
Line 2
Line 3`;

console.log("Backtick with variable:", greeting);
console.log("Backtick multi-line:", multiLine);

// -----------------------------------------------------
// ONE LINE SUMMARY
// -----------------------------------------------------
// Use '' or "" for simple text; use `` (backticks) when you
// need to insert variables or write text across multiple lines.
