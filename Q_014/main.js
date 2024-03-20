/*14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like toinvite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */
var guest_list = ["Elder sis, Shahida", "Young cousin, Fawad", "Young Brother, Junaid", "Grand Father, Abba Hasan"]; //store names of deceased guest in array 
guest_list.forEach(function (mname) {
    console.log("\u201CDear ".concat(mname, "! I would like to invite you in dinner as we were used to have dinner together in your life. .\"")); // Print / Display each Guest with same message on each line.
});
