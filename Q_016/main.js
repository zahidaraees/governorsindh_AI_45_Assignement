/*16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
var guest_list = ["Shahida", "Fawad", "Junaid", "Ishaq", "Hasan"]; //store names of deceased guest in array as we did in ex 15
console.log("\n Hello,".concat(guest_list, "  I would like to inform you that we have found a bigger dinner table.\n")); // Printed names of guests
guest_list.unshift("Sameena"); //Added one new guest to the beginning of your array.
guest_list.push("Nayab"); // added on new guest to the end of array.
var avg_lenght = Math.floor(guest_list.length / 2); // found middle index of array
guest_list.splice(avg_lenght, 0, "tayyab"); // added a new element on middle index location without removing previous content.
guest_list.forEach(function (guest_list) {
    console.log("\u201CDear ".concat(guest_list, "! you are cordially invited for the dinner. \"")); // Print / Display each Guest with same message on each line.
});
