function remainder(a, b) {
    if (b !== 0) {
        let result = a % b;
        console.log("Remainder Result:", result);
    } else {
        console.log("Division by zero is not allowed.");
    }
}

remainder(7, 3);