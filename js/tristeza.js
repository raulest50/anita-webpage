// Registrar sonidos
createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.registerSound("https://assets.codepen.io/21542/howler-demo-bg-music.mp3", "tristeza"); // URL de ejemplo, reemplazar con un sonido de tristeza
createjs.Sound.registerSound("https://assets.codepen.io/21542/sound-rise-01.mp3", "click"); // URL de ejemplo, reemplazar con un sonido de clic

// Reproducir sonido de fondo al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    createjs.Sound.play("tristeza", {loop: -1, volume: 0.3});
});

// Agregar efecto de sonido a los botones
document.addEventListener('DOMContentLoaded', () => {
    const botonSiguiente = document.querySelector('.boton-siguiente');
    const botonVolver = document.querySelector('.boton-volver');
    
    if (botonSiguiente) {
        botonSiguiente.addEventListener('click', () => {
            createjs.Sound.play("click", {volume: 0.6});
            // El redireccionamiento ya está configurado con onclick en el HTML
        });
    }
    
    if (botonVolver) {
        botonVolver.addEventListener('click', () => {
            createjs.Sound.play("click", {volume: 0.6});
            // El redireccionamiento ya está configurado con onclick en el HTML
        });
    }
});