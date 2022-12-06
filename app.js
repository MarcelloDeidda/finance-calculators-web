// Setting up mortgage form
const mortgageForm = document.getElementById("mortgage-form");
const monthlyRepayment = document.getElementById("monthly-repayment");
const lengthRepayment = document.getElementById("length-repayment");
const amountBorrowed = document.getElementById("amount-borrowed");
const total = document.getElementById("total");

mortgageForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get data from user input
    let houseValue = e.target[0].value;
    let deposit = e.target[1].value;
    let interestRate = e.target[2].value / 12 / 100;
    let years = e.target[3].value;
    let loan = houseValue - deposit
    let months = years * 12

    // Calculate monthly payment
    let monthlyRepaymentValue = (interestRate * loan) / (1 - Math.pow(1 + interestRate, (months * -1)));

    // Render results
    monthlyRepayment.innerText = `£${(monthlyRepaymentValue).toFixed(2)}`;
    amountBorrowed.innerText = `£${(loan).toFixed(2)}`;
    lengthRepayment.innerText = `${years} yrs`;
    total.innerText = `£${(monthlyRepaymentValue * months).toFixed(2)}`
});

// Setting up interest form
const investmentForm = document.getElementById("investment-form");
const initialInvestment = document.getElementById("initial-investment");
const finalAmount = document.getElementById("final-amount");
const profit = document.getElementById("profit");
const lengthInvestment = document.getElementById("length-investment");
const interestType = document.getElementById("interest-type");

investmentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get data from user input
    let simple = e.target[0].checked;
    let compound = e.target[1].checked;
    let deposit = parseFloat(e.target[2].value);
    let interestRate = e.target[3].value / 100;
    let years = e.target[4].value;
    let investmentReturn = 0

    // Calculate simple or compound interest
    if (simple) {
        investmentReturn = deposit * (1 + interestRate * years);
        interestType.innerText = "simple"
    } else if (compound) {
        investmentReturn = deposit * Math.pow((1 + interestRate), years);
        interestType.innerText = "compound"
    }

    // Render results
    initialInvestment.innerText = `£${deposit.toFixed(2)}`
    finalAmount.innerText = `£${investmentReturn.toFixed(2)}`;
    profit.innerText = `£${(investmentReturn - deposit).toFixed(2)}`;
    lengthInvestment.innerText = `${years} yrs`;
});