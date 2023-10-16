/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
 import { maxBy } from "./exercises/e17";
 
 export function getGreatestDiscoveryYear(data) {
  const asteroids = data.asteroids;
  const discoveryYearFreq = [];
  asteroids.map(asteroid => {
    let year = discoveryYearFreq.find(foundYear => foundYear.discoveryYear === asteroid.discoveryYear);
    if(year){
      year.count = year.count+1;
    }else{
      let yearObject = {
        discoveryYear: asteroid.discoveryYear,
        count: 1
      }
      discoveryYearFreq.push(yearObject);
    }
  });
  const greatestDiscoveryYear = maxBy(discoveryYearFreq, (discoveryYear) => discoveryYear.count);
  return greatestDiscoveryYear.discoveryYear; 
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
