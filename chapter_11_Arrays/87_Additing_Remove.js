let arr = [1, 2, 3, 4, 5, 6];
arr.push(23, 22, 21);
console.log(arr);
arr.unshift(0, -1, -2);
console.log(arr);

arr.splice(3, 2);
console.log(arr);
arr.splice(3, 1, 100, 200, 300);
console.log(arr);