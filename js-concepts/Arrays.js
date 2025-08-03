// Arrays are objects in JavaScript, and they are used to store ordered collections of data. Arrays can hold elements of any type, including numbers, strings, objects, and even other arrays. They are dynamic in size, meaning you can add or remove elements as needed.

// 1. Creating an array using array literal syntax
// Javascript arrays can be multi-type values
//const fruits = ["Apple", "Banana", "Cherry", 26, 34.433, true];
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// 2. Accessing elements in an array
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[1]); // Output: "Banana"

// 3. Adding elements to an array
fruits.push("Date"); // Adds "Date" to the end of the array
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

// 4. Removing elements from an array
fruits.pop(); // Removes the last element ("Date")
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// 5. Iterating over an array
fruits.forEach((fruit) => {
    console.log(fruit); // Outputs each fruit in the array
});

// 6. Finding the length of an array
console.log(fruits.length); // Output: 3

// 7. Checking if a variable is an array
console.log(Array.isArray(fruits)); // Output: true

// 8. Creating an array using the Array constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// 9. Using the spread operator to create a new array
const moreFruits = [...fruits, "Elderberry", "Fig"];
console.log(moreFruits); // Output: ["Apple", "Banana", "Cherry", "Elderberry", "Fig"]

// 10. Slicing an array
const slicedFruits = fruits.slice(1, 3); // Gets elements from index 1 to 2 (not including index 3)
console.log(slicedFruits); // Output: ["Banana", "Cherry"]

// 11. Splicing an array
fruits.splice(1, 1, "Blueberry"); // Removes 1 element at index 1 and adds "Blueberry"
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// 12. Sorting an array
const sortedFruits = [...fruits].sort(); // Sorts the array alphabetically
console.log(sortedFruits); // Output: ["Apple", "Banana", "Cherry"]

// 13. Reversing an array
const reversedFruits = [...fruits].reverse(); // Reverses the order of the array
console.log(reversedFruits); // Output: ["Cherry", "Blueberry", "Apple"]

// 14. Finding an element in an array
const foundFruit = fruits.find((fruit) => fruit.startsWith("B"));
console.log(foundFruit); // Output: "Blueberry"

// 15. Filtering an array
const filteredFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(filteredFruits); // Output: ["Blueberry"]

// 16. Mapping an array
const uppercasedFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(uppercasedFruits); // Output: ["APPLE", "BLUEBERRY", "CHERRY"]

// 17. Reducing an array
const concatenatedFruits = fruits.reduce((acc, fruit) => acc + fruit + " ", "");
console.log(concatenatedFruits.trim()); // Output: "Apple Blueberry Cherry"

// 18. Checking if an array includes a value
console.log(fruits.includes("Banana")); // Output: false
console.log(fruits.includes("Cherry")); // Output: true

// 19. Joining elements of an array into a string
const joinedFruits = fruits.join(", ");
console.log(joinedFruits); // Output: "Apple, Blueberry, Cherry"

// 20. Creating a multidimensional array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6 (element at row 1, column 2)

// 21. Flattening a nested array
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.flat(2); // Flattens up to 2 levels deep
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// 22. Using the fill method to populate an array
const filledArray = new Array(5).fill("X");
console.log(filledArray); // Output: ["X", "X", "X", "X", "X"]

// 23. Using the Array.from method to create an array from an iterable
const iterable = "Hello";
const arrayFromIterable = Array.from(iterable);
console.log(arrayFromIterable); // Output: ["H", "e", "l", "l", "o"]

// 24. Using the Array.of method to create an array from a set of arguments
const arrayOfNumbers = Array.of(1, 2, 3, 4, 5);
console.log(arrayOfNumbers); // Output: [1, 2, 3, 4, 5]

// 25. Using the findIndex method to find the index of an element
const indexOfBlueberry = fruits.findIndex((fruit) => fruit === "Blueberry");
console.log(indexOfBlueberry); // Output: 1 (index of "Blueberry" in the fruits array)

// 26. Using the some method to check if any element meets a condition
const hasLongFruit = fruits.some((fruit) => fruit.length > 6);
console.log(hasLongFruit); // Output: true (because "Blueberry" is longer than 6 characters)

// 27. Using the every method to check if all elements meet a condition
const allFruitsAreShort = fruits.every((fruit) => fruit.length < 10);
console.log(allFruitsAreShort); // Output: true (all fruits are less than 10 characters long)

// 28. Using the indexOf method to find the index of an element
const indexOfApple = fruits.indexOf("Apple");
console.log(indexOfApple); // Output: 0 (index of "Apple" in the fruits array)

// 29. Using the lastIndexOf method to find the last occurrence of an element
const lastIndexOfCherry = fruits.lastIndexOf("Cherry");
console.log(lastIndexOfCherry); // Output: 2 (last index of "Cherry" in the fruits array)

// 30. Using the copyWithin method to copy part of an array to another location in the same array
const copiedFruits = fruits.copyWithin(1, 0, 2); // Copies elements from index 0 to 1 and places them starting at index 1
console.log(copiedFruits); // Output: ["Apple", "Apple", "Blueberry"]

// 31. Using the fill method to fill an array with a static value
const filledArrayWithZeros = new Array(5).fill(0);
console.log(filledArrayWithZeros); // Output: [0, 0, 0, 0, 0]