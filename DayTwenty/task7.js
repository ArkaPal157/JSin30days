// Task 7: Find Longest Substring Without Repeating Characters
// Write a function to find the longest substring without repeating characters in a string.
// Log the length of the substring.

function longestUniqueSubstring(str) {
    let start = 0;
    let maxLength = 0;
    const seen = {};
  
    for (let end = 0; end < str.length; end++) {
      const char = str[end];
  
      if (seen[char] >= start) {
        start = seen[char] + 1; // Move start if character repeats
      }
  
      seen[char] = end; // Record last index of char
      maxLength = Math.max(maxLength, end - start + 1); // Update maxLength
    }
  
    return maxLength;
  }
  
  console.log("Longest Unique Substring Length:", longestUniqueSubstring("abcabcbb")); // Output: 3
  