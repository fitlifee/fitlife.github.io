ScrollReveal().reveal('.comidas', { delay: 250 });
ScrollReveal().reveal('.suplementos', { delay: 1000 });
ScrollReveal().reveal('.planes', { delay: 1900 });

ScrollReveal().reveal('.cesar', { delay: 700 });
ScrollReveal().reveal('.papas', { delay: 900 });
ScrollReveal().reveal('.frutas', { delay: 1100 });

ScrollReveal().reveal('.pre', { delay: 1300 });
ScrollReveal().reveal('.prote', { delay: 1500 });
ScrollReveal().reveal('.argi', { delay: 1700 });


ScrollReveal().reveal('.reloj', { delay: 2100 });


// Obtiene el día de la semana (0 = Domingo, 1 = Lunes, 2 = Martes, etc.)
var diaSemana = new Date().getDay();
        
// Define un arreglo de enlaces correspondientes a cada día de la semana
var enlaces = [
    "index-domingo.html",   // Domingo
    "index-lunes.html",     // Lunes
    "index-martes.html",    // Martes
    "index-miercoles.html", // Miércoles
    "index-jueves.html",    // Jueves
    "index-viernes.html",   // Viernes
    "index-sabado.html"     // Sábado
];

// Redirige a la página correspondiente al día de la semana actual
window.location.href = enlaces[diaSemana];