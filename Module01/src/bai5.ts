class BankAccount {
    private balance: number;

    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited: $${amount}`);
    }

    public withdraw(amount: number): void {
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

    public getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(100); // Start with $100

account.deposit(50);       
account.withdraw(30);      
account.withdraw(150);     
console.log("Balance:", account.getBalance());
