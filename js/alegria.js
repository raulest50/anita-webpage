// Registrar sonidos
createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.registerSound("https://assets.codepen.io/21542/howler-demo-bg-music.mp3", "alegria"); // URL de ejemplo, reemplazar con un sonido de alegría
createjs.Sound.registerSound("https://assets.codepen.io/21542/sound-rise-01.mp3", "click"); // URL de ejemplo, reemplazar con un sonido de clic

// Reproducir sonido de fondo al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    createjs.Sound.play("alegria", {loop: -1, volume: 0.3});
});

// Agregar efecto de sonido al botón
document.addEventListener('DOMContentLoaded', () => {
    const botonSiguiente = document.querySelector('.boton-siguiente');
    
    if (botonSiguiente) {
        botonSiguiente.addEventListener('click', () => {
            createjs.Sound.play("click", {volume: 0.6});
            // El redireccionamiento ya está configurado con onclick en el HTML
        });
    }
});