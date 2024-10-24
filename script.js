// Display a greeting when the page loads
function displayGreeting() {
  //this is the function that displays the greeting
  document.getElementById("greeting").innerHTML =
    "Hello, Welcome to JavaScript!"; //this is the id of the greeting
    document.getElementById("greeting2").innerHTML =
    "Income Calculator"; //this is the id of the greeting//this is the id of the greeting  
    document.getElementById("greeting3").innerHTML =
    "BMI Calculator"; //this is the id of the greeting//this is the id of the greeting
}

// Toggle the visibility of the contact card
function toggleCard() {
  //this is the function that toggles the card
  var card = document.getElementById("contact-card2"); //this is the id of the card
  if (card.style.display === "none") {
    //this is the style of the card
    card.style.display = "block";
  } else {
    //this is the else statement
    card.style.display = "none"; //this is the style of the card
  }
}

// Example 1: Show welcome message with user's name
function showWelcomeMessage() {
  var name = document.getElementById("nameInput").value;
  if (name) {
    document.getElementById("displayMessage").innerHTML =
      "Welcome, " + name + "!";
  } else {
    document.getElementById("displayMessage").innerHTML =
      "Please enter your name!";
  }
}

// Example 2: Simple math operation (5 + 3)
function showSum() {
  var sum = 5 + 3;
  document.getElementById("sumResult").innerHTML =
    "The result of 5 + 3 is: " + sum;
}

// Example 3: Change the background color of the box based on user selection
function changeColor() {
  var selectedColor = document.getElementById('colorSelect').value;
  document.getElementById('colorBox').style.backgroundColor = selectedColor;
}

// Example 3: Change the background color of the box based on user selection
function changeColor2(color) {
  document.getElementById('colorBox2').style.backgroundColor = color;
}

// Function to calculate the net salary and categorize the income
function calculateNetSalary() {
  var salary = parseFloat(document.getElementById('salaryInput').value);
  var tax = parseFloat(document.getElementById('taxInput').value);
  var salaryResult = document.getElementById('salaryResult');
  var incomeCategory = document.getElementById('incomeCategory');

  // Clear previous results and error messages
  salaryResult.innerHTML = '';
  incomeCategory.innerHTML = '';

  // Validate inputs
  if (isNaN(salary) || isNaN(tax) || salary < 0 || tax < 0 || tax > 100) {
    alert('Please enter a valid numbers only, for salary and tax (tax should be between 0 and 100).');
    return; // Exit the function
  }

  // Calculate net salary
  var netSalary = salary - (salary * (tax / 100));//this is the formula for calculating the net salary

  // Determine income category
  var category = '';
  if (netSalary > 60000) {//this is the if statement for the income category
    category = 'High Income';
  } else if (netSalary >= 30000 && netSalary <= 60000) {
    category = 'Medium Income';
  } else {
    category = 'Low Income';
  }

  // Display the results
  salaryResult.innerHTML = 'Net Salary: $' + netSalary.toFixed(2);
  incomeCategory.innerHTML = 'Income Category: ' + category;
}

// Function to calculate BMI
function calculateBMI() {
  var heightCm = parseFloat(document.getElementById('heightInput').value);
  var weightKg = parseFloat(document.getElementById('weightInput').value);
  var bmiResult = document.getElementById('bmiResult');
  var bmiCategory = document.getElementById('bmiCategory');
  var bmiErrorMessage = document.getElementById('bmiErrorMessage');

  // Clear previous results and errors
  bmiResult.innerHTML = '';
  bmiCategory.innerHTML = '';
  bmiErrorMessage.innerHTML = '';

  // Validate inputs
  if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
    bmiErrorMessage.innerHTML = 'Please enter valid positive numbers for both height and weight.';
    return;
  }

  // Convert height to meters
  var heightM = heightCm / 100;

  // Calculate BMI
  var bmi = weightKg / (heightM * heightM);

  // Round BMI to 2 decimal places
  var roundedBMI = bmi.toFixed(2);

  // Determine BMI category
  var category = '';
  var color = '';

  if (roundedBMI < 18.5) {
    category = 'Underweight';
    color = 'Lightblue';
  } else if (roundedBMI >= 18.5 && roundedBMI <= 24.9) {
    category = 'Healthy Weight';
    color = 'LightGreen';
  } else if (roundedBMI >= 25 && roundedBMI <= 29.9) {
    category = 'Overweight';
    color = 'orange';
  } else {
    category = 'Obese';
    color = 'red';
  }

  // Display the category with the appropriate color
var bmiCategoryElement = document.getElementById('bmiCategory');
bmiCategoryElement.textContent = category;
bmiCategoryElement.style.color = color;

  // Display the results
  bmiResult.innerHTML = 'Your BMI: ' + roundedBMI;
  bmiCategory.innerHTML = 'Category: ' + category;
}