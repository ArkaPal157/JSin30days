function divide(a, b) {
    if (b !== 0) {
        let result = a / b;
        console.log("Division Result:", result);
    } else {
        console.log("Division by zero is not allowed.");
    }
}

divide(6, 3);