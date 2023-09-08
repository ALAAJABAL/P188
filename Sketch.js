function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center()
    canvas.mouseReleased(IdentifySketch)
}

function draw()
{
    stroke("black")
    strokeWeight(13)
    if(mouseIsPressed)
    {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

function clearCanvas()
{
    background("white")
}



function preload() 
{
    model = ml5.imageClassifier("DoodleNet")
}



function IdentifySketch()
{
    model.classify(canvas, showResult)
}



function showResult(error,result)
{
if(error){
    console.log(error)
}

else{
    console.log(result)
    document.getElementById("Sketch").innerHTML = result[0].label
    document.getElementById("accuracy").innerHTML = result[0].confidence
}
}