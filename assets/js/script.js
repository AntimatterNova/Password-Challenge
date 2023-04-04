// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  //Defines lists of usable characters and base password length
  var passLength = 0;
  var hasSpecial = false;
  var hasNumbers = false;
  var hasLowercase = false;
  var hasUppercase = false;
  var specChars = "!@#$%^&()_-+=[]{}|;:,.<>?";
  var numChars = "0123456789";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  while (passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("Choose a password length between 8 and 128 characters?"));
  };

  if (isNaN(passLength)) {
    alert("The number you choose must be between 8 and 128.");
    return "";
  };
  
  while (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecial) {
    hasSpecial = confirm("Should the password contain symbols");
    hasNumbers = confirm("Should the password contain numbers?");
    hasLowercase = confirm("Should the password contain lowercase letters?");
    hasUppercase = confirm("Should the password contain uppercase letters?");
  };
  
  if (!(hasLowercase || hasUppercase || hasNumbers || hasSpecial)) {
    alert("Please select at least one special character.");
    return "";
  };
};