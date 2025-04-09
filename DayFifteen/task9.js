// Task 9:
// Define a class Account with private fields for balance
// and a method to deposit and withdraw money.
// Ensure that the balance can only be updated through these methods.

class Account {
    #balance = 0;
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
      } else {
        console.log("Insufficient balance");
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const acc1 = new Account();
  acc1.deposit(100);
  acc1.withdraw(30);
  console.log("Balance:", acc1.getBalance());
  