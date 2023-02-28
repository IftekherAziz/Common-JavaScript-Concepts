function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

function displayResult(result) {
  console.log("The result is: " + result);
}

add(2, 3, displayResult); // Output: "The result is: 5"
