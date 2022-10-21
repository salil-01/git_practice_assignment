// check wheather given string is palindrome or not
let str = "racecar";
let bag = 0;
for (let i = str.length; i > 1; i--) {
  bag += str[i];
}
if ((str = bag)) {
  console.log(str, "is a palindrome");
} else {
  console.log(str, "is not a palindrome");
}
