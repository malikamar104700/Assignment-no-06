// Program # 1. Write a ts program to print all natural numbers from 1 to n. - using while loop
var natural = 1;
var usreInput = parseInt(prompt("enter number"));
while (natural <= usreInput) {
    console.log(natural);
    natural++;
}
// Program # 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
var num = parseInt(prompt("enter value"));
while (num >= 1) {
    console.log(num);
    num--;
}
// Program # 3. Write a ts program to print all alphabets from a to z. - using while loop
// var alphabet:any="a"
// var alphabet1:any="z"
// while(alphabet<=alphabet1){
//     console.log(alphabet)
//     alphabet++
// }
var n = 0;
var chr;
while (n >= 0 && n < 26) {
    chr = String.fromCharCode(97 + n);
    console.log(chr);
    n++;
}
// Program # 4. Write a ts program to print all even numbers between 1 to 100. - using while loop
var no = 1;
while (no <= 100) {
    if (no % 2 == 0) {
        console.log(no);
    }
    no++;
}
// Program # 5. Write a ts program to print all odd number between 1 to 100.
var no1 = 1;
// var no2:number=100
while (no1 <= 100) {
    if (no1 % 2 == 1) {
        console.log(no1);
    }
    no1++;
}
// Program # 6. Write a ts program to find sum of all natural numbers between 1 to n.
var sum = parseInt(prompt("find sum of all natural numbers"));
var sum1 = 1;
var sum2 = 0;
while (sum1 <= sum) {
    sum2 += sum1;
    sum1++;
}
console.log("sum of natural number:", sum2);
// Program # 7. Write a ts program to find sum of all even numbers between 1 to n.
var even = parseInt(prompt("find sum of all even numbers"));
var even1 = 1;
var even2 = 0;
while (even1 <= even) {
    if (even1 % 2 == 0) {
        even2 += even1;
    }
    even1++;
}
console.log("sum of even number:", even2);
// Program # 8. Write a ts program to find sum of all odd numbers between 1 to n.
var odd = parseInt(prompt("find sum of all odd numbers "));
var odd1 = 1;
var odd2 = 0;
while (odd1 <= odd) {
    if (odd1 % 2 == 1) {
        odd2 += odd1;
    }
    odd1++;
}
console.log("sum of odd number:", odd2);
// Program # 9. Write a ts program to print multiplication table of any number.
var table = parseInt(prompt("enter number to write table"));
var table2 = parseInt(prompt("enter length of table "));
var table1 = 1;
while (table1 <= table2) {
    console.log(table, '*', table1, '=', table * table1);
    table1++;
}
// Program # 10. Write a ts program to count number of digits in a number.
var uservalue = prompt("enter any value");
console.log("length of your digit :", uservalue.length);
// Program # 11. Write a ts program to find first and last digit of a number.
var digit = (prompt("enter number "));
function A(a) {
    console.log("first digit of this number", digit.charAt(0));
    console.log("last digit of this number", digit % 10);
}
A(digit);
// Program # 12. Write a ts program to find sum of first and last digit of a number.
var digit1 = parseInt(prompt("enter number to find sum of first and last digit"));
// var digit2:number=digit1%10
// var digit3:number=(digit1/10)+digit2
// console.log((digit1.charAt(0))+(digit1%10))
// console.log(digit3)
// var a:number=22
// var a1:number=26
// console.log(a+a1)
var digit2 = digit1;
var digit3 = digit1 % 10;
while (digit2 >= 10) {
    digit2 = (digit2 / 10);
}
console.log("first digit of this number", digit2);
console.log("last digit of this number", digit3);
