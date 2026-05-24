let username = "Dev";
let password = "secure123";
let isAccountLocked = true;

if (username === "Dev" && password === "secure123" && isAccountLocked) {

    console.log("Welcome, Dev! Your account is locked.");
} else if (username === "Dev" && password === "secure123") {
    console.log("Welcome, Dev! Your account is active.");
}
