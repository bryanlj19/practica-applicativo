/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

 export function minBy(array, cb) {
  if(!array[0]){
    return undefined;
  }
  let minimum = array[0];
  for (let element of array) {
    if (cb(element) < cb(minimum)) {
      minimum = element;
    }
  }
  return minimum;
}

export function maxBy(array, cb) {
  if(!array[0]){
    return undefined;
  }
  let maximum = array[0];
  for (let element of array) {
    if (cb(element) > cb(maximum)) {
      maximum = element;
    }
  }
  return maximum;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function