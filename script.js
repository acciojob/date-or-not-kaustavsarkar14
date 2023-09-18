var isDate = function (input) {
  
	//   write your code here
	if (input instanceof Date) {
    return !isNaN(input);
  }

  // If input is a string, try parsing it as a date
  if (typeof input === "string") {       
    const parsedDate = new Date(input);
    return !isNaN(parsedDate);
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
