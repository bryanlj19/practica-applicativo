import { data } from "../data/data";

// SPACE DATA SAMPLE EXERCISE 0
// Return the name of the first Planet in the array
// Return example: 'Planet Name'

export function getFirstPlanetName(data) {
  if (!data || !Array.isArray(data.planets) || data.planets.length === 0) {
    return 'Data is not in expected format or has no planets';
  }

  const firstPlanet = data.planets[0];

  if (!firstPlanet.hasOwnProperty('name')) {
    return 'First planet does not have a name key';
  }

  return firstPlanet.name;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-0"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
