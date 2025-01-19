function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // result1 is 8
const result2 = subtract(10, 4); // result2 is 6

console.log(result1, result2); // Output: 8 6

//Uncommon error: using a variable before declaration
console.log(result3); // Uncommon error: result3 is not defined
let result3 = add(3, 5)