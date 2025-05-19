/*
Task 5: Managing Large Arrays
- Create a large array with 1,000,000 objects.
- Modify your code to slice only needed portions when working with it.
- Compare performance and memory usage before and after optimization.
*/

const largeData = Array.from({ length: 1_000_000 }, (_, i) => ({ id: i }));

// Inefficient: process all data
// largeData.forEach(item => process(item));

// Optimized: process only first 100 items
const smallSlice = largeData.slice(0, 100);
smallSlice.forEach(item => console.log(item.id));
