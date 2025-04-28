// Top-level constants for DOM elements
const salary = document.querySelector('#income');
const startDate = document.querySelector('#startDate');
const endDate = document.querySelector('#endDate');
const calculateBtn = document.querySelector('#calculate');
const cleanBtn = document.querySelector('#clean');
const finalResultElement = document.querySelector('#finalResult');

// Event listener for calculate button
calculateBtn.addEventListener('click', calculateAmount);

// Event listener for clean button
cleanBtn.addEventListener('click', clearFields);

// Function to calculate the aliquot salary
function calculateAmount(e) {
    e.preventDefault();

    // Using parseFloat to ensure we get a number
    // Getting access to the information from input fields
    const incomeNumber = parseFloat(salary.value);
    const startDateValue = startDate.value;
    const endDateValue = endDate.value;

    // Extract the years from the start and end dates
    const startYear = new Date(startDateValue).getFullYear();
    const endYear = new Date(endDateValue).getFullYear();

    // Check if the start and end dates are within the same year
    if (startYear !== endYear) {
        Swal.fire({
            icon: "error",
            title: "Fehler!",
            text: "Die Beschäftigung soll innerhalb eines Kalenderjahres sein!",
        });
        return;
    }

    // Calculate days worked
    const daysWorked = calculateDays(startDateValue, endDateValue);
    const aliquotSalary = (incomeNumber / 365) * daysWorked;

    // Display the result
    finalResultElement.innerText = aliquotSalary.toFixed(2);
    finalResultElement.classList.add('final');
}

// Helper function to calculate the number of days between two dates
function calculateDays(startDate, endDate) {
    const start = new Date(startDate); 
    const end = new Date(endDate); 
    const timeDifference = end - start; 
    const daysDifference = timeDifference / (1000 * 3600 * 24); 
    return daysDifference + 1; 
}
// Function to clear the input fields and result
function clearFields() {
    salary.value = '';
    startDate.value = '';
    endDate.value = '';
    finalResultElement.innerText = '';
    finalResultElement.classList.remove('final');
}

