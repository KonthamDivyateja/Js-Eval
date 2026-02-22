function createBankAccount(initialBalance=0){
    let balance=initialBalance;
    let transactions=[];
    function deposit(amount){
        if(amount <=0){
            return "Deposit amount must be positive";
        }
        balance +=amount;
        transactions.push({type:"deposit",amount});
        return `Deposited ${amount}`;
    }
    function withdraw(amount){
        if(amount <=0){
            return "Withdrawal amount must be positive";
        }
        if(amount > balance){
            return `Withdrawn ${amount}`;
        }
        function getBalance(){
            return balance;
        }
        function getTransactionHistory(){
            return transactions.slice();
        }
        return{
            deposit,
            withdraw,
            getBalance,
            getTransactionHistory
        }
    };
    const account=createBankAccount(100);
    account.deposit(50);
    account.withdraw(30);
}