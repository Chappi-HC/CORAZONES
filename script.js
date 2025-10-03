document.addEventListener('DOMContentLoaded', () => {
    const galaxy = document.querySelector('.galaxy-background');
    const quoteDisplay = document.getElementById('quote-display');
    const currentQuoteElement = document.getElementById('current-quote');
    const closeQuoteButton = document.getElementById('close-quote');

    // Array de frases lindas
    const lovelyQuotes = [
        "Eres la estrella más brillante de mi galaxia.",
        "Que tu día esté lleno de alegría y magia.",
        "Cada momento contigo es un tesoro.",
        "Tu sonrisa ilumina mi universo.",
        "Nunca dejes de brillar, el mundo te necesita.",
        "Eres la mas hermosa del universo.",
        "Que el amor te guíe siempre.",
        "Tu existencia es un hermoso regalo.",
        "Cree en ti mismo, eres capaz de todo.",
        "Hoy es un buen día para ser feliz.",
        "TE AMO."
    ];

    // Función para crear un corazón
    function createHeart() {
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.innerHTML = '❤️'; // El emoji de corazón

        // Posición aleatoria
        const x = Math.random() * (window.innerWidth - 70); // Ajusta el rango para corazones más grandes
        const y = Math.random() * (window.innerHeight - 70);
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        // Añadir animación de flotar con un retraso y duración aleatoria
        const animationDelay = Math.random() * 8; // Retraso de 0 a 8 segundos para más variedad
        const animationDuration = 10 + Math.random() * 10; // Duración de 10 a 20 segundos para un movimiento más lento y "majestuoso"
        heart.style.animationDelay = `${animationDelay}s`;
        heart.style.animationDuration = `${animationDuration}s`;
        
        // Asignar una dirección inicial aleatoria a la animación para más variedad
        if (Math.random() < 0.5) {
            heart.style.animationDirection = 'alternate-reverse';
        }


        // Evento click para mostrar la frase
        heart.addEventListener('click', () => {
            const randomQuote = lovelyQuotes[Math.floor(Math.random() * lovelyQuotes.length)];
            currentQuoteElement.textContent = randomQuote;
            quoteDisplay.classList.remove('hidden'); // Muestra el contenedor de la frase
            
            // Opcional: hacer que el corazón desaparezca o cambie de color al ser clicado
            heart.style.opacity = '0';
            heart.style.pointerEvents = 'none'; // Deshabilita clics en este corazón
            setTimeout(() => {
                heart.remove(); // Elimina el corazón después de un tiempo
            }, 1000); // 1 segundo para que la opacidad desaparezca
        });

        galaxy.appendChild(heart); // Añade el corazón a la galaxia

        // Eliminar corazones viejos para evitar demasiados elementos
        setTimeout(() => {
            heart.remove();
        }, 30000); // Los corazones desaparecen después de 30 segundos (más tiempo con animaciones más largas)
    }

    // Generar nuevos corazones cada cierto intervalo
    setInterval(createHeart, 1000); // Crea un corazón cada 1 segundo

    // Evento para cerrar la caja de la frase
    closeQuoteButton.addEventListener('click', () => {
        quoteDisplay.classList.add('hidden'); // Oculta el contenedor de la frase
    });

    // Crear algunos corazones al inicio para que la galaxia no esté vacía
    for (let i = 0; i < 15; i++) { // Más corazones iniciales
        createHeart();
    }
});