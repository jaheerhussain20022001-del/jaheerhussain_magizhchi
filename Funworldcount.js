function analyzeSentence(sentence){
    return{
        totalCharacters: sentence.length,
        totalWords: sentence.trim().split(/\s+/).length,
        lowerCaseSentence: sentence.toLowerCase()

    };

}

const input = "Hello World From JavaScript";
console.log(analyzeSentence(input));