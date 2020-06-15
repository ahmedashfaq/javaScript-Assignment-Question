// chap 1 Alert

// 1. Write a script to greet your website visitor using JS alert box. 

("Welcome Ahmed ");

// 2. Write a script to display following message on your web page: 

alert("Error! Please enter a valid password.");

//Write a script to display following message on your web page: (Hint : Use line break) 

alert("Welcome to JSLand... \nHappy Coding!");

//4. Write a script to display following messages in sequence: 

alert("Welcome to JS Land...");

alert("Happy Coding!\nPrevent this page from creating additional dialogs.");

// Chap 2 VARIABLES FOR STRINGS 

//1. Declare a variable called username. 
//2. Declare a variable called myName & assign to it a string that represents your Full Name. 
//3. Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box. 
//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
 
 var username = "Jhone Doe";
 var bio = "15 year old";
 var message = "Certified Mobile Application Development";
 alert(username+"\n"+bio+"\n"+message);


//5. Write a script to display the following alert using one JS variable: 

//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

var email = "ahmedashfaq677@yahoo.com";
alert("MY email address is"+" "+email);

//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box: 

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book"+" "+ book);


//8. Write a script to display this in browser through JS 

document.write("Yah! I can Write content through JavaScript");

//9. Store following string in a variable and show in alert and browser through JS 

var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);



// chap 3 VARIABLES FOR NUMBERS 

//1. Declare a variable called age & assign to it your age. Show your age in an alert box. 

var age = 15;
alert('I am'+" "+age);

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthYear = "1998";
document.write("My birth year is"+" "+birthYear);

// 4. A visitor visits an online clothing store

var visitorname = prompt("Enter your name");
var product = prompt("Enter what you want");
var quantity = prompt("Enter Quantity");

document.write(visitorname+" "+"ordered"+" "+quantity+" "+product+" "+"on"+" "+"XYZ clothing store");

//  Chap 4 VARIABLE NAMES: LEGAL & ILLEGAL 

// 1. Declare 3 variables in one statement. 

var sample1 = "Hello";
var sample2 = "Hello";
var sample3 = "Hello";

// Declare 5 legal & 5 illegal variable names. 

// legal names

//  myVar are legal.
// nameOFanybody are legal
// age12 is legal

// illegal names

// space between variable 
// special character is not in variable like %


// Chap 5 MATH EXPRESSIONS 

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
 
var num1 = 3;
var num2 = 5;
var result = num1+num2;
alert(result);
document.write(result);

//subtract

var num1 = 3;
var num2 = 5;
var result = num1-num2;
alert(result);
document.write(result);

// multiplication

var num1 = 3;
var num2 = 5;
var result = num1*num2;
alert(result);
document.write(result);

//Divison

var num1 = 3;
var num2 = 5;
var result = num1/num2;
alert(result);
document.write(result);

//Modulus

var num1 = 3;
var num2 = 5;
var result = num1%num2;
alert(result);
document.write(result);

// 3. Do the following using JS Mathematic Expressions 

var number;
document.write("Value after variable declaration is: ??");

var number = 5;
document.write("Initial value:"+" "+number);

var number = 5;
number++;
document.write("Value after increment is:"+" "+number);

var number = 5;
number++;
number = number+7
document.write("Value after addition is:"+" "+number);

var number = 5;
number++;
number = number+7
number--;
document.write("Value after decrement is:"+" "+number);

number = number%3
document.write("The remainder is : "+" "+number);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store

var ticket_quantity = 5;
var ticketprice = 600;
var result = ticketprice*ticket_quantity;
document.write("The total cost to buy 5 tickets to a movie is "+" "+result+" "+"PKR");

// Write a script to display multiplication table of any number in your browser. E.g 

var num = prompt();
document.write("Table of"+" "+num+"<br>");
for (var i=1; i<=10; i++){
    document.write(num+"x"+i+"="+num*i+"<br>");    
}

// 6. The Temperature Converter

var Celsius = 25;
var Fahrenheit = 70;

var Celsius_convert = (Fahrenheit-32)*5/9;

var Fahrenheit_convert = (Celsius * 9/5)+32;

document.write(Celsius+"C"+" "+"is"+Fahrenheit_convert+"F"+"<br>");
document.write(Fahrenheit+"F"+" "+"is"+Celsius_convert+"C");


// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 



var price_of_item1 = 650;
document.write("Price of item1 is"+" "+price_of_item1+"<br>");
var Quantity_of_item1 = 3;
document.write("Quantity of item 1 is"+" "+Quantity_of_item1+"<br>");
var total1 = price_of_item1*Quantity_of_item1;
var price_of_item2 = 100;
document.write("Price of item2 is"+" "+price_of_item2+"<br>");
var Quantity_of_item2 = 7;
document.write("Quantity of item 2 is"+" "+Quantity_of_item2+"<br>");
var total2 = price_of_item2*Quantity_of_item2;
var shipping_charges = 100;
document.write("Shipping Charges"+" "+price_of_item1+"<br>");
var subtotal = total1+total2+shipping_charges
document.write("Total cost of your order is:"+subtotal);


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 

