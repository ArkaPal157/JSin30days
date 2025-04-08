//Install a third-party module (e.g., lodash) using npm.
//Import and use a function from this module in a script.

import _ from 'lodash';

const numbers = [10, 20, 30, 40, 50];

const shuffled = _.shuffle(numbers);

console.log("Original:", numbers);
console.log("Shuffled:", shuffled);
