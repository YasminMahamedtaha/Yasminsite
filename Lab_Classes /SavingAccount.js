class SavingsAccount extends Account{
    constructor(number,balance,interest){
        super(number,balance);
        this.interest=interest;
    }
    getInterest(){
        return this._interest;
    }
    setInterest(Interest){
        this._interest=interest;
    }
    addInterst(Interest){
        return balance*=_interest/100;
    }
 }
 class CheckingAccount extends Account{
     constructor(number, balance, overdraftLimit){
         super(number,balance);
         this.overdraftLimit=overdraftLimit;
     }

     getOverdraftLimit(){
         return this._overdraftLimit;
     }
     setOverdraftLimit(overdraftLimit){
        this._overdraftLimit=overdraftLimit;
     }
 }

 class Bank{
     constructor(){

     }
     addAccount(){

     }
     add
 }