window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.querySelector("#loan-amount").value = 250000.00;
  document.querySelector('#loan-years').value = 25;
  document.querySelector('#loan-rate').value = 5.99;
  const values = {principal: 250000.00, term: 25, rate: 5.99};
  const monthlyPymt = calculateMonthlyPayment(values);
  updateMonthly(monthlyPymt);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const principal = document.querySelector("#loan-amount").value;
  const term = document.querySelector('#loan-years').value;
  const rate = document.querySelector('#loan-rate').value;
  const values = {principal: principal, term: term, rate: rate};
  const monthlyPymt = calculateMonthlyPayment(values);
  updateMonthly(monthlyPymt);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const pymt = (values.principal * (values.rate/100/12))/(1-Math.pow(1+(values.rate/100/12),-(values.term*12)));
  return String(pymt.toFixed(2));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly;
}
