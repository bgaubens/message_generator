// This script is the main file for Message Generator project
// It is created in the scope of the Codecademy Web Developer Path

// Defining message components in variables
const subject = ["il", "elle", "on", "le fermier", "le chien", "la mésange", "ma mère", "ton père"]
const verb = ["mange", "prend", "déploie", "déplace", "baise", "défend", "connaît", "est"]
const complement = ["l'arbre", "l'école", "la vache", "la dédicace", "la police", "un oiseau", "une voiture", "du pain"]

// function that return a random item of an array
function getRandomItem (arr) {
    const num = Math.floor(Math.random() * arr.length)
    return arr[num]
}

// function that return a string with a capitalized First Letter
function capitalizedFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

// function that return a random sentence with the previous variables
function createSentence () {
    const theSubject = getRandomItem(subject)
    const theVerb = getRandomItem(verb)
    const theComplement = getRandomItem(complement)
    return capitalizedFirstLetter(theSubject) + " " + theVerb + " " + theComplement + "."
}

// print the random sentence to the console
console.log(createSentence())