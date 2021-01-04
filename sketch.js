  //Create variables here
  var dog,foodS,foodStock, database;
  var dogImg,dogImg2;

  function preload()
  {
    //load images here
    dogImg=loadImage("dogImg.png");
    dogImg2=loadImage("dogImg1.png");
  }

  function setup() {
    createCanvas(600, 500);

    var dog1;
    dog1.addImage(dogImg);

    database=firebase.database();
    foodStock=database.ref("Food");
    foodStock.on("value",readStock);
  }

  function draw() {  
    background(46,139,87);

    if(keyCode === UP_ARROW){
      writeStock(foodS);
      dog.addImage(dogImg2);
    }

    noStroke();
    fill("white")
    textSize("90")
    text("Note:Press UP_ARROW key to feed Drago Milk",170,30);

    fill("blue")
    textSize("60")
    text("Food Remaining:"+ foodS,170,200);

    drawSprites();
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
