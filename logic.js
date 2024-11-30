//Game foods
let egg_level = 0;
let apple = 1;
let bread = 1;
let vegetables = 0.5;
let steak = 5;

class egg1 {
    constructor(type, level, vitality, strength, hunger, happiness) {
        this.type = type;
        this.level = level;
        this.vitality = vitality;
        this.strength = strength;
        this.hunger = hunger;
        this.happiness = happiness;
    }
}

let canvas = document.getElementById('first_canvas');
let ctx = canvas.getContext('2d');
let img = new Image();
let desiredWidth = 550; // Adjust this value 
let desiredHeight = 400; // Adjust this value
img.src = "./img/backgroundtest.jpg"; 


img.onload = function() {
    ctx.drawImage(img, 0, 0, desiredWidth, desiredHeight); 
};


