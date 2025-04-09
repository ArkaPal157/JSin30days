// Task 10:
// Create an instance of the Account class and test the deposit and withdraw methods,
// logging the balance after each operation.

class Account {
    #balance = 0;
  
    deposit(amount) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}, Balance: ${this.#balance}`);
    }
  
    withdraw(amount) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: ${amount}, Balance: ${this.#balance}`);
      } else {
        console.log("Insufficient balance");
      }
    }
  }
  
  const acc2 = new Account();
  acc2.deposit(200);
  acc2.withdraw(50);
  acc2.withdraw(300); // Will log insufficient balance
  