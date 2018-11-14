var x,y,r;
function setup() {
createCanvas(500,500);
background(30,0,0);
}

function draw() {
  Interaction2();
  noStroke();
  
  //yellow
  fill(255,255,0);
  x=50, y=50, r=20;
  Interaction();
  ellipse(x,y,r,r);
 
  
  //pink
  fill(255,0,255,3);
  x=70, y=100, r=40;
   Interaction();
  ellipse(x,y,r,r);
  
  //yellow
  stroke(255,255,255,50);
  strokeWeight(20);
  fill(255,255,0,100);
  x=340, y=70, r=20;
   Interaction();
  ellipse(x,y,r,r);
  
  //darkYellow
  stroke(255,255,255,1);
  strokeWeight(5);
  fill(170,150,0,255);
  x=390, y=95, r=20;
   Interaction();
  ellipse(x,y,r,r);
  
  //red
  noStroke();
  fill(255,0,0,50);
  x=440, y=55, r=20;
   Interaction();
  ellipse(x,y,r,r);
  
  //green
  fill(0,150,0,50);
  x=310, y=150, r=70;
   Interaction();
  ellipse(x,y,r,r);
  
  //blackInGreen
  stroke(0,255,255,100);
  strokeWeight(10);
  fill(0,0,0,255);
  x=310, y=150, r=20;
   Interaction();
  ellipse(x,y,r,r);
  
  //purple
  stroke(255,255,255,1);
  strokeWeight(20);
  fill(125, 0, 225, 50);
  x=200, y=200, r=200;
   Interaction();
  ellipse(x,y,r,r);
  
  //pink
  fill(255,0,255,20);
  x=250, y=125, r=50;
   Interaction();
  ellipse(x,y,r,r);
  
  //blackInPurple
  noStroke();
  fill(0,0,0,100);
  x=180, y=180, r=150;
   Interaction();
  ellipse(x,y,r,r);
  
  //mint
  fill(0,255,200,150);
  x=255, y=225, r=45;
   Interaction();
  ellipse(x,y,r,r);
  
  //mint2
  fill(0,255,255,50);
  x=220, y=235, r=20;
   Interaction();
  ellipse(x,y,r,r);
  
  //darkYellow
  fill(170,150,0,235);
  x=230, y=270, r=45;
   Interaction();
  ellipse(x,y,r,r);
  
  //darkYellow2
  fill(170,150,0,100);
   Interaction();
  x=265, y=265, r=60;
  ellipse(x,y,r,r);
  
  //skyBlue
  fill(0,150,150,100);
  x=265, y=315, r=50;
   Interaction();
  ellipse(x,y,r,r);
  
  //lightPink
  fill(255,0,255,50);
  x=190, y=300, r=45;
   Interaction();
  ellipse(x,y,r,r);
  
  fill(250,250,255,100);
  x=190, y=300, r=45;
   Interaction();
  ellipse(x,y,r,r);
  
  //orange
  fill(255,80,0,50);
  x=115, y=320, r=40;
   Interaction();
  ellipse(x,y,r,r);
  
  //darkYellow
  fill(170,150,0,50);
  x=95, y=300, r=40;
   Interaction();
  ellipse(x,y,r,r);
 
  //lightRed
  fill(155,0,0,100);
  x=105, y=340, r=40;
   Interaction();
  ellipse(x,y,r,r);
 
  //Red
  fill(255,0,0,20);
  x=80, y=340, r=40;
   Interaction();
  ellipse(x,y,r,r);
  
  //lightYellow
  fill(255,255,0,100);
  x=60, y=340, r=40;
   Interaction();
  ellipse(x,y,r,r);
  
  fill(255,255,255,100);
  x=60, y=340, r=40;
   Interaction();
  ellipse(x,y,r,r);
  
  //lightPink
  fill(255,0,255,50);
  x=45, y=290, r=50;
   Interaction();
  ellipse(x,y,r,r);
  
  fill(255,255,255,100);
  x=45, y=290, r=50;
   Interaction();
  ellipse(x,y,r,r);
  
  //blackInLightPink
  fill(0,0,0,255);
  x=50, y=280, r=20;
   Interaction();
  ellipse(x,y,r,r);
  
  //skyBlue
  fill(0,150,150,100);
  x=60, y=420, r=30;
   Interaction();
  ellipse(x,y,r,r);
  
  //yellow
  fill(255,255,0,200);
  x=230, y=400, r=20;
   Interaction();
  ellipse(x,y,r,r);
  
  //blue
  stroke(255,255,255,50);
  strokeWeight(3);
  fill(0,0,255,255);
  x=450, y=255, r=20;
   Interaction();
  ellipse(x,y,r,r);
  
  //beige
  noStroke();
  fill(50,0,0,50);
  x=375, y=350, r=20;
   Interaction();
  ellipse(x,y,r,r);
  
  fill(255,255,255,100);
  x=375, y=350, r=20;
   Interaction();
  ellipse(x,y,r,r);
  
  //lightPink
  noStroke();
  fill(255,0,255,50);
  x=420, y=370, r=80;
   Interaction();
  ellipse(x,y,r,r);
  
  fill(255,255,255,100);
  x=420, y=370, r=80;
   Interaction();
  ellipse(x,y,r,r);
  
  //yellow
  fill(255,255,0,255);
  x=410, y=425, r=10;
   Interaction();
  ellipse(x,y,r,r);
  
  //red
  fill(255,0,0,255);
  x=400, y=460, r=20;
   Interaction();
  ellipse(x,y,r,r);
}

function Interaction(){
if(keyIsPressed==true && keyCode==DOWN_ARROW){
  y=y+r;
  }
  else if(keyIsPressed==true && keyCode==UP_ARROW){
  y=y-r;
  }
  else if(keyIsPressed==true && keyCode==RIGHT_ARROW){
  x=x+r;
  }
  else if(keyIsPressed==true && keyCode==LEFT_ARROW){
  x=x-r;
  }
}

function Interaction2(){
if(mouseIsPressed==true && mouseButton==LEFT){
fill(random(255), 0,0,random(255));
var radius=random(100);
ellipse(mouseX, mouseY, radius, radius);
}

else if(mouseIsPressed==true && mouseButton==CENTER){
fill(0,0,random(255),random(255));
var radius=random(100);
ellipse(mouseX, mouseY, radius, radius);
}

}
