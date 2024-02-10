// Function to determine if a year is a leap year
function isLeapYear(year) {
    if (year % 4 !== 0) {
      return false;
    } else if (year % 100 !== 0) {
      return true;
    } else if (year % 400 !== 0) {
      return false;
    } else {
      return true;
    }
  }
  
  // Exporting the function for individual import
  export { isLeapYear };
  
  // Exporting as a default object for importing the module as a whole
  export default {
    isLeapYear
  };