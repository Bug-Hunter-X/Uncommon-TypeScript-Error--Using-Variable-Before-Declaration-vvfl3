function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // result1 is 8
const result2 = subtract(10, 4); // result2 is 6

let result3 = add(3, 5); // Declare result3 before using it
console.log(result1, result2, result3); // Output: 8 6 8