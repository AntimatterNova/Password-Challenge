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
  // Defines lists of usable characters and base password length
  var passLength = 0;
  var hasSpecial = false;
  var hasNumbers = false;
  var hasLowercase = false;
  var hasUppercase = false;
  var specChars = "!@#$%^&()_-+=[]{}|;:,.<>?";
  var numChars = "0123456789";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Asks the user how long they want the password to be
  while (passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("Choose a password length between 8 and 128 characters?"));
  };

  // Checks of the user's input is a valid number, or within the allowed length
  if (isNaN(passLength)) {
    alert("The number you choose must be between 8 and 128.");
    return "";
  };
  
  // Ask the user what types of symbols they want in the output
  while (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecial) {
    hasSpecial = confirm("Should the password contain symbols");
    hasNumbers = confirm("Should the password contain numbers?");
    hasLowercase = confirm("Should the password contain lowercase letters?");
    hasUppercase = confirm("Should the password contain uppercase letters?");
  };
  
  // If the user does not select at least one of the output types, it will prompt them to choose one
  if (!(hasLowercase || hasUppercase || hasNumbers || hasSpecial)) {
    alert("Please select at least one special character.");
    return "";
  };

  let availableChars = "";
  if (hasLowercase) {
    availableChars += lowerChars;
  };
  if (hasUppercase) {
    availableChars += upperChars;
  };
  if (hasNumbers) {
    availableChars += numChars;
  };
  if (hasSpecial) {
    availableChars += specChars;
  };

  // This is the function that generates a randomized password
  let password = "";
  for (let i = 0; i < passLength; i++) {
    password += availableChars.charAt(Math.floor(Math.random() * availableChars.length));
  };

  return password;
};

// This function pushes the generated password to the html
document.getElementById("generate-password-btn").addEventListener("click", function() {
  var password = generatePassword();
  alert("Your new password is: " + password);
});