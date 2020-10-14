// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var passwordLength = prompt ("How many characters would you like in your password?");
  var capitalLetter = confirm ("Would you like your password to include capital letters?");
  var lowerLetter = confirm ("Would you like your password to include lower case letters?");
  var numericCharacters = confirm ("Would you like your password to include numbers?");
  var specialCharacters = confirm ("Would you like your password to include special characters?");
  return passwordLength + capitalLetter+lowerLetter+numericCharacters+specialCharacters;
}
