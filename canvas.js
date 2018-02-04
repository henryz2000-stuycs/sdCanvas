var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");
var canvas = document.getElementById("slate");

var canvasContext = canvas.getContext('2d');
canvasContext.fillStyle = "#FF0000";

var shape = "square";
var canvasX = parseInt(canvas.getAttribute("width"));
var canvasY = parseInt(canvas.getAttribute("height"));

var clearCallback = function(e){
    canvasContext.clearRect(0, 0, canvasX, canvasY);
}

var toggleCallback = function(e){
    if (shape == "square"){
	console.log("shape changed to circle");
	shape = "circle";
    }
    else{
	console.log("shape changed to square");
	shape = "square";
    }
};

var canvasCallback = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x);
    console.log(y);
    if (shape == "square"){
	console.log("make square");
	canvasContext.fillRect(x, y, canvasX/20, canvasY/20);
    }
    else{
	console.log("make circle");
	canvasContext.beginPath();
	canvasContext.arc(x, y, (canvasX+canvasY)/100, 0, 2*Math.PI);
	canvasContext.fill();
    }
};

clear.addEventListener("click", clearCallback);
toggle.addEventListener("click", toggleCallback);
canvas.addEventListener("click", canvasCallback);
