/*15. Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.

 */
var guest_list = ["Elder sis, Shahida", "Young cousin, Fawad", "Young Brother, Junaid", "Grand Father, Abba Hasan"]; //store names of deceased guest in array 
guest_list.forEach(function (mname) {
    console.log("\u201CDear ".concat(mname, "! I would like to invite you in dinner as we were used to have dinner together in your life. .\"")); // Print / Display each Guest with same message on each line.
});
var guest_refused = guest_list[1]; // second guest  has refused to join dinner.
console.log("\n Oops! ".concat(guest_refused, " is not coming.\n"));
guest_list.splice(1, 1, "Uncle Ishaq"); // This method remove Previous name from the list and add new name on that position
console.log("\n Great! our new guest ".concat(guest_list[1], " is going to join us.\n"));
guest_list.forEach(function (mname) {
    console.log("\u201CDear ".concat(mname, "! I would like to inform you that our beloved ").concat(guest_refused, " is not coming in dinner, because of some personal reasons, but you are still cordially invited for the dinner. I'll be awaiting for you\"")); // Print / Display each Guest with same message on each line.
});
