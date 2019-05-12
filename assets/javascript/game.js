// Global Variables - wins, losses, target score, your score
var wins = 0;
var losses = 0;

var target = 0;
var yourNum = 0;

// var poop1 = $("#poop1");
// var poop2 = $("#poop2");
// var poop3 = $("#poop3");
// var poop4 = $("#poop4");

var poop = [
    // poop1,
    {
        value: 0,
        image: "assets/images/poop_1.png",
    },
    // poop2,
    {
        value: 0,
        image: "assets/images/poop_2.png",
    },
    // poop3
    {
        value: 0,
        image: "assets/images/poop_3.png",
    },
    // poop4
    {
        value: 0,
        image: "assets/images/poop_4.png",
    },
];

//Functions
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {
    wins = 0;

    target = getRandom(19, 120);

    poop[0].value = getRandom(1, 12);
    poop[1].value = getRandom(1, 12);
    poop[2].value = getRandom(1, 12);
    poop[3].value = getRandom(1, 12);






}
startGame()
// This is only a test.
console.log("Target: " + target);
console.log(poop[0].value);
console.log("Poop1: " + poop[0].value + " | Poop2: " + poop[1].value + " | Poop3: " + poop[2].value + " | Poop4: " + poop[3].value);
console.log(getRandom(1, 12));




// ***********Play
startGame()
$("document").ready(function() {
    $(".img-thumbnail").on("click", function() {
        alert("poop");
    })















































});

//var score  = yourScore + crystalValue


//array of crystals to loop through and 


//Random Number Function
        //assign a value to teach crystal

//click event function


//start/reset
    //

// clear variables



//DOM manipulation methods


//  Lindsey - dynamically create crystals on the page.  We might create an object to hold each crystal.

