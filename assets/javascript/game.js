// Global Variables - wins, losses, target score, your score
var wins = 0;
var losses = 0;

var target = 0;
var yourNum = 0;

var audioWin = document.createElement("audio");
audioWin.setAttribute("src", "assets/sounds/winSound.mp3");

var audioLose = document.createElement("audio");
audioLose.setAttribute("src", "assets/sounds/loseSound.mp3");


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

    target = getRandom(19, 120);



    for(var i = 0; i< poop.length; i++){
        poop[i].value = getRandom(1, 12);
        var div = $('<div>').addClass('col-md-3 col-sm-6 poo-pic');
        var img = $('<img>').attr('src', poop[i].image).attr('alt', "poop").attr('id', "poop"+(i+1)).attr('data-index', i).addClass("button img-thumbnail")

        $(div).append(img)

        $("#poop-bag").append(div)
    }

   //put on html

   $("#wins").html("Wins: " + wins);
   $("#losses").html("Losses: " + losses);

   $("#targetNumber").html("Target: " + target);

}

var addValues = function(index) {
    yourNum = yourNum + poop[index].value;
    $("#number").html("You: " + yourNum);
}



 // Need to create a pause before calling start game

function resetGame() {
    $(".img-thumbnail").each(function() {
        $(this).attr("disabled", true);
    })
    setTimeout(function(){ 
        yourNum = 0;
        $("#number").html("You: " + yourNum);
        $("#poop-bag, .modal-body").empty();
        $(".modal").modal("hide");  
        $(".img-thumbnail").each(function() {
            $(this).attr("disabled", false);
        })
      
        startGame();
    }, 2000);    
    
}



// ***********Play


$("document").ready(function() {
    startGame();
   
    $(document).on("click",".img-thumbnail", function() {

        var selectedPoop = $(this).attr('data-index');
        selectedPoop = parseInt(selectedPoop);

        addValues(selectedPoop);

        if (yourNum === target) {
            wins++            
            $("#wins").html("Wins: " + wins);
            $(".modal-body").html("<h3>You bagged a win!</h3>")
            $(".modal").modal("show");
            audioWin.play();
            resetGame();
        }else if (yourNum > target) {
            losses++
            $("#losses").html("Losses: " + losses);
            $(".modal-body").html("<h3>You stepped in it!</h3>");
            $(".modal").modal("show");
            audioLose.play();
            resetGame()
        }
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
