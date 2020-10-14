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

  const safePassword = {
    capital : randomCapitalLetter(),
    lower : randomLowerLetter(),
    numeric : randomNumericCharacters(),
    special : randomSpecialCharacters()
  };

  const characteristic = [{capitalLetter},{lowerLetter},{numericCharacters},{specialCharacters}].filter(item => Object.values(item)[0]);

  var finalPassword = "";

  for (var i=0; i<passwordLength;i++){
    characteristic.forEach(type =>{
      const funcName = Object.keys(type)[0];
      finalPassword += safePassword[funcName]();
    });
  }

  var password = finalPassword.slice(0,passwordLength);

  return password;
}

function randomCapitalLetter(){
  return String.fromCharCode((Math.random()*26)+65);
}

function randomLowerLetter(){
  return String.fromCharCode((Math.random()*26)+97);
}

function randomNumericCharacters(){
  return String.fromCharCode((Math.random()*10)+48)
}

function randomSpecialCharacters(){
  var specialCharacter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return specialCharacter[Math.floor(Math.random()*specialCharacter.length)];
}
