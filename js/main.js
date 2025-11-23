const colores = ['#00FFFF', '#FF69B4', '#FFD700', '#ADFF2F', '#1E90FF', '#FF4500'];
const vaso = document.querySelector('.vaso');
const agua = document.querySelector('.agua');
const boton = document.querySelector('.boton-siguiente');
let nivelAgua = 0;

// Registrar sonidos
createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.registerSound("https://assets.codepen.io/21542/howler-demo-bg-music.mp3", "rain");
createjs.Sound.registerSound("https://assets.codepen.io/21542/sound-rise-01.mp3", "drop");
createjs.Sound.registerSound("https://assets.codepen.io/21542/sound-rise-01.mp3", "success");

// ---------------------------
//  MENSAJE INICIAL TOASTIFY
// ---------------------------
window.addEventListener('DOMContentLoaded', () => {
    // Mostrar mensaje inicial
    Toastify({
        text: "Llena el vaso de emociones",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "linear-gradient(to right, #00FFFF, #1E90FF)",
        style: {
            fontSize: "1.5rem",
            padding: "15px 25px",
            minWidth: "300px",
            textAlign: "center"
        }
    }).showToast();

    // Iniciar sonido de lluvia
    createjs.Sound.play("rain", { loop: -1, volume: 0.3 });
});

// Mover el vaso con el mouse
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

    // Posición inicial
    gota.style.left = Math.random() * window.innerWidth + 'px';

    // Posición final
    const vasoRect = vaso.getBoundingClientRect();
    const destinoY = vasoRect.bottom - 15;

    // Animación
    const duracion = 2000 + Math.random() * 1000;
    gota.animate([
        { transform: 'translateY(0px)', opacity: 0.9 },
        { transform: `translateY(${destinoY}px)`, opacity: 1 }
    ], {
        duration: duracion,
        easing: 'ease-in'
    });

    // Evaluación al caer
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

            createjs.Sound.play("drop", { volume: 0.5 });

            if (nivelAgua >= 100) {
                boton.style.display = 'block';
                createjs.Sound.play("success", { volume: 0.7 });
            }
        }

        gota.remove();
    }, duracion);
}

// Generar gotas constantemente
setInterval(crearGota, 100);

// Ir a la siguiente página
function siguientePagina() {
    window.location.href = "alegria_2.html";
}
