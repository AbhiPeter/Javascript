//&& oprators exaample

var a = 30;
var b = 20;
var c = 10;

if (a > b && a > c) {
    console.log('a is greater than b and c'); // here both must ne true to dispaly in && opeattos
}


//second example

var a = 10;
var b = 30;
var c = 20;

if (a > b && a > c) {
    console.log('a is greater than b and c');
    // here both must ne true to dispaly in && opeattos
} else if (b > a && b > c) {
    console.log("b is gretaer than a and c");
}


var num1 = "50";
var num2 = "70";
var num3 = "100";

if (a > b && a > c) {
    console.log("a is greater than  b an c");
} else if (b > c && b > c) {
    console.log("b is greater than a and c");
} else {
    console.log("c is gretar than a and c")
}



//////exmaple for the || logilca or if one is true than statment is exceued


var n1 = 30;
var n2 = 25;
var n3 = 35;

if (n1 > n2 || n1 > n3) {
    console.log('n1 is greater');
}



var n1 = 25;
var n2 = 25;
var n3 = 35;

if (n1 >= n2 || n1 >= n3) {
    console.log('n1 is greater');
}



var n1 = 15;
var n2 = 25;
var n3 = 35;

if (n1 >= n2 || n1 >= n3) {
    console.log('n1 is greater');
} else if (n2 >= n1 || n2 >= n2) {
    console.log('n2 is greater');
} else {
    console.log('c is greater');
}


//! not logical opetor

var a = 24;
var b = 25;
console.log(!(a == b));



var a = 24;
var b = '25';
console.log(!(a === b));



var a = "Peter";
var b = 'Peter';
console.log(!(a === b));




var a = "Peter";
var b = 'PETER';
console.log(!(a === b));

