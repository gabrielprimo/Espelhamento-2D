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

  function draw_line(p1, p2) {
	  var canvas = document.getElementById("tutorial");
    var ctx = canvas.getContext("2d");
    var canvasData = ctx.createImageData(300,300);

	  ctx

	  ctx.putImageData(canvasData, 0, 0);
  }
