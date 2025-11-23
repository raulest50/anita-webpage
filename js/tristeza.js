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
        botonSiguiente.addEventListener('click', (event) => {
            event.preventDefault();

            createjs.Sound.play("click", {volume: 0.6});

            setTimeout(() => {
                window.location.href = 'ira_4.html';
            }, 200);
        });
    }

    if (botonVolver) {
        botonVolver.addEventListener('click', (event) => {
            event.preventDefault();

            createjs.Sound.play("click", {volume: 0.6});

            setTimeout(() => {
                window.location.href = 'alegria_2.html';
            }, 200);
        });
    }
});
