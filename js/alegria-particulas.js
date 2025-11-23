(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const canvas = document.getElementById('particles-canvas');
        if (!canvas) return;

        const particles = [];
        const PARTICLE_COUNT = 75;

        const randomBetween = (min, max) => Math.random() * (max - min) + min;

        const createSparkles = (x, y) => {
            const sparkles = 8;
            for (let i = 0; i < sparkles; i += 1) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';

                const angle = Math.random() * Math.PI * 2;
                const distance = randomBetween(6, 26);
                const offsetX = Math.cos(angle) * distance;
                const offsetY = Math.sin(angle) * distance;

                sparkle.style.left = `${x + offsetX}px`;
                sparkle.style.top = `${y + offsetY}px`;
                sparkle.style.animationDelay = `${Math.random() * 0.2}s`;

                canvas.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 750);
            }
        };

        const respawnParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = randomBetween(14, 30);
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.setProperty('--float-duration', `${randomBetween(9, 15)}s`);
            particle.style.setProperty('--float-delay', `${Math.random() * 4}s`);

            particle.addEventListener('animationiteration', () => {
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
            });

            particle.addEventListener('click', (event) => {
                event.stopPropagation();
                popParticle(particle, event.clientX, event.clientY);
            });

            canvas.appendChild(particle);
            particles.push(particle);
            return particle;
        };

        const popParticle = (particle, x, y) => {
            if (!particle) return;
            createSparkles(x, y);
            particle.classList.add('fade-out');

            setTimeout(() => {
                const index = particles.indexOf(particle);
                if (index !== -1) particles.splice(index, 1);
                particle.remove();
                respawnParticle();
            }, 260);
        };

        for (let i = 0; i < PARTICLE_COUNT; i += 1) {
            respawnParticle();
        }

        canvas.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.classList.contains('particle')) return;

            createSparkles(event.clientX, event.clientY);
            const randomParticle = particles[Math.floor(Math.random() * particles.length)];
            popParticle(randomParticle, event.clientX, event.clientY);
        });
    });
})();
