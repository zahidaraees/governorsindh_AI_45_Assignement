"use strict";
//Q3.Quiz of Name Cases
let vpersonName = "zahida raees"; // assign name to the variable 
let firstalpha = vpersonName.substring(0, 1).toUpperCase(); // It will pick up the first alphabate of the first part of the person name and convert it into upper case
let secondalpha = vpersonName.charAt(7).toUpperCase(); // It will pick up the First charecter of the second part of the name & convert into upper case.
console.log(vpersonName.toLowerCase()); // Print name in Lowercase 
console.log(vpersonName.toUpperCase()); // Print name in UpperCase
console.log(firstalpha + vpersonName.substring(1, 6), secondalpha + vpersonName.substring(8)); //Print name in Title case
