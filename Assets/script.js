// Assignment code here


// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  const passwordText = document.querySelector("#password");
  // Array of characters to include in password
  const finalPassword = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!',
    '@', '#', '$', '%', '^', '&', '*', '(', ')', '+'
  ]
  // console.log(finalPassword.length);
  // Generate a random number between 4 and 128
  var passwordLength = Math.floor(Math.random() * 124 + 4);
  // console.log(passwordLength);
    //  Math.floor(Math.random() * passwordLength) + 4;
  // Use a for loop to generate a number to pull from the array
  for (var i = 0; i < passwordLength; i++) {
    let randomNumber = (Math.floor(Math.random() * (finalPassword.length-1)));
    // console.log(randomNumber);
    // Index of the random string from the array
    let arrayString = finalPassword[randomNumber];
    // Adds the indexed string to the variable password
    password = password.concat(arrayString);
    }

  
  // Changes the placeholder text to the generated string from the varable password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
