img = "";

function preload()
{
    img = loadImage('dog_cat.jpg');

}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
}

function modelLoaded(){
    console.log("modelLoaded");
}

function draw()
{
    image(img, 0,0, 640, 420);
    fill('#FF0000');
    text("Dog", 45, 75);

    text("cat", 320, 120);
    fill('#FF0000');
    
    noFill();
    rect(30, 60, 450, 350);
    stroke("#FF0000");

    noFill();
    rect(300, 90, 450, 350);
    stroke("#FF0000");
}
