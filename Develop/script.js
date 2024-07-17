// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees= []; // const used to input employee data as an array of objects
  let doneAddingEmployees = false; // Flag to track when all employees have been added
  while (doneAddingEmployees === false) {
    const employeeName = prompt('Enter the name of an employee (or "done" to finish):'); // Prompt user for employee name and check if they want to finish adding employees
    if (employeeName.toLowerCase() === 'done') { 
      doneAddingEmployees = true; //If user enters "done", break the loop and stop adding employees and et the flag to true to break the loop
      break; // Break the loop
    }// Collect employee data
    const collectEmployees = function() { // Function to collect employee data
      // ...
    
      const employeeFirstName = prompt('Enter the first name of the employee:'); // Prompt user for employee first name
      const employeeLastName = prompt('Enter the last name of the employee:'); // Prompt user for employee last name
    
      const employeeSalary = prompt('Enter the salary of the employee:'); // Prompt user for employee salary as a string
      const salaryNumber = +prompt(employeeSalary); // Convert the employee salary as a string to a number using the unary plus operator
    
      // ...
    
      employees.push({ // Save the employee data in an employee object
        firstName: employeeFirstName, // Save the employee first name in the employee object
        lastName: employeeLastName,
        salary: salaryNumber, // Store the employee salary as a number
      });
    
      // ...
    }
    const employeeSalary = +prompt('Enter the salary of the employee:'); // Prompt user for employee salary and convert it to a number using the unary plus operator

    employees.push({
      firstName: employeeName.split(' ')[0], // Split the employee name into first name and last name and save them in the employee object
      lastName: employeeName.split(' ')[1],  // Save the last name in the employee object
      salary: employeeSalary, // Store the employee object in the employees array
    })};
    return employees; // Return the array of employee objects
 

  
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {  // Display the average salary
  // TODO: Calculate and display the average salary
  let totalSalary = 0; // Initialize total salary to 0
  for (let i = 0; i < employeesArray.length; i++) { // Loop through each employee in the employeesArray
    totalSalary += employeesArray[i].salary; // Added the salary of each employee to the total salary
  }
  const averageSalary = totalSalary / employeesArray.length; // Calculate the average salary by dividing the total salary by the number of employees
  console.log(`Average salary: $${averageSalary.toFixed(2)}`); // Display the average salary with two decimal places
 
}

// Select a random employee
const getRandomEmployee = function(employeesArray) { 
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length); // Generate a random index between 0 and the length of the employeesArray - 1
  const randomEmployee = employeesArray[randomIndex]; // Select the employee at the random index
  console.log(`Random employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`); // Display the random employee's name
  console.log('==============================');
  return randomEmployee; // Return the random employee object
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
