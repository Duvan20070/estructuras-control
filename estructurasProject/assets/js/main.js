/**
 * Estructuras de control simples
 */
const edad = 20;

if (edad >= 18){
    document.getElementById('test').innerHTML = "Eres mayor de Edad.";
}

/**
 * Estructura de Control Doble
 * Ejemplo #1
 */

if (edad >= 18){
   document.getElementById('test').innerHTML = '<br>Eres mayor de Edad.'; 
}else{
    document.getElementById('test').innerHTML = '<br>Eres menor de Edad.';
}

/**
 * Estructura de Control Doble
 * Ejemplo #2
 */

const hora = new Date().getHours();
let saludo;

if (hora < 18){
    saludo = 'Buenos dias'
}else{
    saludo = 'Buenas noches'
}

document.getElementById('test2').innerHTML = `<br>${saludo}`;

/**
 * Estructura de Control Multiples
 * 
 */

const dia = new Date().getDay();
let diaSemana;
switch (dia) {
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes';
        break;
    case 3:
        diaSemana = 'Miercoles';
        break;
    case 4:
        diaSemana = 'Jueves';
        break;
    case 5:
        diaSemana = 'Viernes';
        break;
    case 6:
        diaSemana = 'Sabado';
        break;
    default:
        diaSemana = 'Dia no valido';
}

document.getElementById('test3').innerHTML = `<br>Hoy es ${diaSemana}.`;