var total_marks = 980;
document.write("Total Marks:"+" "+total_marks+"<br>");
var mark_obtainer = 804;
document.write("Marks Obtained:"+" "+mark_obtainer+"<br>");
var percentage = (mark_obtainer*100)/total_marks;
document.write("Percentage:"+" "+percentage+"<br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 

var dollar = 10;
var dollar_rate = 104.80;
var total1 = dollar*dollar_rate;
var riyal = 25
var riyal_rate = 28;
var total2 = riyal*riyal_rate;
var total = total1+total2;
document.write("Total Currency in PKR:"+" "+total);

// 11. The Age Calculator

// 12. The Geometrizer: 

var radius = 20;
var Circumference = 125.67;


// 13. The Lifetime Supply Calculator: 

var  favorite_snack = "chips";
document.write("Favorite snack:"+" "+favorite_snack+"<br>");
var age = 15;
document.write("Current Age:"+" "+age+"<br>");
var max_age = 65;
document.write("Estimated Max Age:"+" "+favorite_snack+"<br>");
var amount_snack = 3;
document.write("Amount of snack per day:"+" "+amount_snack+"<br>");
var result = (max_age-age)*amount_snack;
document.write("You will need"+" "+result+" "+favorite_snack+" "+"to last you until the ripe old age of"+" "+max_age);


// Chap 6-9

//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:  
 
var number = 10;
"<br>"
++number;
document.write("The value of ++a is:"+" "+number+"<br>");
document.write("Now the value of a is:"+" "+number+"<br>");
"<br>"
"<br>"
document.write("The value of a++ is:"+" "+number+"<br>");
number++;
document.write("Not the value of a is:"+" "+number+"<br>");
"<br>"
"<br>"
--number;
document.write("The value of --a is:"+" "+number+"<br>");
document.write("Now the value of a is:"+" "+number+"<br>");
"<br>"
"<br>"
document.write("The value of a-- is:"+" "+number+"<br>");
number--;
document.write("Not the value of a is:"+" "+number+"<br>");

// 2. What will be the output in variables a, b & result after execution of the following script: 

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--; 
document.write(--a+"<br>");
document.write(--a - --b+"<br>");
document.write(--a - --b + ++b+"<br>");
document.write(--a - --b + ++b + b--+"<br>");
document.write("The final result is:"+" "+result);

// 3. Write a program that takes input a name from user & greet the user. 

// already done in chap 1

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 
 
// already done in chap 5


// Chap 9-11 USER INPUT & CONDITIONAL STATEMENT 

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 

var city_name = prompt("Enter city name");
if (city_name === "karachi"){
    alert("Welcome to city of lights");
}
else{
    alert("Welcome");
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 

var gender = prompt("Enter gender");
if (gender === "male"){
    alert("Good Morning Sir");
}
else{
    alert(" Good Morning Ma’am. ");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table: 


var signal_color = prompt("Enter color");
if (signal_color === "Red"){
    alert("Must Stop");
}
else if(signal_color === "Yellow"){
    alert("Ready to move");
}
else if(signal_color === "Green"){
    alert("Move");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car

var fuel = prompt();
if (fuel < "0.25"){
    alert("Please refill the fuel in your car");
}

// Run this script, & check whether alert message would be displayed or not. Record the outputs. 

var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
}


// Chap 17-20

// 3. Write a program to print numeric counting from 1 to 10. 

for (var i = 1; i<=10; i++){
    document.write(i+"<br>");
}

// 4.  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user. 

var number = prompt("Enter number");
document.write("Multiplication table"+" "+number+"<br>");
var length = prompt("Enter length");
document.write("Table length"+" "+length+"<br>");
for (var i=1; i<=length; i++){
    document.write(number+" "+"x"+" "+i+" "+"="+" "+number*i+"<br>");
}

// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 

var fruits = ["apple","banana","mango","orange","strawberry"];

for(var i=0; i<fruits.length; i++){
    document.write(fruits[i]+"<br>");
}


//6. Generate the following series in your browser

var counting = [1,2,3,4,5,6,7,8,9,10];  
document.write("COUNTING"+" "+counting+"<br>"+"<br>");
for (var i=0; i<counting.length; i++){
    if(counting[i]%2 ===0){
        document.write(counting[i]);
    }
}document.write("<br>"+"<br>")
for (var i=0; i<counting.length; i++){
    if(counting[i]%2 !=0){
        document.write(counting[i]);
    }
}document.write("<br>"+"<br>")
var counting_reverse = counting.reverse();
document.write("REVERSE COUNTING"+" "+counting_reverse+"<br>"+"<br>");