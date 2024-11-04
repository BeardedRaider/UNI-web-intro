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

// Function to display random number 1-100
document.addEventListener('DOMContentLoaded', function() {//this is the event listener for the random number tis ensures EL is looaded after the dom is loaded
  document.getElementById('generateButton').addEventListener('click', function() {
    const randomNumber = (Math.random() * 100).toFixed(2);//this is the formula for generating the random number
    document.getElementById('randomNumberDisplay').innerText = `Random Number: ${randomNumber}`;
  });

  // Event listener for generating a random number between 1 and 10
  let lastRandomNumber1to10 = null;
  document.getElementById('generateButton1to10').addEventListener('click', function() {
    let randomNumber;
    do {
      randomNumber = (Math.random() * 10 ).toFixed(0);
    } while (randomNumber === lastRandomNumber1to10);
    lastRandomNumber1to10 = randomNumber;
    document.getElementById('randomNumberDisplay1to10').innerText = `Random Number: ${randomNumber}`;
  });

  // Event listener for activating a timed alert with countdown
  document.getElementById('timedAlertButton').addEventListener('click', function() {//this is the event listener for the timed alert
    let countdown = 3;//this is the countdown for the timed
    const countdownDisplay = document.getElementById('countdownDisplay');//this is the countdown display
    countdownDisplay.innerText = `Alert in ${countdown} `;//this is the countdown display

    const interval = setInterval(function() {//this is the interval for the countdown
      countdown -= 1;//this is the countdown
      countdownDisplay.innerText = `Alert in ${countdown} `;//this is the countdown display
      if (countdown <= 0) {//this is the if statement for the countdown
        clearInterval(interval);//this is the clear interval
        alert('Timed alert activated');//this is the alert for the timed alert
        countdownDisplay.innerText = '';//this is the countdown display
      }
    }, 1000); // Update every second
  });

  
  // Event listener for adding an expense
  const expenseForm = document.getElementById('expenseForm');
  const dailyBudgetInput = document.getElementById('dailyBudget');
  const expenseAmountInput = document.getElementById('expenseAmount');
  const expenseCategoryInput = document.getElementById('expenseCategory');
  const expenseList = document.getElementById('expenseList');
  const totalExpensesDisplay = document.getElementById('totalExpenses');
  const remainingBudgetDisplay = document.getElementById('remainingBudget');
  let totalExpenses = 0;
  let dailyBudget = 0;
  

  document.getElementById('setBudgetButton').addEventListener('click', function() {
    dailyBudget = parseFloat(dailyBudgetInput.value);

    if (isNaN(dailyBudget) || dailyBudget <= 0) {
      alert('Please enter a valid daily budget.');
      return;
    }

    remainingBudgetDisplay.innerText = dailyBudget.toFixed(2);
    updateRemainingBudgetColor(dailyBudget);
  });

  document.getElementById('addExpenseButton').addEventListener('click', function() {
    const amount = parseFloat(expenseAmountInput.value);
    const category = expenseCategoryInput.value;

    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid expense amount.');
      return;
    }

    // Add expense to the list
    const listItem = document.createElement('li');
    listItem.textContent = `${category}: $${amount.toFixed(2)}`;
    expenseList.appendChild(listItem);

    // Update total expenses
    totalExpenses += amount;
    totalExpensesDisplay.innerText = totalExpenses.toFixed(2);

    // Calculate remaining budget and update display
    const remainingBudget = dailyBudget - totalExpenses;
    remainingBudgetDisplay.innerText = remainingBudget.toFixed(2);
    updateRemainingBudgetColor(remainingBudget);

    // Notify user if they have spent their daily budget
    if (remainingBudget <= 0) {
      alert('You have spent your daily budget.');
    }

    // Clear input fields
    expenseAmountInput.value = '';
    expenseCategoryInput.value = 'Food';
  });

  // Event listener for clearing expenses
  document.getElementById('clearExpensesButton').addEventListener('click', function() {
    totalExpenses = 0;
    totalExpensesDisplay.innerText = totalExpenses.toFixed(2);
    remainingBudgetDisplay.innerText = dailyBudget.toFixed(2);
    updateRemainingBudgetColor(dailyBudget);//#this is the update remaining budget color
    expenseList.innerHTML = '';//this is the inner html for the expense list
  });

  function updateRemainingBudgetColor(remainingBudget) {
    const percentageLeft = (remainingBudget / dailyBudget) * 100;
    if (percentageLeft > 50) {
      remainingBudgetDisplay.style.color = 'green';
    } else if (percentageLeft > 25) {
      remainingBudgetDisplay.style.color = 'orange';
    } else {
      remainingBudgetDisplay.style.color = 'red';
    }
  }

// Event listener for adding a city
const cityForm = document.getElementById('cityForm');
const cityNameInput = document.getElementById('cityName');
const cityPopulationInput = document.getElementById('cityPopulation');
const cityAgeInput = document.getElementById('cityAge');
const cityList = document.getElementById('cityList');
const highestPopulatedCityDisplay = document.getElementById('highestPopulatedCity');
let cities = [];

document.getElementById('addCityButton').addEventListener('click', function() {
  const cityName = cityNameInput.value;
  const cityPopulation = parseInt(cityPopulationInput.value);
  const cityAge = parseInt(cityAgeInput.value);

  if (!cityName || isNaN(cityPopulation) || cityPopulation <= 0 || isNaN(cityAge) || cityAge <= 0) {
    alert('Please enter valid city details.');
    return;
  }

  // Add city to the array
  cities.push({ cityName, population: cityPopulation, age: cityAge });

  // Add city to the list
  const listItem = document.createElement('li');
  listItem.textContent = `${cityName} - Population: ${cityPopulation}, Age: ${cityAge}`;
  cityList.appendChild(listItem);

  // Clear input fields
  cityNameInput.value = '';
  cityPopulationInput.value = '';
  cityAgeInput.value = '';

  // Limit to 4 cities
  if (cities.length >= 4) {
    document.getElementById('addCityButton').disabled = true;
  }
});

  document.getElementById('findCityButton').addEventListener('click', function() {
    if (cities.length < 4) {
      alert('Please enter details for exactly 4 cities.');
      return;
    }

    // Find the highest populated city with age less than 100 years
    let highestPopulatedCity = null;
    cities.forEach(city => {
      if (city.age < 100 && (!highestPopulatedCity || city.population > highestPopulatedCity.population)) {
        highestPopulatedCity = city;
      }
    });

    if (highestPopulatedCity) {
      highestPopulatedCityDisplay.innerText = `${highestPopulatedCity.cityName} - Population: ${highestPopulatedCity.population}, Age: ${highestPopulatedCity.age}`;
    } else {
      highestPopulatedCityDisplay.innerText = 'No city with age less than 100 years found.';
    }
  });
});






