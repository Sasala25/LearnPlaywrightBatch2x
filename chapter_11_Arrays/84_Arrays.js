let scores = new Array(3);
scores.push("Apple");
scores.push(10);
scores.push(true);
let scores2 = new Array(1, 2, 3, 4, 5);
console.log(scores);
console.log(scores2);


let test = Array.of(1, 2, 3, 4, 5);
console.log(test);

let test2 = Array.from("Hello");
console.log(test2);
let test3 = Array.from([1, 2, 3], x => x * 2);
console.log(test3);