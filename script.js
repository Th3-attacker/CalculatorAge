function calculateAge() {
    const birthDay = parseInt(document.getElementById('day').value);
    const birthMonth = parseInt(document.getElementById('month').value);
    const birthYear = parseInt(document.getElementById('year').value);

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

    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;


   
}