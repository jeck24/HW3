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

  
  //This part is defining the characteristics of the password
  var safePassword = {
    capitalLetter : randomCapitalLetter(),
    lower : randomLowerLetter(),
    number : randomNumericCharacters(),
    special : randomSpecialCharacters()
  };

  generateBtn.addEventListener("click", () =>{
    var length =+ passwordLength.value;
    var capital = capitalLetter.confirmed;
    var lower = lowerLetter.confirmed;
    var number = numericCharacters.confirmed;
    var special = specialCharacters.confirmed;

    finalPassword.innerText = generatePasswordInternal(capital, lower, number, special, length);
  });

  function generatePasswordInternal(capital, lower, number, special, length){
    var generatedPassword="";
    var passwordArray = [{capital},{lower},{number},{special}].filter(item => Object.values(item)[0]);

    for (var i=0; i<passwordLength; i++){
      passwordArray.forEach(type=>{
        var funcName = Object.keys(type)[0];
        generatedPassword += safePassword[funcName]();
      });
    }

    finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
  }
  
}


