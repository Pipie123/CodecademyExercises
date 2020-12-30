//Created input
const input = "Bruh moment I am a whale and there is nothing you can do about it";
//Vowels
const vowels = ["a", "e", "i", "o", "u"];
//Put Vowels in array
let resultArray = [];
//Checks if letter in input is a vowel, if so, then push the vowel into resultArray
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        //Doubles the push if the vowel is an E or U
        if (vowels[j].toUpperCase() === input[i].toUpperCase()) {
            if (vowels[j] === "e" || vowels[j] === "u") {
                resultArray.push(vowels[j].toUpperCase());
            }
            resultArray.push(vowels[j].toUpperCase());
        }
    }
}

console.log(resultArray.join(""));
