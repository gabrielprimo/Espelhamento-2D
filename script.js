/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

  function draw() {	
	  var canvas = document.getElementById("tutorial");
    var ctx = canvas.getContext("2d");
	
	  ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10,10,55,50); 

	  ctx.moveTo(100,20);
	  ctx.lineTo(100,27);
	  ctx.stroke();
  }

  function draw_line() {
	  var canvas = document.getElementById("tutorial");
    var ctx = canvas.getContext("2d");
    var canvasData = ctx.createImageData(300,300);

	  for(var x=0; x<300; x++) {
		  setPixel(canvasData,x,200,200,255,0,255);	
	  }

	  ctx.putImageData(canvasData, 0, 0);
  }
