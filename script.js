// Run multiple functions on page load
window.onload = function() {
  displayGreeting();
  displayBooleanResults();
  displayComparisonResults();
};

// Display a greeting when the page loads
function displayGreeting() {
  document.getElementById("greeting").innerHTML = "Hello, Welcome to JavaScript!";
  document.getElementById("greeting2").innerHTML = "Income Calculator";
  document.getElementById("greeting3").innerHTML = "BMI Calculator";
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
// ------Expressions and Control Flow
// Display Boolean expressions results
function displayBooleanResults() {
  const booleanResults = document.getElementById("booleanResults");
  let results = `
    a: ${42 > 3}<br>
    b: ${91 < 4}<br>
    c: ${8 == 2}<br>
    d: ${4 < 17}
  `;
  booleanResults.innerHTML = results;
}

// Example of conditional statements
function checkNewYear() {
  let day_number = 330;  // Assume today's day number in a non-leap year
  let days_to_new_year = 366 - day_number;

  const newYearMessage = document.getElementById("newYearMessage");
  if (days_to_new_year < 30) {
    newYearMessage.innerHTML = "It's nearly New Year!";
  } else {
    newYearMessage.innerHTML = "It's a long time to go until New Year.";
  }
}

// Display comparison operators results
function displayComparisonResults() {
  const comparisonResults = document.getElementById("comparisonResults");
  let a = 7, b = 11;
  let results = `
    a > b: ${a > b}<br>
    a < b: ${a < b}<br>
    a >= b: ${a >= b}<br>
    a <= b: ${a <= b}
  `;
  comparisonResults.innerHTML = results;
}

// Example 1: Simple Function with Arguments
function displayItems(...items) {
  let result = items.join(", ");
  document.getElementById("itemsList").innerHTML = "Items: " + result;
}

// Example 2: Using an Object
function showUserInfo() {
  let user = {
    name: "Shane Cummings",
    location: "Glasgow",
    email: "your.email@example.com"
  };
  let info = `Name: ${user.name}, Location: ${user.location}, Email: ${user.email}`;
  document.getElementById("userInfo").innerHTML = info;
}

// Example 3: Array Manipulation
function displayFruits() {
  let fruits = ["Apple", "Banana", "Orange"];
  fruits.push("Grapes");
  let result = fruits.join(", ");
  document.getElementById("fruitsList").innerHTML = "Fruits: " + result;
}

// Different Example: Reverse a word
function reverseWord() {
  let word = document.getElementById("wordInput").value;
  let reversed = word.split("").reverse().join("");
  document.getElementById("reversedWord").innerHTML = "Reversed Word: " + reversed;
}

// Advanced Example: Array of Objects Manipulation
function filterUsersByLocation(location) {
  let users = [
    { name: "Alice", location: "Glasgow", age: 28 },
    { name: "Bob", location: "Edinburgh", age: 34 },
    { name: "Charlie", location: "Glasgow", age: 29 },
    { name: "Diana", location: "London", age: 24 }
  ];

  let filteredUsers = users
    .filter(user => user.location === location)
    .map(user => `${user.name} (Age: ${user.age})`)
    .join(", ");

  document.getElementById("filteredUsers").innerHTML = "Users in " + location + ": " + filteredUsers;
}


let persons = []; // Array to store person objects

// Function to add person to array and display results if 4 people are entered
function addPerson() {
  let name = document.getElementById("name").value;
  let grade = document.getElementById("grade").value.toUpperCase(); // Convert grade to uppercase for consistency

  // Validate inputs
  if (!name || !grade.match(/^[A-F]$/)) {
    alert("Please enter a valid name and grade (A-F).");
    return;
  }

  // Add new person to the array
  persons.push({ name: name, grade: grade });

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("grade").value = "";

    // Update the displayed list of all entered people
    displayAllPeople();

  // If we have 4 people, display the highest and lowest grades
  if (persons.length === 4) {
    // Convert letter grades to numeric equivalents for comparison
    const gradeToNumber = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6 };

    // Find the highest and lowest grades
    let highestPerson = persons.reduce((max, p) => (gradeToNumber[p.grade] < gradeToNumber[max.grade] ? p : max));
    let lowestPerson = persons.reduce((min, p) => (gradeToNumber[p.grade] > gradeToNumber[min.grade] ? p : min));

    // Display the results
    document.getElementById("highestGrade").innerHTML = `Highest Grade: ${highestPerson.name} with a grade of ${highestPerson.grade}`;
    document.getElementById("lowestGrade").innerHTML = `Lowest Grade: ${lowestPerson.name} with a grade of ${lowestPerson.grade}`;

    // Clear the array after displaying results
    persons = [];
  }
}

// Function to display all entered people
function displayAllPeople() {
  const allPeopleList = document.getElementById("allPeopleList");
  allPeopleList.innerHTML = ""; // Clear previous list

  persons.forEach(person => {
    let listItem = document.createElement("li");
    listItem.textContent = `${person.name}: Grade ${person.grade}`;
    allPeopleList.appendChild(listItem);
  });
}

// Function to clear results and reset the display
function clearResults() {
  persons = [];
  document.getElementById("highestGrade").innerHTML = "";
  document.getElementById("lowestGrade").innerHTML = "";
  document.getElementById("allPeopleList").innerHTML = "";
  alert("Results have been cleared.");
}


