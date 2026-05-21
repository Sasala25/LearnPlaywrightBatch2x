console.log(null >= 0); // Output: true
console.log(null === 0); // Output: false

//?? Nullish
let amul = null;
let milk_reuired = amul ?? "nandani mil?";
console.log(milk_reuired); // Output: "nandani mil?"

let amul1 = "amul";
let milk_reuired1 = amul1 ?? "nandani mil?";
console.log(milk_reuired1); // Output: "amul"