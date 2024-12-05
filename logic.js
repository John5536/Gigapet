document.addEventListener('DOMContentLoaded', function() {
    // Game foods
    let egg_level = 0;
    let apple = 1;
    let bread = 1;
    let vegetables = 0.5;
    let steak = 5;

    class eggs {
        constructor(type, level, vitality, strength, hunger, happiness, sprite) {
            this.type = type;
            this.level = level;
            this.vitality = vitality;
            this.strength = strength;
            this.hunger = hunger;
            this.happiness = happiness;
            this.sprite = sprite;
        }
    }

    // Home background
    let Width = 500;
    let Height = 200;
    let canvas = document.getElementById("first_canvas");
    
    if (canvas) { // Check if the canvas element exists
        let ctx = canvas.getContext('2d');
        let backgroundtest = new Image();

        backgroundtest.src = "./img/backgroundtest.jpg";

        backgroundtest.onload = function() {
            ctx.drawImage(backgroundtest, -30, -50, Width, Height);
        }
    } else {
        console.log("Canvas element not found");
    }

    // Red egg choice
    let fireEggimage = new Image();
    fireEggimage.src = "test.img";
    let redEgg = new eggs("Fire", 0, 5, 0, 0, 10, fireEggimage);
    console.log(redEgg);

    // Blue egg choice
    let waterEggimage = new Image();
    waterEggimage.src = "test.img";
    let blueEgg = new eggs("Water", 0, 5, 0, 0, 10, waterEggimage);
    console.log(blueEgg);

    // Green egg choice
    let grassEggimage = new Image();
    grassEggimage.src = "test.img";
    let greenEgg = new eggs("Grass", 0, 5, 0, 0, 10, grassEggimage);
    console.log(greenEgg);

    // Yellow egg choice
    let electricEggimage = new Image();
    electricEggimage.src = "test.img";
    let yellowEgg = new eggs("Electric", 0, 5, 0, 0, 10, electricEggimage);
    console.log(yellowEgg);

    let playerchoicefire = document.getElementById("fireBeastcard");
    let playerchoicewater = document.getElementById("waterBeastcard");
    let playerchoicegrass = document.getElementById("grassBeastcard");
    let playerchoiceelectric = document.getElementById("electricBeastcard");

    if (playerchoicefire) {
        playerchoicefire.addEventListener("click", function() {
            let cardAppearingfire = document.getElementById("fire-pet-choice-selected");

            if (cardAppearingfire) {
                cardAppearingfire.style.display = "block";
                console.log("it works");
            } else {
                console.log("not found");
            }
        });
    } else {
        console.log("fireBeastcard element not found");
    }

    if (playerchoicewater) {
        playerchoicewater.addEventListener("click", function() {
            let cardAppearingwater = document.getElementById("water-pet-choice-selected");

            if (cardAppearingwater) {
                cardAppearingwater.style.display = "block";
                console.log("it works");
            } else {
                console.log("not found");
            }
        });
    } else {
        console.log("waterBeastcard element not found");
    }

    if (playerchoicegrass) {
        playerchoicegrass.addEventListener("click", function() {
            let cardAppearinggrass = document.getElementById("grass-pet-choice-selected");

            if (cardAppearinggrass) {
                cardAppearinggrass.style.display = "block";
                console.log("it works");
            } else {
                console.log("not found");
            }
        });
    } else {
        console.log("grassBeastcard element not found");
    }

    if (playerchoiceelectric) {
        playerchoiceelectric.addEventListener("click", function() {
            let cardAppearingelectric = document.getElementById("electric-pet-choice-selected");

            if (cardAppearingelectric) {
                cardAppearingelectric.style.display = "block";
                console.log("it works");
            } else {
                console.log("not found");
            }
        });
    } else {
        console.log("electricBeastcard element not found");
    }
});
