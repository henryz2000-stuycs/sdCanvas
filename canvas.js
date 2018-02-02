var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");
var canvas = document.getElementById("slate");
var canvasContext = canvas.getContext('2d');
canvasContext.beginPath();

var shape = "square";

var clearCallback = function(e){
    canvasContext.clearRect(0, 0, 500, 500);
}

var toggleCallback = function(e){
    if (shape == "square"){
	shape = "circle";
    }
    else{
	shape = "square";
    }
};

var canvasCallback = function(e){
    
}

clear.addEventListener("click", clearCallback);
toggle.addEventListener("click", toggleCallback);
canvas.addEventListener("click", canvasCallback);
