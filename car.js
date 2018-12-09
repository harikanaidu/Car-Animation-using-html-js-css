alert("to play,click ok");
var person=prompt("enter your name","");
alert("welcome to the car animation "+person+"!!!"+" Use arrow keys to move the car, to stop the car click S");
window.onload = function()
	{
		x = 200;
		y = 500;
		speed = 5;
		angle = 0;
		mod = 0;
		
		canvas = document.getElementById("canvas");
		context = canvas.getContext("2d");
		car = new Image();
	    	car.src="blackcar.jpg";
            
	    	window.addEventListener("keydown", keypress_handler, false);
	    	window.addEventListener("keyup", keyup_handler, false);

		var moveInterval = setInterval(function()
		{
			draw();
		}, 30);
	};

	function draw()
	{
	
		context = canvas.getContext("2d");
		context.clearRect(0, 0, 800, 800);



		x += (speed*mod) * Math.cos(Math.PI/180 * angle);
		y += (speed*mod) * Math.sin(Math.PI/180 * angle);

		context.save();
		context.translate(x, y);
		context.rotate(Math.PI/180 * angle);
		context.drawImage(car, -(car.width/2), -(car.height/2));	
		context.restore();
	}

	function keyup_handler(event)
	{
		if( event.keyCode == 83)
		{
			mod = 0;
		}
	}

	function keypress_handler(event)
	{
		console.log(event.keyCode);
		if(event.keyCode == 38)
		{
			angle -= 10;
		}
		if(event.keyCode == 40)
		{
			angle += 10;
		}
		if(event.keyCode == 37)
		{
			mod= -1;
		}
		if(event.keyCode == 39)
		{
			mod= 1;
		}
		if(angle==180)
		{alert("youre out");}
	}