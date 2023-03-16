function setup()
{
  createCanvas(windowWidth, windowHeight).position(0,0).style('z-index', -1);
  createA("https://github.com/Angcroft", "Mi Github", "blank").id("mio");
  textSize(60);
}

function draw()
{
  text("⭐", mouseX, mouseY);  
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}