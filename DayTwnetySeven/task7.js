// Task 7 Question:
// Convert function calculateTax(amount, rate) into curried form: curriedTax(rate)(amount)
// Follow-up: Create a partially applied function for a fixed tax rate.
// Question: How does currying help in composing reusable and configurable logic?

function calculateTax(amount, rate) {
  return amount * rate;
}

const curriedTax = rate => amount => amount * rate;

const vat10 = curriedTax(0.1); // Partially applied
console.log(vat10(200)); // 20
