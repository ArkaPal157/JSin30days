// Task 6: Capture Email Address Components
// Write a regular expression to capture the username and domain from an email address.
// Log the captures.

function captureEmailComponents(email) {
  // Creates a regular expression with capturing groups for username and domain
  const regex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  // Usses match() to capture the components
  const matches = email.match(regex);
  if (matches) {
    const [_, username, domain] = matches;
    console.log("Username:", username);
    console.log("Domain:", domain);
  } else {
    console.log("Invalid email format.");
  }
}

// Example usage
captureEmailComponents("user@example.com");

