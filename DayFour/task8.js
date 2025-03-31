// Task 8: Print the alphabet pattern using nested loops
let charCode = 65; // ASCII value of 'A'
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(charCode) + " ";
        charCode++;
    }
    console.log(row);
}