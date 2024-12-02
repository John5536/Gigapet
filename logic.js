//Game foods
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

//Home background
let Width =500;
let Height = 200;
let canvas = document.getElementById("first_canvas");
let ctx = canvas.getContext('2d');
let backgroundtest = new Image();

backgroundtest.src = "./img/backgroundtest.jpg";

backgroundtest.onload = function(){
    ctx.drawImage(backgroundtest, -30, -50, Width, Height);
}

// Red egg choice
let fireEggimage = new Image(); 
fireEggimage.src = "test.img";
let redEgg = new eggs ("Fire", 0, 5, 0, 0, 10, fireEggimage)
console.log(redEgg);

// Blue egg choice
let waterEggimage = new Image(); 
waterEggimage.src = "test.img";
let blueEgg = new eggs ("Water", 0, 5, 0, 0, 10, waterEggimage)
console.log(blueEgg);

// Green egg choice
let grassEggimage = new Image(); 
grassEggimage.src = "test.img";
let greenEgg = new eggs ("Grass", 0, 5, 0, 0, 10, grassEggimage)
console.log(greenEgg);

// Yellow egg choice
let electricEggimage = new Image(); 
electricEggimage.src = "test.img";
let yellowEgg = new eggs ("Electric", 0, 5, 0, 0, 10, electricEggimage)
console.log(yellowEgg);





