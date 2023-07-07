//Exercise 1: Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age.
const obj = { name: "John", age: 30, city: "New York" };
const arr = [10, 20, 30, 40];

function destructureExample(obj, arr) {
  const { name, age } = obj;
  const [index0, index1] = arr;
  return { name, age, index0, index1 };
}

const result = destructureExample(obj, arr);
console.log(result);

//Exercise 2: Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.
function sumNumbers(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5));

//Exercise 3: Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website."
function createGreeting(name) {
  return `Hello, ${name}! Welcome to our website.`;
}

console.log(createGreeting("Alice"));
