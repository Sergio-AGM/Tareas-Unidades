var Jugar_Otra_Vez = "SI";

do{
    var numero_Computadora = Math.floor(Math.random() * 9) + 1;
    var numero_Usuario;

    do {
        numero_Usuario = parseInt(prompt("Por favor, ingrese un número entre 3 y 6:"));
        
        if (numero_Usuario < 3 || numero_Usuario > 6 || isNaN(numero_Usuario)) {
            alert("Número inválido. Ingrese nuevamente un número entre 3 y 6.");
        }

    }while (numero_Usuario < 3 || numero_Usuario > 6 || isNaN(numero_Usuario)); 
    
    var adivinanza = prompt("¿Su número es MAYOR, MENOR o IGUAL al de la computadora?");

if (adivinanza) {
        adivinanza = adivinanza.toUpperCase();
    }

    var resultado_Real = "";

if (numero_Usuario > numero_Computadora) {
        resultado_Real = "MAYOR";
    } else if (numero_Usuario < numero_Computadora) {
        resultado_Real = "MENOR";
    } else {
        resultado_Real = "IGUAL";
    }

    var mensaje = `La computadora eligió ${numero_Computadora}, usted eligió ${numero_Usuario}. `;

    if (adivinanza === resultado_Real) {
        alert(mensaje + "Su elección es " + resultado_Real + ". ¡Ha adivinado!");
    } else {
        alert(mensaje + "Usted dijo " + adivinanza + ", pero su número es " + resultado_Real + ". ¡No adivinó!");
    }

    Jugar_Otra_Vez = prompt("¿Quiere jugar otra vez? (SI / NO)");

    if (Jugar_Otra_Vez) {
        Jugar_Otra_Vez = Jugar_Otra_Vez.toUpperCase();
    }

    } while (Jugar_Otra_Vez === "SI");

    alert("Gracias por jugar. Nombre: Sergio Giron, Carnet: 26003835");