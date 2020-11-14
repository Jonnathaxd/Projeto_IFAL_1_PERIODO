//colisão   
//mostrar uma imagem da tela

const diabo = new Image();
diabo.src="data:image/jpeg;base64,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";
history
j
d
dj