var cvs = document.getElementById("canvas") ;
var ctx = cvs.getContext("2d");

// load images

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();


bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png" ;
pipeSouth.src = "images/pipeSouth.png" ;

//audio
var fly= new Audio();
var point= new Audio();
var die= new Audio();

 fly.src= "sound/fly.wav";
 point.src= "sound/point.wav";
 die.src= "sound/die.mp3";

// some variables

var gap = 100;
var constant = pipeNorth.height + gap ;
var bx = 10;
var by = 150;
var gravity = 2	;
var score =0 ;

document.addEventListener('keydown',moveUp);

function moveUp(){
	by -= 35;  
	fly.play();
}

//pipe coordinates

	var pipe = [];
	
	pipe[0] = {  x:cvs.width ,  y:-50}

// draw images 

function draw()
{ 
    
	ctx.drawImage(bg,0,0) ;
	
	
    for(var i=0; i<pipe.length; i++)
	{	
		ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y) ;
		ctx.drawImage(pipeSouth,pipe[i].x, pipe[i].y + pipeNorth.height + gap) ;
		pipe[i].x-- ;
		
		if(pipe[i].x == 125) //generating random pipes
		{	pipe.push({
				x:cvs.width,	
				y:Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
			});
		}	
		if(pipe[i].x == 5	) { score++; point.play(); } //score increase
		//detecting collicsion 
		if((bx + bird.width>=pipe[i].x && bx <=pipe[i].x + pipeNorth.width) 
		&& (by<=pipe[i].y + pipeNorth.height || by+bird.height>= pipe[i].y+ pipeNorth.height + gap)
		){  die.play();
			if(score<=2) alert("Lol! You Suck at this");
			else if(score<=6) alert("Not Bad!");
			else if(score<=11) alert("Great Job!");
			else if(score>11) alert("Insane!");
			location.reload(True); //reload the page
		}		
	}	 
    
	ctx.drawImage( fg , 0 ,cvs.height - fg.height ) ;
    ctx.drawImage(bird,bx,by) ;  
    
    by += gravity ;
	
	ctx.fillStyle="#fff";
	ctx.font = "20px times new roman";
	ctx.fillText("Score :" + score,cvs.width - 100, cvs.height - 10);
    requestAnimationFrame(draw);	
}
draw();
