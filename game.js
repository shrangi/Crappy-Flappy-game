var cvs = document.getElementById("canvas") ;
var ctx = document.getContext("2d");

// load images

var bird = new Image();
var bg= new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
piepNorth.src = "images/pipeNorth.png" ;
pipeSouth.src = "images/piepSouth.png" ;

// some variables

var gap = 80;
var constant = pipeNorth.height + gap ;

// drw images 

function draw()
{ 
    ctx.drawImage(bg,0,0) ;
    ctx.drawImage(pipeNorth,100,0) ;
    ctx.drawImage(pipeSouth,100, 0+constant) ;
    
  

}
