let sum = 0;
let i;

for (i = 1; i <= 10; i++) {
  var num = parseFloat(prompt("Enter number " + i + ":"));
  sum = sum + num;
}

alert("The sum of all 10 values is " + sum);