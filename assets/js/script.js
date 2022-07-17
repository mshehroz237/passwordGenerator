// setting my varibales and strings
var charactersLength = 10;
var lowercaseLetter = ['a', 'b', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '`', '~', '|', '<', '>', '=', '-', '_'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var generateBtn = document.querySelector("#generate");

// generatePassword funcion which displays prompts
function generatePassword() {
  var generatedPass = [];
  var passwordArr = [];
  var finalPass;
  //asking user how many characters they would like
  charactersLength = parseInt(prompt("How many characters would you like your password to contain? (8 to 128 characters)"));
  if (charactersLength < 8 || charactersLength > 128) {
    alert("enter a length between  8 and 128 , try again");
    return;
  }
    //asking user if they would like lowercase letters

  var lowercase = confirm("Would You like lowercase letters?");
  if (lowercase) {
    passwordArr = passwordArr.concat(lowercaseLetter);
  }
      //asking user if they would like uppercase letters

  var uppercase = confirm("Would you like uppercase letters?");
  if (uppercase) {
    passwordArr = passwordArr.concat(uppercaseLetters);
  }
      //asking user if they would like special characters letters

  var specialChar = confirm("Would you like special characters in your password?");
  if (specialChar) {
    passwordArr = passwordArr.concat(specials);
  }
      //asking user if they would like numbers in their password

  var num = confirm("Would you like numbers in your password?");
  if (num) {
    passwordArr = passwordArr.concat(specials);
  }

  // a for loop to get random numbers anss store it inside the finalPass until i is greater than characterslenght inputed by the user
  for (var i = 0; i < charactersLength; i++){
  var finalPass = passwordArr[Math.floor(Math.random() * passwordArr.length)];
// another for loop to concatinate the array inside a final generatedPass var
  for(var i = 1 ; i < charactersLength; i+=1){
    var generatedPass = generatedPass + i;
}
//showing the alert
alert("Your passowrd is " + generatedPass);
//console logging the results
console.log(generatedPass);
}
}

  function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  generateBtn.addEventListener("click", writePassword);
