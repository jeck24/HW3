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
  var capitalLetter = confirm ("Would you like your password to include capital letters?");
  var lowerLetter = confirm ("Would you like your password to include lower case letters?");
  var numericCharacters = confirm ("Would you like your password to include numbers?");
  var specialCharacters = confirm ("Would you like your password to include special characters?");

  //This part is the randomizer for the capital letter

  
  //This part is defining the characteristics of the password
  var safePassword = {
    capitalLetter : randomCapitalLetter(),
    lowerLetter : randomLowerLetter(),
    numericCharacters : randomNumericCharacters(),
    specialCharacters : randomSpecialCharacters()
  };

  //not understanding
  var characteristic = [{capitalLetter},{lowerLetter},{numericCharacters},{specialCharacters}].filter(item => Object.values(item)[0]);


  for (var i=0; i<passwordLength;i++){
    characteristic.forEach(type =>{
      var funcName = Object.keys(type)[0];
      finalPassword += safePassword[funcName]();
    });
  }

  var password = finalPassword.slice(0,passwordLength);

  return password;
}


