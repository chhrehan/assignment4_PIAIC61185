var age=prompt("Enter you age.");
age=Number(age);
var date=new Date();
var currYear=date.getFullYear();
var birthYear=currYear-age;
console.log(date);
console.log(currYear);
document.write("Your age is: "+age);
document.write("<br>Your birth year is: "+ birthYear);
