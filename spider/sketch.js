function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('arial');
  background(0);
  noStroke();

}

function draw() {


  fill(0);
  rect(0, 0, windowWidth, windowHeight - 120);
  noStroke();
  fill(255);

 
 var y = map(mouseY, 0, height,50, windowHeight-150)
var x = map(mouseX, 0, width, windowWidth/2-50, windowWidth/2+50);
  
  fill(0);
  stroke(0);


  
  var density = map(mouseX, 0, width, 20, 50);
  var density2 = map(mouseY, 0, height-150, 20, 50);

  for (var qx = 50; qx <= width-50; qx += density) {
    for (var qy = 50; qy <= height - 150; qy += density2) {

      var count = 0;

      stroke(255, count, count,80);
      count++;

      line(qx, qy, width / 2, height / 2 - 55);

    }
    
    
  }
     
  for (var ey = 0; ey <= height - 110; ey += 100) {
    for (var ex = 0; ex <= width; ex += 100) {
      stroke(255);
      strokeWeight(1);
      line(0, ey, x, y);


      line(windowWidth, ey, x, y);

    }
  }

  
  
  if (mouseIsPressed == true) {
    strokeWeight(20);
    stroke(255);
    line(pmouseX, pmouseY, mouseX, mouseY);
  } 
  
stroke(0);
  fill(0)
  ellipse(x, y-15, 60, 70);
  ellipse(x, y-50, 40, 50);
  
  stroke(255);
  fill(255, 200, 0, 255);
  
  ellipse(x-17, y-65, 10, 10);
  ellipse(x+17, y-65, 10, 10);





  textSize(25);
  noStroke();
  fill(0);
  textAlign(CENTER, TOP);
  text("A color like that of snow, milk, or bone is said kind of WHITE. Thus, that is not TRUE. Cuz it's always just a white little lies.. . . ,", 10, windowHeight - 100, windowWidth, windowHeight - 10);



}

function doubleClicked() {
  fill(0);
  rect(0, windowHeight - 120, windowWidth, windowHeight);
}