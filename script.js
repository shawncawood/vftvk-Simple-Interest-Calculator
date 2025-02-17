function compute() {
  //declare and get all the values for the calculation
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = principal * years * rate / 100;
  var year = new Date().getFullYear() + parseInt(years);

  //Output the interest text  
  document.getElementById("result").innerHTML = "If you deposit  <span style=\"background-color: #FFFF00\">"  + principal + ", </span><br/>"  + 
  "at an interest rate of <span style=\"background-color: #FFFF00\">" + rate +" </span> <br/>" + 
  "You will receive an amount of <span style=\"background-color: #FFFF00\">" + interest + "</span>, <br/> " + 
  "in the year <span style=\"background-color: #FFFF00\">" + year + "</span>";


}

//update the slider value
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}

//validate Principle
function validateAmount() {
  var principal = document.getElementById("principal").value;
  var biggerThanZero = parseInt(principal) > 0;
  if (!biggerThanZero) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  }
}
