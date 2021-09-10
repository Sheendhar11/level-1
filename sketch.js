var cupboardImg, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8;
var jerry1Img, jerry2Img, jerry3Img, jery4Img, bg, bgImg;
var butch1Img, butch2Img, butch3Img;
var cheese1Img, cheese2Img;
var coinsImg, seathighlightImg;
var tom1Img, tom2Img, tom3Img;


function preload(){
  
  cupboardImg = loadImage("assets2/cupboard.PNG");
  jerry1Img= loadImage("assets2/WHEN JERRY IS IN THE ROOM.png");
  jerry2Img= loadImage("assets2/WHEN JERRY REACHED CHEESE.png");
  jerry3Img= loadImage("assets2/JERRY IN CAGE.jpg");
  jerry4Img= loadImage("assets2/JERRY RUNNING.jpg");
  butch1Img= loadImage("assets2/BUTCH LOOKING FOR JERRY.png");
  butch2Img= loadImage("assets2/BUTCH CAUGHT JERRY.jpg");
  butch3Img= loadImage("assets2/BUTCH AFTER CATCHING JERRY.png");
  cheese1Img=loadImage("assets2/cheese.jpg");
  cheese2Img=loadImage("assets2/cheese 2.jpg");
  coinsImg=loadImage("assets2/coins.jpg");
  seathighlightImg= loadImage("assets2/seat highlight.jpg");
  tom1Img=loadImage("assets2/TOM LOOKING FOR JERRY.PNG");
  tom2Img = loadImage("assets2/TOM CATCHING JERRY.PNG");
  tom3Img = loadImage("assets2/TOM AFTER CATCHING JERRY.jpg");
  bgImg = loadImage("assets2/background.jpg")
}

function setup() {

  
  createCanvas(displayWidth-100,500);

  //adding the background image
  bg = createSprite(displayWidth-100,500)
  bg.addImage(bgImg)
  bg.scale = 5.0
  
wall1= createSprite(30,14,150,90);
wall2=createSprite(229,273,5,400);
wall3=createSprite(500,4,5,300);
wall4=createSprite(500,411,5,300);
wall5=createSprite(800,200,5,200);
wall6=createSprite(1000,411,5,200);
wall7=createSprite(1178,306,200,5);
wall8=createSprite(1196,490,150,90);

tom1= createSprite(100,200)
tom1.addImage(tom1Img)
tom1.scale=0.05

tom1= createSprite(550,300)
tom1.addImage(tom1Img)
tom1.scale=0.05

cupboard = createSprite()


}

function draw() {
  background('Blue'); 

  text(mouseX+":"+ mouseY,mouseX,mouseY)
  

  
drawSprites();

}
