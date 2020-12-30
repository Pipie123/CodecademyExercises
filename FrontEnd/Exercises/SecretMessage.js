//Given Code

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first',
    'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,',
    'Learn', 'JavaScript'];
//Code from me

//removes last word in array;
secretMessage.pop();
//Adds two words Program at the end of array.
secretMessage.push("to", "Program");
//Find the word easily and replace with right.
secretMessage[secretMessage.indexOf("easily")] = "right";
//Removes the first word off the array.
secretMessage.shift();
//Adds the word Programming in the beginning of array
secretMessage.unshift("Programming");
//Splices and replaces words with know,
secretMessage.splice(secretMessage.indexOf("get"), 5, "know,");
//Result of exercise
console.log(secretMessage.join(" "));

