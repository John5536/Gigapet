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
let video = document.createElement('video'); 

let desiredWidth = 700; 
let desiredHeight = 700; 

video.src = "./img/homebackground.mp4";
video.autoplay = true; 
video.muted = true;    
video.loop = true;    

video.onloadeddata = function() {
    video.play(); 

    function drawFrame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        ctx.drawImage(video, 0, 0, desiredWidth, desiredHeight); 
        requestAnimationFrame(drawFrame);
    }

    drawFrame(); 
};


