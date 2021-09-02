//Renaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  bg = loadImage("assets/background.gif")

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(600,580,1200,20)
  tower = new Tower(150,350,160,310)
  canon = new Canon(180,110,100,50,-PI/4)
  canonball = new Ball(canon.x,canon.y)
}

function draw() {
  background(bg);
  Engine.update(engine);

// ground.display()
  tower.display()
 canon.display()
  canonball.display()
}

function keyReleased(){
  canonball.shoot()
}
