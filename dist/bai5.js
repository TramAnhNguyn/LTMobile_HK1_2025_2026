"use strict";
class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited: $${amount}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdraw amount must be positive.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds.");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew: $${amount}`);
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(100); // Start with $100
account.deposit(50);
account.withdraw(30);
account.withdraw(150);
console.log("Balance:", account.getBalance());
