const colores = ['#00FFFF', '#FF69B4', '#FFD700', '#ADFF2F', '#1E90FF', '#FF4500'];
const vaso = document.querySelector('.vaso');
const agua = document.querySelector('.agua');
const boton = document.querySelector('.boton-siguiente');
let nivelAgua = 0;

// Mover el vaso siguiendo el cursor (eje X)
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const vasoAncho = vaso.offsetWidth / 2;
    vaso.style.left = `${x - vasoAncho}px`;
});

function crearGota() {
    const gota = document.createElement('div');
    gota.classList.add('gota');
    gota.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    document.body.appendChild(gota);

    // Posición inicial aleatoria
    gota.style.left = Math.random() * window.innerWidth + 'px';

    // Calcular punto final (fondo del vaso)
    const vasoRect = vaso.getBoundingClientRect();
    const destinoY = vasoRect.bottom - 15;

    // Animación de caída
    const duracion = 2000 + Math.random() * 1000;
    gota.animate([
        { transform: 'translateY(0px)', opacity: 0.9 },
        { transform: `translateY(${destinoY}px)`, opacity: 1 }
    ], {
        duration: duracion,
        easing: 'ease-in'
    });

    // Evaluar si entra en el vaso al finalizar
    setTimeout(() => {
        const vasoRect = vaso.getBoundingClientRect();
        const gotaRect = gota.getBoundingClientRect();

        if (
            gotaRect.left > vasoRect.left &&
            gotaRect.right < vasoRect.right &&
            gotaRect.bottom > vasoRect.top &&
            gotaRect.bottom < vasoRect.bottom + 20
        ) {
            nivelAgua = Math.min(nivelAgua + 5, 100);
            agua.style.height = nivelAgua + '%';
            agua.style.background = `linear-gradient(to top, ${gota.style.backgroundColor}, rgba(255,255,255,0.2))`;

            if (nivelAgua >= 100) {
                boton.style.display = 'block';
            }
        }

        gota.remove();
    }, duracion);
}

// Generar gotas continuamente
setInterval(crearGota, 100);

// Cambiar de página
function siguientePagina() {
    window.location.href = "alegria_2.html";
}
