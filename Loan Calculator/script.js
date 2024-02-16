document.getElementById('btn').addEventListener('click',calculateLoan);


function calculateLoan(){
    const loanAmount = parseFloat(document.getElementById("loan-input").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value);
    const loanTerm = parseFloat(document.getElementById("loan-term").value);

    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
        alert("Please enter valid data for all fields");
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest)/(1-Math.pow(1+monthlyInterest,-totalPayments));
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    displayResult(monthlyPayment,totalInterest);
}

function displayResult(monthlyPayment, totalInterest){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</p></strong>
        <p><strong>Monthly Interest: ${totalInterest.toFixed(2)}</p></strong>
    `;
}