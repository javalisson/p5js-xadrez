/**
 * p5js xadrez
 * 
 * 
 */

// chamada no inicio do programa
function setup() {
	// cria o quadro, com dimensoes 900 x 400
	createCanvas(600, 600);
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de preto
	background(0, 0, 0);

	// desenha o 1o quadrado preto
	fill(0, 0, 0);
	rect(0, 0, 75, 75);
	// desenha o 1o quadrado branco
	fill(255, 255, 255);
	rect(75, 0, 75, 75);
	// desenha o 2o quadrado preto
	fill(0, 0, 0);
	rect(150, 0, 75, 75);
	// desenha o 2o quadrado branco
	fill(255, 255, 255);
	rect(225, 0, 75, 75);
	// desenha o 3o quadrado preto
	fill(0, 0, 0);
	rect(300, 0, 75, 75);
	// desenha o 3o quadrado branco
	fill(255, 255, 255);
	rect(375, 0, 75, 75);
	// desenha o 4o quadrado preto
	fill(0, 0, 0);
	rect(450, 0, 75, 75);
	// desenha o 4o quadrado branco
	fill(255, 255, 255);
	rect(525, 0, 75, 75);
}
