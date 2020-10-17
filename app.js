// Listen for submit
document.getElementById('loan-form').addEventListener('submit',function(e){
    // Hide resaults
    document.getElementById('resaults').style.display = 'none' ;
    // Hide loader
    document.getElementById('loading').style.display = 'none' ;

    setTimeout(CalculateResaults, 2000);


    e.preventDefault();
});

// Create calculate function
function CalculateResaults(e){
    console.log('Calculating ..');
    // UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12 ;
    const calculatedPayments = parseFloat(years.value)*12 ;

    // Compute monthly payment
    const x = math.pow(1 + calculatedInterest + calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
        // Show resaults
        document.getElementById('resaults').style.display = 'block' ;
        // Hide loader
        document.getElementById('loading').style.display = 'none' ;

    } else {
        showError('Plaese chck your numbers');
}
}

// function showError
function showError(error){
    // Hide resaults
    document.getElementById('resaults').style.display = 'none' ;
    // Hide loader
    document.getElementById('loading').style.display = 'none' ;
    // create element
    const errorDiv = document.createElement('div');

    // get elements

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add class name
    errorDiv.className = 'alert alert-danger';
    // creaate text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error
    setTimeout(clearError , 3000);
}

// Clear error function
function clearError(){
    document.querySelector('.alert').remove;
}