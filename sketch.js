var p1,p2,p3,p4;
var bluePositions;
var turn="blue";
var gameState=1;

function preload(){
  backgroundImage=loadImage("images/ludo1.png")
  dice1=loadImage("images/dice1.jpg");
  dice2=loadImage("images/dice2.jpg");
  dice3=loadImage("images/dice3.jpg");
  dice4=loadImage("images/dice4.jpg");
  dice5=loadImage("images/dice5.jpg");
  dice6=loadImage("images/dice6.jpg");

  bluePlayer=loadImage("images/player peice2.png");
  greenPlayer=loadImage("images/player peice4.png");


}

function setup(){
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(windowWidth/2,windowHeight/2);
  bg.addImage(backgroundImage);
  bg.scale=2.5

  p1=new Player(480,530,bluePlayer);
  p2=new Player(555,535,bluePlayer);
  p3=new Player(480,455,bluePlayer);
  p4=new Player(555,460,bluePlayer);

   g1x=windowWidth/2+132;
   g1y=windowHeight/4-38;
  g1=new Player(g1x,g1y,greenPlayer);



  dice=createSprite(windowWidth-200,windowHeight/2,50,50);
  dice.addImage(dice1);

  game=new Game();

  
         refx=windowWidth/2-40;
         refy=windowHeight-105;
 
  
 
  createSprite(refx+(40*1), refy-(37*(0.1)),10,10);

  
}

function draw(){
  background(255);
  drawSprites();

  if(mousePressedOver(dice)){
    game.rollDice();
  }

  if(gameState===1){
    game.play();
  }

  if(mousePressedOver(p1.body)){
    text("hello", 100,300);
  }

}


