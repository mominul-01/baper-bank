
document.getElementById('btn-deposit').addEventListener('click', function () {
    
    //deposit amount filed 
    const depositInputFiled = document.getElementById('deposit-input-filed');
    const newDepsositAmountString = depositInputFiled.value;
    const newDepositAmount = parseFloat(newDepsositAmountString);

    
    depositInputFiled.value = '';

    //check the input field 
    if (isNaN(newDepositAmount)) {
        alert("Enter the  number value")
        return;
    }
    //current deposti amount 
    const carrentDepositAmountFiled = document.getElementById('deposit-amount');
    const carrentDepositAmountString = carrentDepositAmountFiled.innerText;
    const carrentDepositAmount = parseFloat(carrentDepositAmountString);

    // sum of the amount 
    const sumDepositAmount = newDepositAmount + carrentDepositAmount;
    
    // set currrent deposit amount 
    carrentDepositAmountFiled.innerText = sumDepositAmount;

    //get the balance amount
    const preBanlanceFiled = document.getElementById('balance-amount');
    const preBanlanceString = preBanlanceFiled.innerText;
    const preBanlace = parseFloat(preBanlanceString);

    const newBalance = preBanlace + sumDepositAmount;

    preBanlanceFiled.innerText = newBalance;



})

document.getElementById('btn-withdraw').addEventListener('click', function () {
    
    //get the withdraw input filed
    const withdrawInputFiled = document.getElementById('withdraw-input-filed');
    const withdrawAmountString = withdrawInputFiled.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    // clear the  input 
    withdrawInputFiled.value = '';
    //check the input is valid or not 
    if (isNaN(withdrawAmount)) {
        alert('Enter a valid number ');
        return;
    }


    //get withdraw filed
    const preWithdrawAmountFiled = document.getElementById('withdraw-amount');
    const preWithdrawAmountString = preWithdrawAmountFiled.innerText;
    const preWithdraw = parseFloat(preWithdrawAmountString);

    // calculate the withdraw value
    const newWithdraw = withdrawAmount + preWithdraw;
    
   
    // get the balance filed
    const preBanlanceFiled = document.getElementById('balance-amount');
    const preBanlanceString = preBanlanceFiled.innerText;
    const preBanlace = parseFloat(preBanlanceString);

    if (withdrawAmount > preBanlace) {
        console.log('not working')
        alert('Bap er Bank a ato tk nai');
        return;
    }

    // set the withdraw filed new amount
    preWithdrawAmountFiled.innerText = newWithdraw;

    //set the new balance after withdraw
    newBalance = preBanlace - newWithdraw;

    preBanlanceFiled.innerText = newBalance;

   

})



