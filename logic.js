//Game foods
let egg_level = 0;
let apple = 1;
let bread = 1;
let vegetables = .5;
let steak = 5;
//events
let btn_clicked_test = document.getElementById("create_test")


let cat = document.getElementById("caats");

btn_clicked_test.addEventListener("click", function(){
    
    btn_clicked_test = true;
    cat.src= "img/cats.png";
    console.log(btn_clicked_test);
    
    cat.style.visibility = "visible";

});


