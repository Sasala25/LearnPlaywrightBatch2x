let firstname = "prrammod";
let lastname = `Hi ${firstname} Dutt`;
console.log(lastname); // Output: "Hi prrammod Dutt"

let env = "staging";
env = "prod";
const userId = 12345;
const apiUrl = `https://api.example.com/${env}/users/${userId}`;
console.log(apiUrl); // Output: "https://api.example.com/prod/users/12345"