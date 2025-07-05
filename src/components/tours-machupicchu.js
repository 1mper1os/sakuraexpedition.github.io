import trainToursData from './../jsons/train-tours.json';
import "./../css/train-tours.css";

// Reajustamos la lógica del carrusel para un bucle más suave sin saltos visibles.
// Se duplican los elementos para que siempre haya un "siguiente" o "anterior" grupo para mostrar.

let autoSlideInterval;
const SLIDE_INTERVAL_TIME = 5000; // 5 segundos para el auto-slide
const CARDS_PER_GROUP = 3; // Número de tarjetas visibles a la vez

function createTrainTourCard(tour, index) {
    return `
        <div class="tour-card animate-fade-in-up" style="animation-delay: ${index * 0.05}s;">
            <img src="${tour.image}" alt="${tour.alt}" class="tour-card-image" onerror="this.onerror=null;this.src='https://placehold.co/400x288/CCCCCC/333333?text=Imagen+No+Disp.'">
            <div class="tour-card-overlay"></div>
            <div class="tour-card-content">
                <span class="tour-badge bg-[#004351]">
                    <i data-lucide="train" class="w-4 h-4"></i> Tour Tren
                </span>
                <p class="text-sm font-light mb-1">${tour.location}</p>
                <h3 class="text-2xl font-bold mb-2 leading-tight">${tour.title}</h3>
                <p class="text-lg font-medium mb-4">Desde US$${tour.price}</p>
                <div class="tour-description-hidden">
                    <p class="text-sm leading-relaxed">Duración: ${tour.durationText}. Descubre los impresionantes paisajes andinos, disfruta de un viaje cómodo y seguro, y llega al corazón de una de las maravillas del mundo.</p>
                    <button class="read-more-button">
                        Leer Más
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

export function getTrainToursHTML() {
    return `
        <div class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-9 py-10 md:py-16">
            <h2 class="text-center text-4xl font-extrabold text-[#aa252e] mb-2">Los mejores tours a Machu Picchu por tren</h2>
            <div class="divider2"></div>
            <div class="mb-10 text-center max-w-3xl mx-auto">
                <p class="text-gray-700 text-lg leading-relaxed animate-fade-in-delay">
                    Vive una experiencia única hacia <strong class="font-bold" style="color:#aa252e">Machu Picchu viajando en tren</strong> desde Cusco.
                    Descubre los impresionantes paisajes andinos, disfruta de un viaje cómodo y seguro, y llega al corazón de una de las maravillas del mundo.
                    Nuestros <strong class="font-bold" style="color:#e27e08">tours en tren</strong> están diseñados para brindarte la mejor experiencia. Con guías expertos, atención personalizada y un enfoque en tu seguridad, garantizamos un viaje inolvidable.
                    <strong class="font-bold" style="color:#004351">Reserva ahora</strong> y vive la magia de Machu Picchu con la tranquilidad de un servicio confiable y profesional.
                </p>
            </div>
            
            <div class="relative flex justify-center">
                <button class="absolute left-0 top-1/2 -translate-y-1/2 text-5xl text-orange-500 hover:text-orange-600 transition-transform duration-300 transform hover:scale-110 focus:outline-none z-10 p-2 rounded-full bg-white bg-opacity-75 shadow-md"
                        onclick="window.slideTrainCarousel(-1)" aria-label="Scroll left">
                    <i class="bi bi-chevron-left-circle-fill"></i>
                </button>

                <div id="train-carousel" class="flex overflow-x-hidden no-scrollbar scroll-smooth px-8 space-x-6"></div>

                <button class="absolute right-0 top-1/2 -translate-y-1/2 text-5xl text-orange-500 hover:text-orange-600 transition-transform duration-300 transform hover:scale-110 focus:outline-none z-10 p-2 rounded-full bg-white bg-opacity-75 shadow-md"
                        onclick="window.slideTrainCarousel(1)" aria-label="Scroll right">
                    <i class="bi bi-chevron-right-circle-fill"></i>
                </button>
            </div>
        </div>
    `;
}

export function initTrainToursLogic() {
    const container = document.getElementById("train-carousel");
    if (!container) return;

    // Para el bucle infinito y sin saltos, repetimos los datos al menos 3 veces:
    // [Últimas tarjetas originales] + [Todas las tarjetas originales] + [Primeras tarjetas originales]
    // En este caso, con 6 elementos y 3 visibles:
    // [4, 5, 0] + [0, 1, 2, 3, 4, 5] + [0, 1, 2]
    // Un total de 3 + 6 + 3 = 12 tarjetas en el DOM.

    const originalCardsHtml = trainToursData.map((tour, idx) => createTrainTourCard(tour, idx)).join("");
    const clonedPrefixHtml = trainToursData.slice(-CARDS_PER_GROUP).map((tour, idx) => createTrainTourCard(tour, idx - CARDS_PER_GROUP)).join(""); // Clonar las últimas para el prefijo
    const clonedSuffixHtml = trainToursData.slice(0, CARDS_PER_GROUP).map((tour, idx) => createTrainTourCard(tour, idx + trainToursData.length)).join(""); // Clonar las primeras para el sufijo

    container.innerHTML = clonedPrefixHtml + originalCardsHtml + clonedSuffixHtml;

    // Lucide render
    setTimeout(() => {
        if (window.lucide) lucide.createIcons();
        
        // Calcular el ancho de una tarjeta más su gap
        const cardWidth = 380; // Min-width en CSS
        const gap = 24; // space-x-6 (1.5rem)
        const itemFullWidth = cardWidth + gap;

        // La posición inicial del scroll debe ser el inicio de los elementos originales.
        // Los elementos originales comienzan después del `clonedPrefixHtml` (que son CARDS_PER_GROUP elementos).
        const initialScrollPosition = itemFullWidth * CARDS_PER_GROUP;
        
        // Centrar este bloque de 3 tarjetas iniciales en el contenedor visible
        // Necesitamos el ancho total del contenedor visible del carrusel.
        // Esto lo manejaremos en CSS con el `max-width` en el padre y `justify-content: center;`

        container.scrollLeft = initialScrollPosition;

        startAutoSlide(); // Iniciar el auto-slide
    }, 100); // Pequeño retraso para asegurar que el DOM esté listo

    // Exponer la función slideTrainCarousel globalmente para los onclick en HTML
    window.slideTrainCarousel = slideTrainCarousel;

    // Pausar el auto-slide en hover
    container.addEventListener('mouseenter', pauseAutoSlide);
    container.addEventListener('mouseleave', startAutoSlide);
}

export function trainTours() {
    return getTrainToursHTML();
}

export function initTrainTours() {
    initTrainToursLogic();
}

function slideTrainCarousel(direction) {
    const container = document.getElementById("train-carousel");
    if (!container) return;

    pauseAutoSlide(); // Pausar el auto-slide en interacción manual

    const cardWidth = 380;
    const gap = 24;
    const itemFullWidth = cardWidth + gap;
    const originalDataLength = trainToursData.length; // 6
    const totalClonedPrefixCards = CARDS_PER_GROUP; // 3 clonadas al inicio
    const totalClonedSuffixCards = CARDS_PER_GROUP; // 3 clonadas al final
    
    // Calcula la posición objetivo
    let targetScrollLeft = container.scrollLeft + (direction * itemFullWidth * CARDS_PER_GROUP);

    container.style.scrollBehavior = 'smooth';
    container.scrollLeft = targetScrollLeft;

    // Lógica para el bucle infinito sin saltos visibles:
    // Cuando el carrusel se acerca al final del contenido duplicado (o al inicio),
    // reinicia el scroll sin transición.
    if (direction === 1) { // Moviéndose a la derecha
        // Si estamos en las últimas tarjetas originales y el siguiente paso nos lleva a las clonadas del final
        // O si ya estamos en las clonadas del final y el siguiente paso nos saca del rango
        if (container.scrollLeft >= (itemFullWidth * (originalDataLength + totalClonedPrefixCards - CARDS_PER_GROUP))) {
            setTimeout(() => {
                container.style.scrollBehavior = 'auto'; // Desactivar smooth
                // Saltar al inicio de las tarjetas originales (después del prefijo clonado)
                container.scrollLeft = itemFullWidth * totalClonedPrefixCards;
                // console.log("Jumped to start (right)");
            }, 600); // Tiempo para que termine la animación actual
        }
    } else { // Moviéndose a la izquierda
        // Si estamos en las primeras tarjetas originales y el paso anterior nos llevó a las clonadas del inicio
        // O si ya estamos en las clonadas del inicio y el paso anterior nos saca del rango
        if (container.scrollLeft <= (itemFullWidth * totalClonedPrefixCards)) {
            setTimeout(() => {
                container.style.scrollBehavior = 'auto'; // Desactivar smooth
                // Saltar al final de las tarjetas originales (antes del sufijo clonado)
                container.scrollLeft = itemFullWidth * (originalDataLength + totalClonedPrefixCards - CARDS_PER_GROUP);
                // console.log("Jumped to end (left)");
            }, 600);
        }
    }
    startAutoSlide(); // Reiniciar auto-slide
}

function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        slideTrainCarousel(1); // Mueve el carrusel una posición a la derecha
    }, SLIDE_INTERVAL_TIME);
}

function pauseAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Asegúrate de que las funciones estén disponibles globalmente si son llamadas desde el HTML
window.slideTrainCarousel = slideTrainCarousel;
window.startAutoSlide = startAutoSlide;
window.pauseAutoSlide = pauseAutoSlide;