let results = ["pass", "fail", "pass", "pass", "fail", "error"];
results.indexOf("fail"); // 1
results.indexOf("fail", 2); // 4
results.indexOf("error"); // 5
results.indexOf("error", 6); // -1
results.indexOf("pass"); // 0
results.indexOf("pass"); // 2
results.lastIndexOf("pass"); // 2   
results.lastIndexOf("fail"); // 4
results.includes("pass"); // true
results.includes("error"); // true
