/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

  //criação de um array bi-dimensional
  var forma=[];
  forma= Array(2);

  forma[0] = (100,100);
  forma[1] = (100,200);
  forma[2] = (200,100);

  //desenha o poligono a partir dos pontos passada
  function draw_polygon() {	
	  var canvas = document.getElementById("tutorial");
    var ctx = canvas.getContext("2d");
	
	  ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10,10,55,50); 

	  ctx.moveTo(100,20);
	  ctx.lineTo(100,27);
	  ctx.stroke();
  }

  //função que desenha uma reta a partir de 2 pontos
  function draw_line(p1, p2) {
	  var canvas = document.getElementById("tutorial");
    var ctx = canvas.getContext("2d");
    var canvasData = ctx.createImageData(300,300);

	  ctx.moveTo(p1[0],p1[1]);
    ctx.lintTo(p2[0],p2[1]);
    ctx.stroke();
  }
