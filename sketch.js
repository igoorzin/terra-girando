function setup() {
  createCanvas(1920, 1080, WEBGL); //plano 3D
  terra=loadImage('terra.jpg')
}

function draw() {
  background(205, 102, 94); //cor de fundo
  rotateY(millis()/3000); // rotação da terra
  texture(terra); //textura da terra, imagem.
  sphere(300, 400); //esfera 3D
  
  
}
