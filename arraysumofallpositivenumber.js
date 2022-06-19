// write a program sum of all positive number in an array
// input: [1,2,3,4,5]
// output: 15
function sumOfAllPositiveNumber(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
const input = [ 1, -5, 2, 10, -30, 29, 50]

console.log(sumOfAllPositiveNumber(input));