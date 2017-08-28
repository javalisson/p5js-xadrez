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

	desenha_tabuleiro();
}

function desenha_tabuleiro() {
	desenha_linha_1(0);
	desenha_linha_2(75);
	desenha_linha_1(150);
	desenha_linha_2(225);
	desenha_linha_1(300);
	desenha_linha_2(375);
	desenha_linha_1(450);
	desenha_linha_2(525);
}

function desenha_linha_1(y) {
	// desenha o 1o quadrado preto
	fill(0, 0, 0);
	rect(0, y, 75, 75);
	// desenha o 1o quadrado branco
	fill(255, 255, 255);
	rect(75, y, 75, 75);
	// desenha o 2o quadrado preto
	fill(0, 0, 0);
	rect(150, y, 75, 75);
	// desenha o 2o quadrado branco
	fill(255, 255, 255);
	rect(225, y, 75, 75);
	// desenha o 3o quadrado preto
	fill(0, 0, 0);
	rect(300, y, 75, 75);
	// desenha o 3o quadrado branco
	fill(255, 255, 255);
	rect(375, y, 75, 75);
	// desenha o 4o quadrado preto
	fill(0, 0, 0);
	rect(450, y, 75, 75);
	// desenha o 4o quadrado branco
	fill(255, 255, 255);
	rect(525, y, 75, 75);
}

function desenha_linha_2(y) {
	// desenha o 1o quadrado preto
	fill(255, 255, 255);
	rect(0, y, 75, 75);
	// desenha o 1o quadrado branco
	fill(0, 0, 0);
	rect(75, y, 75, 75);
	// desenha o 2o quadrado preto
	fill(255, 255, 255);
	rect(150, y, 75, 75);
	// desenha o 2o quadrado branco
	fill(0, 0, 0);
	rect(225, y, 75, 75);
	// desenha o 3o quadrado preto
	fill(255, 255, 255);
	rect(300, y, 75, 75);
	// desenha o 3o quadrado branco
	fill(0, 0, 0);
	rect(375, y, 75, 75);
	// desenha o 4o quadrado preto
	fill(255, 255, 255);
	rect(450, y, 75, 75);
	// desenha o 4o quadrado branco
	fill(0, 0, 0);
	rect(525, y, 75, 75);
}