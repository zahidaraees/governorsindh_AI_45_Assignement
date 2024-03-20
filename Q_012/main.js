/*12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name. */
var friends_names = ["Rabia", "Saima", "Ruby", "Nayyar", "Aaliya", "Thaira", "Shahana"]; //store names of friends in array 
friends_names.forEach(function (fname) {
    console.log("Hello, my dear sis ".concat(fname, "! How and Where are you in these days?")); // Print / Display each Name with same message on each line.
});
