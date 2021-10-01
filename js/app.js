//Score Declaration
let score1 = 0;
let score2 = 0;

// Functions for Dice Button
$("#dice-button").click(() => {

    //Random number generator from 1-6
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    //Random image change player 1
    let randomImage = "dice" + randomNumber1 + ".png";
    let randomSetImage = "images/" + randomImage;
    $(".img1").attr("src", randomSetImage);

    //Random image change player 2
    let randomImage2 = "dice" + randomNumber2 + ".png";
    let randomSetImage2 = "images/" + randomImage2;
    $(".img2").attr("src", randomSetImage2);

    //Conditional for random numbers
    if (randomNumber1 > randomNumber2) {
        score1 += 1;
        $("h1").html("🚩 Player 1 Wins!");
        $("#score1").html(score1);
        $("#player-1").css("fontSize", "3rem");
        $("#player-1").css("left", "760px");
        $("#player-2").css("left", "1040px");
        $("#player-2").css("fontSize", "2rem");
        $("#player-1").css("color", "#FF2442");
        $("#player-2").css("color", "#152D35");
    }
    else if (randomNumber2 > randomNumber1) {
        score2 += 1;
        $("h1").html("Player 2 Wins! 🚩");
        $("#score2").html(score2);
        $("#player-2").css("fontSize", "3rem");
        $("#player-2").css("left", "1025px");
        $("#player-1").css("left", "790px");
        $("#player-1").css("fontSize", "2rem");
        $("#player-2").css("color", "#FF2442");
        $("#player-1").css("color", "#152D35");
    }
    else {
        $("h1").html("🚩 Draw 🚩")
        $("#player-2").css("fontSize", "2rem");
        $("#player-1").css("fontSize", "2rem");
        $("#player-1").css("left", "790px");
        $("#player-2").css("left", "1040px");
        $("#player-2").css("color", "#152D35");
        $("#player-1").css("color", "#152D35");
    }
});

// Refresh the Window
$("#reset-button").click(() => {
    location.reload();
});

//Mouse position
$(window).mousemove((event) => {
    $("#x").html(event.pageX);
    $("#y").html(event.pageY);
})
