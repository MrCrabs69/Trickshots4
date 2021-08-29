const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;

var boyImg, backgroundImg
var box1, box2
var gameState = "onsling"
var score = 0
var count = 5
function preload() {
  boyImg = loadImage("boy.png")
  backgroundImg = loadImage("background.jpg")
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  engine = Engine.create();
  world = engine.world
  
  ground = new Ground(displayWidth/2, displayHeight-50, displayWidth, 20)
  stand1 = new Stand(displayWidth/2+100, displayHeight/2+300, 150, 10)
  stand2 = new Stand(displayWidth-300, displayHeight/2+200, 150, 10)
  stand3 = new Stand(displayWidth-600, displayHeight/2, 150, 10)
  stand4 = new Stand(displayWidth/2-150, displayHeight/2-200, 150, 10)

ball = new Ball(100,200,20)
sling = new Sling(ball.body,{x:325, y:530})
 box1 = new Box(displayWidth/2+100, displayHeight/2+200, 80, 80)
  box2 = new Box(displayWidth/2+100, displayHeight/2+100, 80, 80)

  box3 = new Box(displayWidth-300, displayHeight/2+100, 80, 80)
  box4 = new Box(displayWidth-300, displayHeight/2, 80, 80)

  box5 = new Box(displayWidth-600, displayHeight/2-100, 80, 80)
  box6 = new Box(displayWidth-600, displayHeight/2-200, 80, 80)

  box7 = new Box(displayWidth/2-150, displayHeight/2-300, 80, 80)
  box8 = new Box(displayWidth/2-150, displayHeight/2-400, 80, 80)
}

function draw() {
  background(backgroundImg); 
  fill("black")
text(mouseX+ ","+ mouseY, mouseX, mouseY)
textSize(35)
text("Score: "+score,width-200,50)
text("Count: "+count,100,50)
 Engine.update(engine)
image(boyImg, 200, displayHeight -400, 150, 350)

  ball.display();
  sling.display();
  box1.display();
  box2.display();
  stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();

box1.score()
box2.score()
box3.score()
box4.score()
box5.score()
box6.score()
box7.score()
box8.score()
if(count === 0){
  gameState = "end"
}
if(gameState === "end"){
  textSize(50)
  text("GAME OVER", displayWidth/2-200, displayHeight/2)
  text("FINAL SCORE "+score, displayWidth/2-250, displayHeight/2+200)
}
}
function mouseDragged() {
  if(gameState === "onsling"){
    Matter.Body.setPosition(ball.body,{x:mouseX, y: mouseY}) 
  }
}
function mouseReleased() {
  if(gameState!="end"){
     sling.fly()
 gameState = "launched"
  count = count -1
  }
  
}
function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(ball.body,{x:100, y: 200})
  sling.attach(ball.body)
  gameState = "onsling" 
}
}