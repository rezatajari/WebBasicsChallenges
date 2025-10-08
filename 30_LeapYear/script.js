function leapMsg(year) {
  return `${year} is a leap year.`;
}

function isNotLeapYear(year) {
  return `${year} is not a leap year.`;
}

function isLeapYear(year) {
  if (year % 400 === 0) {
    return leapMsg(year);
  } else if (year % 100 === 0) {
    return isNotLeapYear(year);
  } else if (year % 4 === 0) {
    return leapMsg(year);
  } else {
    return isNotLeapYear(year);
  }
}

let year = 2000;
let result = isLeapYear(year);
console.log(result); 
