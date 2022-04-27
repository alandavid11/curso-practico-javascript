// Codigo del cuadrado
console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Codifo del triangulo
/* console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
); */


const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (alturaTriangulo * baseTriangulo)/2;
}

console.groupEnd();

//Codifo del circulo
console.group("Circulos");
// Radio

//Diametro
function diametroCirculo(radio){
    return radio*2;
}
//PI
const PI = Math.PI;
console.log("El PI es: " + PI);
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
//Area
function areaCirulo(radio){
    return (radio*radio) * PI;
}

console.groupEnd();

// Aqui intereactuamos con el HTML

function calcularPerimetroCuadrado(){
const input = document.getElementById("InputCuadrado");
const value = input.value;
const perimetro = perimetroCuadrado(value);
alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}