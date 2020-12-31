// Provided code
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. ' +
    'The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to ' +
    'South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically ' +
    'took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, ' +
    'though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, ' +
    'I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! ' +
    'I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature ' +
    'Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to ' +
    'me was that near the end of the route you actually cross back into New York! ' +
    'At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//split methods basically converts string to array with indicator.
const storyArray = story.split(" ");

console.log(storyArray.length);
// filters words out
const betterWords = storyArray.filter((words) => {
    if (!unnecessaryWords.includes(words)) return words;
});

console.log(betterWords.length);
// creates counter of overUsed words
const tallyOverUsedWords = betterWords.reduce((total, word) =>{
    if (overusedWords.includes(word)) total++;
    return total;
}, 0);

console.log(tallyOverUsedWords);
// creates counter of sentences. Must give initial value of 0.
const tallySentences = betterWords.reduce((total, word) => {
    if (word.endsWith(".") || word.endsWith("!") || word.endsWith("?")) total++;
    return total;
}, 0);
console.log(tallySentences);
// Oversight of exercise
const information = (better, overUsed, sentences) => {
  return `There are ${better.length} words in total, with ${overUsed} over used words in ${sentences} sentences.`
};

console.log(information(betterWords, tallyOverUsedWords, tallySentences));
//Join the array back into a single string
const betterStory = betterWords.join(" ");

console.log(betterStory);
