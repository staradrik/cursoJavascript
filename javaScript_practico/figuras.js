
// Código del cuadrado -----------------------------------------------------------------
console.group("Cuadrados");

//PRIMERA PARTE
// const ladoCuadrado = 5;
// const perimetroCuadrado = ladoCuadrado * 4;
// const areaCuadrado = ladoCuadrado * ladoCuadrado;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

//SEGUNDA PARTE
function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

// Código del triángulo -----------------------------------------------------------------
console.group("Triángulos");

//PRIMERA PARTE
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );
// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

//SEGUNDA PARTE
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

//Código del círculo -----------------------------------------------------------------
console.group("Círculos");

//PRIMERA PARTE
// const radioCirculo = 4;//Radio
// const diametroCirculo = radioCirculo *2;// Diámetro
// const PI = Math.PI;// PI
// const perimetroCirculo = diametroCirculo * PI;// Circunferencia
// const areaCirculo = (radioCirculo * radioCirculo) * PI;// Área

// console.log("El radio del círculo es: " + radioCirculo + "cm");
// console.log("El diametro del círculo es: " + diametroCirculo + "cm");
// console.log("PI es: " + PI);
// console.log("El perimetro del círculo es: " + perimetroCirculo + "cm");
// console.log("El area del círculo es: " + areaCirculo + "cm");

//SEGUNDA PARTE

function diametroCirculo(radio) {// Diámetro
  return radio * 2;
}
const PI = Math.PI;
function perimetroCirculo(radio) {// Circunferencia
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
function areaCirculo(radio) {// Área
  return (radio * radio) * PI;
}
console.groupEnd();




// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}