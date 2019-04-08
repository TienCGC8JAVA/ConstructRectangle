function Rectangle(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createRectangle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var width = Math.floor(Math.random() * 100);
    var height = Math.floor(Math.random() * 100);
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var color = getRandomColor();
    var rectangle = new Rectangle(x, y, width, height);
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    ctx.fill();
}

function createMultipleRectangle()
{
    for (let i = 0; i < 5; i++) createRectangle();
}

setInterval(createMultipleRectangle, 500);
