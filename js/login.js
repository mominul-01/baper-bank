document.getElementById('btn-login').addEventListener('click', function () {
    
    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;
   
    const passwordFild = document.getElementById('user-password');
    const password = passwordFild.value;

    if (email === 'baperbank@gmail.com' && password === 'bank.com') {
      window.location.href='bank-dashbord.html'
    }
    else {
        alert("Enter your right passwordddd...");
    }

})