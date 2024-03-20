/*14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like toinvite to dinner. 
Then use your list to print a message to each person, inviting them to dinner. */

let guest_list = ["Elder sis, Shahida","Young cousin, Fawad","Young Brother, Junaid","Grand Father, Abba Hasan"]; //store names of deceased guest in array 
guest_list.forEach((mname) => { // Applied forEach Method to retrive Guest Name at a time
    console.log(`“Dear ${mname}! I would like to invite you in dinner as we were used to have dinner together in your life. ."`); // Print / Display each Guest with same message on each line.
});