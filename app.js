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
//     alphabet--
// }
// var chr:string='a'
// while(chr<='z'){
//     console.log(chr)
//     chr++
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
