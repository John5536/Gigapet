//Game foods
let egg_level = 0;
let apple = 1;
let bread = 1;
let vegetables = .5;
let steak = 5;
class egg1 {
    constructor(type,level,vitality,strength,hunger,happiness){
        this.type =type;
        this.level = level;
        this.vitality = vitality;
        this.strength = strength;
        this.hunger = hunger;
        this.happiness = happiness
    }
}

function background1 (){
    let testbackground = document.createElement("img");
    Image.src ="./img/backgroundtest.jpg" ;

    let container = document.getElementById("canvas_container");

    container.appendChild(testbackground);
}

document.addEventListener('DOMContentLoaded', function() { 
    background1(); });



