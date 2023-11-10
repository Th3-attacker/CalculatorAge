/*** Java Script code here */
document.getElementById('calculateButton').addEventListener('click', function (event) {
    event.preventDefault();
    // Reset error spans
    document.getElementById('dayError').innerText = '';
    document.getElementById('monthError').innerText = '';
    document.getElementById('yearError').innerText = '';
    document.getElementById('errorSpan').innerText = '';

    // Get input values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Validation
    if (isNaN(day) || day < 1 || day > 31) {
      showError('dayError', 'Day must be a number between 1 and 31.');
      return;
    }

    if (isNaN(month) || month < 1 || month > 12) {
      showError('monthError', 'Month must be a number between 1 and 12.');
      return;
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    if (isNaN(year) || year > currentYear) {
      showError('yearError', 'Year must be a number in the past or present.');
      return;
    }

    const isValidDate = new Date(year, month - 1, day).getDate() === day;

    if (!isValidDate) {
      showError('dayError', 'Invalid date.');
      return;
    }

    // Perform age calculation and update result display
    calculateAge(day, month, year);
  });

  function calculateAge(birthDay, birthMonth, birthYear) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // January is 0
  const currentDay = currentDate.getDate();

  let years = currentYear - birthYear;
  let months = currentMonth - birthMonth;
  let days = currentDay - birthDay;

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months = 12 - Math.abs(months);
  }

  if (days < 0) {
    months--;
    const prevMonthDays = new Date(birthYear, birthMonth, 0).getDate();
    days = prevMonthDays - Math.abs(days);
  }

  // Display the result
  document.getElementById('years').innerText = years;
  document.getElementById('months').innerText = months;
  document.getElementById('days').innerText = days;
  }

  function showError(errorElementId, message) {
    document.getElementById(errorElementId).innerText = message;
  }