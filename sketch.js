function setup() {
  createCanvas(innerWidth, 480);
}

var ellipseX=0
var ellipseY=0
var Xspeed=5
var Yspeed = 4
var R = 255
var G = 0
var B = 50
var Rchange =-1
var Gchange =2
var Bchange =1


function draw() {
  noStroke();
fill(255)
ellipse(mouseX,mouseY,30)

  fill(R,G,B)
  ellipse(ellipseX,ellipseY,50)
  ellipseX+=Xspeed
  ellipseY+=Yspeed
  R+=Rchange
  G+=Gchange
  B+=Bchange
  
  if(ellipseX>=innerWidth || ellipseX<=0){
    Xspeed*=-1
  }
  if(ellipseY>=480 || ellipseY<=0){
    Yspeed*=-1
  }

  if(R<=0 || R>=255){
    Rchange*=-1
  }
  if(G<=0 || G>=255){
    Gchange*=-1}
  if(B<=0 || B>=255){
   Bchange*=-1
    }
  

}