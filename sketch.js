//comentarios
//setup() se ejecuta una vez
//al principio de los tiempos

//se puede hacer en variables, hayq ue crearlas y a esto se le llama DECLARAR
//se declara asi en javascript var X;
var diametro;

//despues de declarar se le puede dar un valor
//x = 10;
diametro = 100;

var miColor = color(random(255));

//hay dos variables, locales y globales
//GLOBALES: fuera de funcion
//LOCALES: dentro de funcion

//globales: se pueden usar en cualquier parte
//locales: solo dentro de la funcion

//las funciones tambien se declaran.. luego se pueden llamar y asi se declaran en javascript

function miFuncionBacan(){
  //esto es lo que hace la funcion, se le llama cuerpo
  
}
//ejecutar o llamar la funcion

//miFuncionBacan();

function setup() {
  
  createCanvas(800,600);   
  
  //pintar fondo
  //background(color);
  //1: grayscale, 0 es negro, 255 todo
  //2: grayscale + alpha
  //3:RGB red green blue. 0 es nada y 255 todo
  //4;RGB + alpha
  //alpha: 0 es transparente, 255 es solido
}


//draw() corre justo despues de setup()
//draw() se ejecuta 60 veces por segundo

function draw() {
  
  //pintar fondo
  background(0,128,128); //esto puede estar al principio o al final.. lo que hace es que dibuja el fondo la elipse y fondo y vice versa
  background(miColor);
  
  //definir anchos de las figuras
  //strokeweight(px);
  strokeWeight(3); //grosor del contorno
  
  //definir color del bordo (ancho)
  //stroke(color);
  //noStroke() no hay bordes
  stroke(0,0,128);
  
  //definir color relleno
  //fill(color);
  
  fill(0,255, 255,100);
  fill(255, random(100),0,100);
  
  //dibujemos elipse
  //ellipse(posX, posY, width, height);
  //medidas en pixeles
  //usamos variables de p5.js
  //mouseX, mouseY que sabe posMouse
  ellipse (500,100,50,50); //estatico
  ellipse (mouseX,mouseY, 50, 50); //sigue al mouse
  ellipse(mouseX, mouseY, diametro, diametro);
  
  //asignarle nuevo valor al diametro
  diametro = diametro + 1;
  diametro = random(100);
}