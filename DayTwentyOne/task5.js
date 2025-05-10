// Task 5: Capture US Phone Number Components
// Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890).
// Log the captures.

function capturePhoneNumberComponents(phoneNumber) {
  // Create a regular expression with capturing groups for area code, central office code, and line number
  const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
  // Use match() to capture the components
  const matches = phoneNumber.match(regex);
  if (matches) {
    const [_, areaCode, centralOfficeCode, lineNumber] = matches;
    console.log("Area Code:", areaCode);
    console.log("Central Office Code:", centralOfficeCode);
    console.log("Line Number:", lineNumber);
  } else {
    console.log("No match found.");
  }
}

// Example usage
capturePhoneNumberComponents("(123) 456-7890");
