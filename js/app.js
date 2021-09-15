document.querySelectorAll(".btn")[0].addEventListener("click", function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage = "dice" + randomNumber1 + ".png";
    var randomSetImage = "images/" + randomImage;
    var image1 = document.querySelector(".img1");
    image1.setAttribute("src", randomSetImage);

    var randomImage2 = "dice" + randomNumber2 + ".png";
    var randomSetImage2 = "images/" + randomImage2;
    var image2 = document.querySelector(".img2");
    image2.setAttribute("src", randomSetImage2);

    if (randomNumber1 > randomNumber2){
        score1 += 1;
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
        document.querySelector("#score1").innerHTML = score1;
        document.querySelector("#player-1").style.fontSize = "3rem";
        document.querySelector("#player-2").style.fontSize = "2rem";
        document.querySelector("#player-1").style.color = "#FF2442";
        document.querySelector("#player-2").style.color = "#152D35";
    }
    else if (randomNumber2 > randomNumber1){
        score2 += 1;
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
        document.querySelector("#score2").innerHTML = score2;
        document.querySelector("#player-2").style.fontSize = "3rem";
        document.querySelector("#player-1").style.fontSize = "2rem";
        document.querySelector("#player-2").style.color = "#FF2442";
        document.querySelector("#player-1").style.color = "#152D35";
    }
    else{
        document.querySelector("h1").innerHTML = "🚩 Draw 🚩";
        document.querySelector("#player-2").style.fontSize = "2rem";
        document.querySelector("#player-1").style.fontSize = "2rem";
        document.querySelector("#player-2").style.color = "#152D35";
        document.querySelector("#player-1").style.color = "#152D35";
    }
})

document.querySelectorAll(".btn")[1].addEventListener("click", function(){
    location.reload();
})

let score1 = 0;
let score2 = 0;

