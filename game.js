var cvs = document.getElementById("canvas") ;
var ctx = cvs.getContext("2d");

// load images

var bird = new Image();
var bg= new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "bird.png";
bg.src = "bg.png";
fg.src = "fg.png";
piepNorth.src = "pipeNorth.png" ;
pipeSouth.src = "piepSouth.png" ;

// some variables

var gap = 80;
var constant = pipeNorth.height + gap ;
var bx = 10;
var by= 150;
var gravity = 1;

// drw images 

function draw()
{ 
    ctx.drawImage(bg,0,0) ;
    
    ctx.drawImage(pipeNorth,100,0) ;
    ctx.drawImage(pipeSouth,100, 0+constant) ;
     
    ctx.drawImage( fg , 0 ,cvs.height - fg.height ) ;
    
    ctx.drawImage(bird,10,150) ;  
    
    by += gravity ;
    requestAnimationFrame(draw);

}
