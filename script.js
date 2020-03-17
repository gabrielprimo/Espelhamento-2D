/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

  //criação de um array bi-dimensional
  var forma= [];

  //3 pontos que formam um triangulo são colocados no array forma
  forma.push([100,100]);
  forma.push([100,200]);
  forma.push([200,100]);

  //desenha o poligono a partir dos pontos colocados no array forma
  function draw_polygon() {	
	  var canvas = document.getElementById("tutorial");
    var ctx = canvas.getContext("2d");
    var i=0;
    //cada elemento da forma possui uma coordenada x,y
    //ou seja um ponto
    for(i; i< forma.length-1; i++) {
        draw_line(forma[i],forma[i+1]);
    }
    draw_line(forma[0],forma[i]);
  }

  //função que desenha uma reta a partir de 2 pontos
  //cada ponto possui 
  function draw_line(p1, p2) {
	  var canvas = document.getElementById("tutorial");
    var ctx = canvas.getContext("2d");
    var canvasData = ctx.createImageData(300,300);

	  ctx.moveTo(p1[0],p1[1]);
    ctx.lineTo(p2[0],p2[1]);
    ctx.stroke();
  }

  //função que recebe o eixo 'x' ou 'y' e altera as coordenadas
  //do array forma para que a forma seja translada no eixo escolhido
  //com o valor passado como parâmetro.
  function transladar(eixo, valor) {
    /*
    faça aqui o seu algoritmo para realizar o translado
    
    //a última linha deverá invocar a função draw_polygon() para desenhar
    //o poligono transladado no canvas
    draw_poligon()
    */
  }
