const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  top_wall = new Ground(200,10,400,20)
  left = new Ground(10,200,20,400)
  right = new Ground(390,200,20,400)
  ground = new Ground(200,390,400,20)

  
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
 
  top_wall.show()
 left.show()
 right.show()
 ground.show()
 
  Engine.update(engine);
}

