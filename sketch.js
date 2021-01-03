//Create variables here
var happydog,dog,foodS,foodStock, database;

function preload()
{
  //load images here
  dogImg=loadImage("dogImg.png");
  dogImg2=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(600, 500);


  database=firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);

}

function draw() {  
  background(46,139,87);

  if(keyDown===UP_ARROW){
    writeStock(foodS);
    dog.addImage(dogImg2);
  }

  stroke("red");
  fill("red")
  textSize("90")
  text("Note:Press UP_ARROW key to feed Drago Milk",170,30);

 /* fill("blue")
  textSize("40")
  text("Food Remaining:",260,200);
  */

  drawSprites();
  //add styles here
}

function readStock( data ){

  foodS=data.val();

}

function writeStock( x ){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })

}
