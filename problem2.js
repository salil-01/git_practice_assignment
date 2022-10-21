// check wheather given string is palindrome or not
let str = "racecar";
let bag = 0;
for (let i = str.length-1; i >= 0; i--) {
  bag += str[i];
}
if ((str == bag)) {
  console.log(str, "is a palindrome");
} else {
  console.log(str, "is not a palindrome");
}
