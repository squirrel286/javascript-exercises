// Ejercicios condiciones IF - ELSE
console.log("Conexión con js establecida...");

// Ejercicio 1
/* Edad para votar
 Solicita la edad del usuario mediante prompt().
 Muestra con alert() si puede votar (18 años o más) o no. */

function edadVotar() {
    // Input conversión string a número
    let edad = parseInt(prompt("Ingrese su edad: "));
    // Condición IF - ELSE IF - ELSE
    if (edad >= 18) {
        alert("Su edad de " + edad + " años está aprobada para votar.");
    } else if (edad > 0 && edad < 18) { // && Compuerta AND
        alert("Su edad de " + edad + " años no está aprobada para votar.");
    } else {
        alert("Ingrese un valor válido.");
    };
};

// Ejercicio 2
/* Contraseña válida
 Pide una contraseña con prompt().
 Si es igual a "1234", muestra un mensaje de acceso permitido. 
 En caso contrario, muestra acceso denegado. */

function validarContrasena() {
    // Contraseña
    let clave = "1234";
    // Input string
    let contrasena = prompt("Ingrese su contraseña: ");
    // Condición IF - ELSE
    if (contrasena == clave) {
        alert("Acceso permitido.");
    } else {
        alert("Acceso denegado.");
    };
};

// Ejercicio 3
/* Verificar par o impar
 Pide un número por prompt().
 Evalúa si el número es par o impar y muestra el resultado con alert(). */

function verificarParImpar() {
    // input conversión string a número
    let num = parseInt(prompt("Ingrese un número: "));
    // Condición IF - ELSE IF - ELSE
    if (num % 2 == 0) {
        alert("El número es par");
    } else if ( num > 0) { // || Compuerta OR
        alert("El número es impar");
    } else {
        alert("Ingrese un valor numérico válido");
    };
};

// Ejercicio 4
/* Temperatura ambiental
 Solicita la temperatura actual. 
 Si es mayor o igual a 30, muestra “Hace calor”,
 de lo contrario muestra “Clima agradable”. */

function medirTemperatura() {
    // Input conversión string a número
    let temperatura = parseInt(prompt("Ingrese la temperatura: "));
    // Condición IF - ELSE IF - ELSE IF - ELSE
    if (temperatura >= 30) {
        alert("Hace calor");
    } else if (temperatura < 30 && temperatura > 15) {
        alert("Clima agradable");
    } else if (temperatura <= 15) {
        alert("Hace frío");
    } else {
        alert("Ingrese un valor numérico válido");
    };
};

// Ejercicio 5
/* Comparar dos números
 Solicita dos números al usuario. 
 Compara ambos y muestra cuál es mayor o si son iguales. */

function compararNumeros() {
    // Input conversión string a número
    let num1 = parseInt(prompt("Ingrese un número: "));
    // Otro input conversión string a número
    let num2 = parseInt(prompt("Ingrese otro número: "));
    // Condición IF - ELSE IF - ELSE IF - ELSE
    if (num1 > num2) {
        alert("El número " + num1 + " es mayor que el número " + num2);
    } else if (num1 < num2) {
        alert("El número " + num1 + " es menor que el número " + num2);
    } else if (num1 == num2) {
        alert("El número " + num1 + " es igual que el número " + num2);
    } else {
        alert("Ingrese números válidos");
    };
};

// Ejercicio 6
/* Calificación escolar
 Pide una nota entre 1 y 7. 
 Si es 4 o más, muestra “Aprobado”, si es menor, muestra “Reprobado”. */

function aprobarCalificacion() {
    // Input conversión string a número
    let nota = parseInt(prompt("Ingrese su nota: "));
    // Condición IF - ELSE IF - ELSE
    if (nota >= 4 && nota <= 7) {
        alert("Aprobado");
    } else if (nota < 4 && nota > 0) {
        alert("Reprobado");
    } else {
        alert("Ingrese una nota válida");
    };
};

// Ejercicio 7
/* Nombre de usuario válido
 Pide un nombre de usuario. 
 Si el valor ingresado es "admin", muestra “Bienvenido, administrador”. 
 Si no, muestra “Usuario no reconocido”. */

function verificarUsername() {
    // Username
    let username = "admin";
    // Input string
    let inputUsuario = prompt("Ingrese su nombre de usuario: ");
    // Condición IF - ELSE
    if (inputUsuario == username) {
        alert("Bienvenido, administrador.");
    } else {
        alert("Usuario no reconocido.");
    };
};

// Ejercicio 8
/* Verificar si una palabra empieza con "A"
 Pide una palabra al usuario. 
 Verifica si empieza con la letra “A” mayúscula y muestra un mensaje acorde. */

function letraMayuscula() {
    // Input string
    let texto = prompt("Ingresa una palabra: ");
    // Condición IF - ELSE IF - ELSE
    if (texto[0] == "A") {
        alert("La palabra empieza con la letra A");
    } else {
        alert("La palabra no empieza con la letra A mayúscula");
    };
};


// Ejercicio 9
/* Precio con descuento
 Solicita el precio de un producto. 
 Si el precio es mayor a 10000, muestra que aplica descuento. 
 Si no, indica precio normal. */

function descuentoPrecio() {
    // Input conversión string a número
    let precio = parseInt(prompt("Ingresa el precio total: "));
    // Condición IF - ELSE IF - ELSE
    if (precio > 10000) {
        alert("Se aplicará el descuento");
    } else if (precio <= 10000 && precio > 0) {
        alert("No se aplicará descuento");
    } else {
        alert("Ingrese un precio válido");
    };
};

// Ejercicio 10
/* Verificar si una persona puede conducir
 Solicita la edad del usuario y si tiene licencia (por ejemplo, respondiendo "sí" o "no").
 Si tiene 18 o más y respondió que tiene licencia, muestra “Puede conducir”. 
 Si no, muestra “No puede conducir”. */

function licenciaEdad() {
    // Input conversión string a número
    let edad = parseInt(prompt("Ingrese su edad: "));
    // Input string
    let licencia = prompt('¿Tienes licencia de conducir? (Ingresa "si" o "no" sin mayúsculas ni espacios)');
    // Condición IF - ELSE IF - ELSE
    if (edad >= 18 && licencia == "si") {
        alert("Usted puede conducir.");
    } else if (edad < 18 && edad > 0 && licencia == "no") {
        alert("Usted no puede conducir.");
    } else {
        alert("Ingrese valores válidos.");
    };
};