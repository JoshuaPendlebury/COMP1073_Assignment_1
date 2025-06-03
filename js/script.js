/*
 * Joshua Pendlebury
 * Assignment 1 - COMP1073
 * 2025-06-02
 */

//GLOBAL VARIABLES AND CONSTANTS

// List cycling buttons locations
const noun1Btn = document.querySelector("#noun1Button");
const verbBtn = document.querySelector("#verbButton");
const adjBtn = document.querySelector("#adjectiveButton");
const noun2Btn = document.querySelector("#noun2Button");
const locationBtn = document.querySelector("#locationButton");

// Declaring story submit button location
const storyBtn = document.querySelector("#submitStory");
// Declaring story randomizer button location
const randStoryBtn = document.querySelector("#randomStory");
// Declaring story output location
const storyOut = document.querySelector("#storyOutput");

//Creating Objects to hold the values for each story segment (A list of strings(Chunks of the story), an index value for the list, and a selected value). This allows all values related to a story segment to be easily returned by a function.
//First noun
let noun1Obj = {
    "list" : ["Mom", "Dad", "The dog", "A deer", "A spider", "My teacher"],
    "index" : 0,
    "selected" : ""
}

//Verb
let verbObj = {
    "list" : ["jumped on", "sat on", "danced with", "stepped on", "saw", "ate"],
    "index" : 0,
    "selected" : ""
}

//Adjective
let adjObj = {
    "list" : ["a smelly", "a soft", "a scary", "a funny", "a dirty", "a barking"],
    "index" : 0,
    "selected" : ""
}

//Second noun
let noun2Obj = {
    "list" : ["chair", "cat", "apple", "elephant", "cow", "sheep"],
    "index" : 0,
    "selected" : ""
}

//Location
let locationObj = {
    "list" : ["on the Moon", "in the forest", "in my soup", "at home", "at Walmart", "at school"],
    "index" : 0,
    "selected" : ""
}

//EVENT LISTENERS
//Listening for list cycling buttons
    //Found a way to pass parameters to a function using arrow function expressions on stack overflow https://stackoverflow.com/questions/10000083/javascript-event-handler-with-parameters
noun1Btn.addEventListener("click", () => noun1Obj = changeStoryValues(noun1Obj, noun1Btn));
verbBtn.addEventListener("click", () => verbObj = changeStoryValues(verbObj, verbBtn));
adjBtn.addEventListener("click", () => adjObj = changeStoryValues(adjObj, adjBtn));
noun2Btn.addEventListener("click", () => noun2Obj = changeStoryValues(noun2Obj, noun2Btn));
locationBtn.addEventListener("click", () => locationObj = changeStoryValues(locationObj, locationBtn));

//Listening for story submit button
storyBtn.addEventListener("click", printStory);
//Listening for story randomizer button
randStoryBtn.addEventListener("click", randomStory);


// FUNCTIONS

function changeStoryValues(storyObj, button) {
    //Checking if the index variable is out of range and if so setting it to 0
    if(storyObj["index"] >= storyObj["list"].length || storyObj["index"] < 0){
        storyObj["index"] = 0;
    }

    //Changing the selected value to the list value of the current index
    storyObj["selected"] = storyObj["list"][storyObj["index"]];

    //Printing the selected text to the button so you can see what is selected
    button.textContent = storyObj["selected"];

    //Incrementing the index for the next press
    storyObj["index"]++;

    //Returns object to update the global object that was passed into this function
    return storyObj;
}

//Constructs and prints selected story
function printStory() {
    //Using string literals to construct the story string out of the button selections
    let story = `${noun1Obj["selected"]} ${verbObj["selected"]} ${adjObj["selected"]} ${noun2Obj["selected"]} ${locationObj["selected"]}.`;
    //Prints constructed story string to the page
    storyOut.textContent = story;
}

//Constructs and prints randomized story
function randomStory() {
    //Using string literals to construct the story string out of random list items using randomSel function
    let story = `${randomSel(noun1Obj["list"])} ${randomSel(verbObj["list"])} ${randomSel(adjObj["list"])} ${randomSel(noun2Obj["list"])} ${randomSel(locationObj["list"])}.`
    //Prints constructed story string to the page
    storyOut.textContent = story;
}

// Function returns a random item from a list of any size
function randomSel(list) {
    return list[Math.floor(Math.random() * list.length)];
}
