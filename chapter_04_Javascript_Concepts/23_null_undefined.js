// =====================================================
// 23_null_undefined.js
// Difference between null and undefined in JavaScript
// =====================================================

// -----------------------------------------------------
// 1. UNDEFINED
// -----------------------------------------------------
// - `undefined` means a variable has been declared but not assigned a value.
// - It is the default value of uninitialized variables.
// - Functions return `undefined` if no return statement is provided.
// - Accessing a non-existent object property returns `undefined`.

let userName;
console.log("Uninitialized variable:", userName);          // undefined

function greet() {
    console.log("Hello!");
}
console.log("Function with no return:", greet());          // undefined

let person = { name: "Alice" };
console.log("Missing property:", person.age);                // undefined

// -----------------------------------------------------
// 2. NULL
// -----------------------------------------------------
// - `null` represents the intentional absence of any object value.
// - It must be assigned explicitly by the programmer.
// - It is often used to indicate "no value" or "empty" on purpose.

let emptyBox = null;
console.log("Explicitly empty:", emptyBox);                  // null

let profile = { email: "test@example.com", phone: null };
console.log("Phone not provided:", profile.phone);           // null

// -----------------------------------------------------
// 3. TYPEOF CHECK
// -----------------------------------------------------
// typeof undefined  -> "undefined"
// typeof null       -> "object"  (this is a known JS bug/historical quirk)

console.log("typeof undefined:", typeof undefined);          // "undefined"
console.log("typeof null:", typeof null);                    // "object"

// -----------------------------------------------------
// 4. COMPARISON
// -----------------------------------------------------
// ==  (loose equality)  -> true   (they are loosely equal)
// === (strict equality) -> false  (different types)

console.log("null == undefined:", null == undefined);        // true
console.log("null === undefined:", null === undefined);      // false

// -----------------------------------------------------
// 5. PRACTICAL EXAMPLE
// -----------------------------------------------------

let score;            // declared but not set -> undefined
let bonus = null;     // explicitly no bonus -> null

if (score === undefined) {
    console.log("Score has not been initialized yet.");
}

if (bonus === null) {
    console.log("Bonus is explicitly set to nothing.");
}
