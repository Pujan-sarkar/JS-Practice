function findLongestWord(sentence) {
    // Split the sentence into words using spaces as the delimiter
    const words = sentence.split(' ');

    // Initialize a variable to store the longest word
    let longestWord = '';

    // Loop through the words array to find the longest word
    for (let word of words) {
        // If the current word is longer than the longestWord, update longestWord
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    // Return the longest word found
    return longestWord;
}

// Example usage:
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
