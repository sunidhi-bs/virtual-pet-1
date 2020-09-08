//Create variables here
var dog,happydogImg;
var database;
var foodS,foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  happydogImg = loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  console.log(database);
  
  var dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.25;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(46,139,87);
  
  if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydogImg);
  }

  drawSprites();
  text("press up arrow to feed drago",250,250)
  fill(255);
 
  //add styles here

}
function readStock(data){
foodS = data.val();
}
function writeStock(x){
if(x<=0){
  x = 0
}else{
  x = x-1;
}
database.ref('/').update({
  food:x
})

}


