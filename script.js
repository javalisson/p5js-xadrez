/**
 * p5js xadrez
 * 
 * 
 */
var imgPecas;
function preload() {
	imgPecas = loadImage('img-pecas-iloveimg-resized-2.png');
}

// chamada no inicio do programa
function setup() {
	// cria o quadro, com dimensoes 900 x 400
	createCanvas(600, 600);
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de preto
	background(181, 230, 29);

	desenha_tabuleiro();

	// image(imgPecas, 0, 0, 2400 / 4, 1967 / 4);
	// image(imgPecas, 0, 0, 600 / 8, 492 / 8, 0, 0, 600 / 6, 492 / 2);
	// imageMode(CENTER);
	// image(imgPecas, 0, 0, 450/6, 369/2, 75/2, 75/2, 0.8 * 450/12, 0.8 * 369/4);
	desenha_rei_preto(0, 0);
	desenha_rei_branco(75, 0);
	desenha_rainha_preta(150, 0);
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
	fill(181, 230, 29);
	rect(0, y, 75, 75);
	// desenha o 1o quadrado branco
	fill(174, 30, 230);
	rect(75, y, 75, 75);
	// desenha o 2o quadrado preto
	fill(181, 230, 29);
	rect(150, y, 75, 75);
	// desenha o 2o quadrado branco
	fill(174, 30, 230);
	rect(225, y, 75, 75);
	// desenha o 3o quadrado preto
	fill(181, 230, 29);
	rect(300, y, 75, 75);
	// desenha o 3o quadrado branco
	fill(174, 30, 230);
	rect(375, y, 75, 75);
	// desenha o 4o quadrado preto
	fill(181, 230, 29);
	rect(450, y, 75, 75);
	// desenha o 4o quadrado branco
	fill(174, 30, 230);
	rect(525, y, 75, 75);
}

function desenha_linha_2(y) {
	// desenha o 1o quadrado preto
	fill(174, 30, 230);
	rect(0, y, 75, 75);
	// desenha o 1o quadrado branco
	fill(181, 230, 29);
	rect(75, y, 75, 75);
	// desenha o 2o quadrado preto
	fill(174, 30, 230);
	rect(150, y, 75, 75);
	// desenha o 2o quadrado branco
	fill(181, 230, 29);
	rect(225, y, 75, 75);
	// desenha o 3o quadrado preto
	fill(174, 30, 230);
	rect(300, y, 75, 75);
	// desenha o 3o quadrado branco
	fill(181, 230, 29);
	rect(375, y, 75, 75);
	// desenha o 4o quadrado preto
	fill(174, 30, 230);
	rect(450, y, 75, 75);
	// desenha o 4o quadrado branco
	fill(181, 230, 29);
	rect(525, y, 75, 75);
}

function desenha_rei_preto(x, y) {
	imageMode(CENTER);
	image(imgPecas, 0, 0, 450/6, 369/2, x + 75/2, y + 75/2, 0.8 * 450/12, 0.8 * 369/4);
}

function desenha_rainha_preta(x, y) {
	imageMode(CENTER);
	image(imgPecas, 450/6, 0, 450/6, 369/2, x + 75/2, y + 75/2, 0.8 * 450/12, 0.8 * 369/4);
}

function desenha_rei_branco(x, y) {
	imageMode(CENTER);
	image(imgPecas, 0, 369/2 - 4, 450/6, 369/2, x + 75/2, y + 75/2, 0.8 * 450/12, 0.8 * 369/4);
}