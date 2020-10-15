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


//The homework starts here
function generatePassword(){

  //This part is the randomizer for the capital letter
  function randomCapitalLetter(){
    return String.fromCharCode((Math.random()*26)+65);
  }
  
  //This part is the randomizer for the lower letter
  function randomLowerLetter(){
    return String.fromCharCode((Math.random()*26)+97);
  }
  
  //This part is the randomizer for the number
  function randomNumericCharacters(){
    return String.fromCharCode((Math.random()*10)+48)
  }
  
  //This part is the randomizer for the special character
  function randomSpecialCharacters(){
    var specialCharacter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return specialCharacter[Math.floor(Math.random()*specialCharacter.length)];
  }

  //This part is gathering the password's characteristics from the user
  var finalPassword = "";
  var passwordLength = prompt ("How many characters would you like in your password?");
  if (passwordLength<8 || passwordLength>127){
    alert("Your password needs to have more than 7 and less than 128 characters");
  }

  else{
    var capitalLetter = confirm ("Would you like your password to include capital letters?");
    var lowerLetter = confirm ("Would you like your password to include lower case letters?");
    var numericCharacters = confirm ("Would you like your password to include numbers?");
    var specialCharacters = confirm ("Would you like your password to include special characters?");
  }

  if (capitalLetter && lowerLetter && numericCharacters && specialCharacters) {
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomCapitalLetter(), randomLowerLetter(), randomNumericCharacters(), randomSpecialCharacters()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else if (capitalLetter && lowerLetter && numericCharacters && specialCharacters===false){
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomCapitalLetter(), randomLowerLetter(), randomNumericCharacters()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else if (capitalLetter && lowerLetter && numericCharacters===false && specialCharacters){
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomCapitalLetter(), randomLowerLetter(), randomSpecialCharacters()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else if (capitalLetter && lowerLetter===false && numericCharacters && specialCharacters) {
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomCapitalLetter(), randomNumericCharacters(), randomSpecialCharacters()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else if (capitalLetter===false && lowerLetter && numericCharacters && specialCharacters) {
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomLowerLetter(), randomNumericCharacters(), randomSpecialCharacters()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else if (capitalLetter && lowerLetter && numericCharacters===false && specialCharacters===false) {
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomCapitalLetter(), randomLowerLetter()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else if (capitalLetter && lowerLetter===false && numericCharacters && specialCharacters===false) {
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomCapitalLetter(), randomNumericCharacters()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else if (capitalLetter===false && lowerLetter && numericCharacters && specialCharacters===false) {
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomLowerLetter(), randomNumericCharacters()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else if (capitalLetter && lowerLetter===false && numericCharacters===false && specialCharacters) {
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomCapitalLetter(), randomSpecialCharacters()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else if (capitalLetter===false && lowerLetter && numericCharacters===false && specialCharacters) {
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomLowerLetter(), randomSpecialCharacters()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else if (capitalLetter===false && lowerLetter===false && numericCharacters && specialCharacters) {
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomNumericCharacters(), randomSpecialCharacters()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else if (capitalLetter && lowerLetter===false && numericCharacters===false && specialCharacters===false) {
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomCapitalLetter()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else if (capitalLetter===false && lowerLetter && numericCharacters===false && specialCharacters===false) {
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomLowerLetter()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else if (capitalLetter===false && lowerLetter===false && numericCharacters && specialCharacters===false) {
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomNumericCharacters()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else if (capitalLetter===false && lowerLetter===false && numericCharacters===false && specialCharacters) {
    for (var i = 0; i < passwordLength; i++) {
      var arrayPassword = [randomSpecialCharacters()];
      var randomVar = Math.floor(Math.random()*arrayPassword.length);
      finalPassword = finalPassword + arrayPassword[randomVar];
    }
  }

  else{
    finalPassword="Please comply with all requirements: from 8 to 127 characters and add at least 1 type of character";
  }


  

  return finalPassword;
  
  
}


