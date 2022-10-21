// Check wheather given number is prime or not;
let num = 29;
let factors = 0;
for (let i = 0; i <= num; i++) {
  if (num % i == 0) {
    factor++;
  }
}
if (factors == 1) {
  console.log(num, "is a prime number");
} else {
  console.log(num, "is not a prime number");
}
