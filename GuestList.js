var Gust_List = ["Muskan", "Aria", "Mel"];
//for(let i=0;  i<Gust_List.length; i++){
//console.log("Dear Miss." +Gust_List[i] + ",\n\nit is our pleauusr to invite you in our party. \n\nThank You!");   
//}
var absentGuest = "Muskan";
var newGuest = "Gurya";
Gust_List[0] = newGuest;
// for(let i=0;  i<Gust_List.length; i++){
//     console.log("Dear Miss." +Gust_List[i] + ",\n\nit is our pleauusr to invite you in our party. \n\nThank You!");   
//    }
console.log("Miss. ".concat(absentGuest, " is not coming to the party. "));
console.log("Good News! We find Big Table so we are inviting 3 more guests.");
Gust_List.unshift("Eman Fatima");
Gust_List.splice(2, 0, "Saima");
Gust_List.push("Ramsha");
//i'm printed here 6 guest array.
for (var i = 0; i < Gust_List.length; i++) {
    // sorry message to guest for not invited.
    console.log("Dear Miss." + Gust_List[i] + ",\n\nit is our pleauusr to invite you in our party. \n\nThank You!\n\n");
}
console.log("\n Sorry we can not arrange big table, only Two  people will be invited.");
// i remove guest from guest.
while (Gust_List.length > 2) {
    var remove_Guest = Gust_List.pop();
    console.log("Sorry Miss.".concat(remove_Guest, " You are not invited for Dinner."));
}
// remaining 2 invited guest.
for (var i = 0; i < Gust_List.length; i++) {
    console.log("Dear Miss." + Gust_List[i] + ",\n\nYou are still invited. \n\nThank You!\n\n");
}
// i remove all guest from array.
Gust_List.splice(0, 2);
console.log(Gust_List);
